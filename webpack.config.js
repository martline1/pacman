const { readdirSync }      = require("fs");
const { resolve }          = require("path");
const HtmlWebpackPlugin    = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Import Own Modules
const settings = require("./settings.json");

module.exports = (env, argv) => {
	const buildMode = argv.mode === "development"
		? "development"
		: "production";

	// Get all main folders to add absolute imports
	const srcFolders = readdirSync(resolve(__dirname, "src"), { withFileTypes : true })
		.filter(dirEnt => dirEnt.isDirectory())
		.map(dirEnt => dirEnt.name);

	return {
        mode         : buildMode,
        target       : "electron-renderer",
        watchOptions : {
            ignored : /[/\/](node_modules|public)[/\/]/,
        },
        entry : {
            app : `${__dirname}/src/index.jsx`,
        },
        output : {
            path       : `${__dirname}/public`,
			filename   : buildMode === "production" ? "js/[name].[contenthash].js" : "js/[name].js",
            publicPath : "./",
        },
        resolve : {
			extensions : [".js", ".jsx", ".json", ".css"],

			// Absolute imports
            alias : srcFolders.reduce((acc, folderName) => ({
				...acc,
				[`~/${folderName}`] : resolve(__dirname, `src/${folderName}`),
			}), {}),
        },
        module : {
            rules : [
                {
                    test    : /\.(css)$/,
                    exclude : /[/\/]node_modules[/\/]/,
                    use     : [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                    ],
                },
                {
                    test    : /\.(js|jsx)$/,
                    exclude : /[/\/]node_modules[/\/]/,
                    use     : {
                        loader  : "babel-loader",
                        options : {
                            presets : [
                                "@babel/preset-env",
                                "@babel/preset-react",
                            ],
                        },
                    },
                },
                {
                    test    : /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|ico)$/,
                    exclude : /[/\/]node_modules[/\/]/,
                    use     : {
                        loader  : "url-loader",
                        options : {
                            limit    : 8000,
                            fallback : "file-loader",
                            name     : `media/[name]${buildMode === "production" ? ".[hash]" : ""}.[ext]`,
                        },
                    },
                },
            ],
        },
        plugins : [
            new MiniCssExtractPlugin({ filename : "css/[name].css" }),
			new HtmlWebpackPlugin({
				lang     : settings.lang,
				title    : settings.appName,
				template : `${__dirname}/src/index.html`,
				xhtml    : true,
				meta     : {
					"viewport"    : "width=device-width, initial-scale=1, shrink-to-fit=no",
					"theme-color" : settings.themeColor,
				},
			}),
        ],
        externals : {
            // global app settings
            settings : JSON.stringify({
				...settings,
				isProduction : Boolean(buildMode === "production"),
            }),
        },
    };
};
