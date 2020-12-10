module.exports = {
	extends : [
		"eslint:recommended",
		"plugin:react/recommended",
		"airbnb",
		"airbnb/hooks",
	],
	env : {
		node    : true,
		browser : true,
	},
	parserOptions : {
		ecmaFeatures : {
			jsx : true,
		},
	},
	plugins : [
		"react",
		"import",
		"react-hooks",
		"align-import",
	],
	parser : "babel-eslint",
	rules  : {
		"max-len" : [
			"error",
			{
				code       : 120,
				tabWidth   : 4,
				ignoreUrls : true,
			},
		],
		indent : [
			"error",
			"tab",
			{
				SwitchCase : 1,
				// Delete next line when problem is fixed
				ignoredNodes : ["TemplateLiteral"],
			},
		],
		"no-mixed-spaces-and-tabs" : [
			"error",
			"smart-tabs",
		],
		quotes : [
			"error",
			"double",
		],
		semi : [
			"error",
			"always",
		],
		"no-unused-vars" : [
			"error",
			{
				args : "none",
			},
		],
		"comma-dangle" : [
			"error",
			{
				arrays    : "always-multiline",
				objects   : "always-multiline",
				imports   : "always-multiline",
				exports   : "always-multiline",
				functions : "ignore",
			},
		],
		"key-spacing" : [
			"error",
			{
				singleLine : {
					beforeColon : true,
					afterColon  : true,
				},
				multiLine : {
					align       : "colon",
					beforeColon : true,
					afterColon  : true,
				},
			},
		],
		"no-tabs"            : "off",
		"no-trailing-spaces" : "error",
		"eol-last"           : [
			"error",
			"always",
		],
		"keyword-spacing"                   : "error",
		"space-before-blocks"               : "error",
		"react/jsx-filename-extension"      : "off",
		"import/no-unresolved"              : "off",
		"prefer-object-spread"              : "off",
		"react/button-has-type"             : "off",
		"no-confusing-arrow"                : "off",
		"react/jsx-props-no-spreading"      : "off",
		"no-unused-expressions"             : "off",
		"func-names"                        : "off",
		"no-throw-literal"                  : "off",
		"import/no-extraneous-dependencies" : "off",
		"consistent-return"                 : "off",
		"eqeqeq"                            : "off",
		"no-restricted-syntax"              : "off",
		"no-restricted-globals"             : "off",
		"react/forbid-prop-types"           : "off",
		"no-plusplus"                       : "off",
		"template-curly-spacing"            : "off",
		"align-import/align-import"         : "error",
		"implicit-arrow-linebreak"          : [
			"error",
			"beside",
		],
		"arrow-parens" : [
			2,
			"as-needed",
			{
				requireForBlockBody : true,
			},
		],
		"linebreak-style" : [
			"off",
			"windows",
		],
		"no-multi-spaces" : [
			"error",
			{
				exceptions : {
					"ImportDeclaration"  : true,
					"VariableDeclarator" : true,
				},
			},
		],
		"comma-spacing" : [
			"error",
			{
				before : false,
				after  : true,
			},
		],
		"no-var"               : "error",
		"prefer-const"         : "error",
		"no-const-assign"      : "error",
		"prefer-template"      : "error",
		"object-curly-spacing" : [
			"error",
			"always",
		],
		"camelcase"  : "error",
		"no-console" : [
			"error",
			{
				allow : [
					"warn",
					"error",
					"info",
				],
			},
		],
		// React rules
		"react/react-in-jsx-scope" : "off",
		"import/extensions"        : [
			"error",
			{
				jsx : "always",
				js  : "never",
				png : "always",
				jpg : "always",
				svg : "always",
			},
		],
		"react/jsx-indent" : [
			1,
			"tab",
		],
		"react/jsx-indent-props" : [
			1,
			"tab",
		],
	},
	settings : {
		react : {
			version : "detect",
		},
	},
};
