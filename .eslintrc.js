module.exports = {
    // root: true,
    // globals: {
    //     __DEV__: true,
    //     $:       true,
    //     Vue:     true,
    //     ga:      true,
    //     $gtag:   true,
    //     define:  true,
    //     $app:    true,
    //     Go:      true,
    //     $theme:  true,
    // },
    extends: [
        // add more generic rulesets here, such as:
        // 'eslint:recommended',
        'plugin:vue/vue3-recommended',
    ],
    // parser:        'vue-eslint-parser',
    // parserOptions: {
    //     parser:            "@babel/eslint-parser",
    //     requireConfigFile: false,
    //     ecmaVersion:       2020,
    //     sourceType:        "module",
    //     ecmaFeatures:      {
    //         jsx:          true,
    //         globalReturn: true,
    //     }
    // },
    env: {
        es2021: true,
    },
    rules: {
        // override/add rules settings here, such as:
        "indent":                           ["error", 4],
        "no-empty":                         ["error", { allowEmptyCatch: true }],
        "no-redeclare":                     "off",
        "no-unused-vars":                   ["error", { vars: "all", args: "after-used", ignoreRestSiblings: true }],
        "brace-style":                      ["error", "1tbs", { }],
        "object-curly-spacing":             ["error", "always"],
        "nonblock-statement-body-position": ["error", "below"],
        "array-bracket-spacing":            ["error", "never"],
        "space-before-blocks":              ["error", "always"],
        "comma-spacing":                    ["error", { before: false, after: true }],
        "comma-style":                      ["error", "last"],
        "arrow-spacing":                    ["error", { before: true, after: true }],
        "no-multi-spaces":                  ["error", { ignoreEOLComments: true }],
        "key-spacing":                      ["error", { beforeColon: false, align: "value" }],
        "semi":                             ["error", "never"],
        "lines-between-class-members":      ["error", "always"],
        "quote-props":                      ["error", "consistent-as-needed"],
        "padding-line-between-statements":  [
            "error",
            { blankLine: "always", prev: "if", next: "*" },
            { blankLine: "always", prev: "switch", next: "*" },
            { blankLine: "always", prev: "*", next: "switch" },
            { blankLine: "never", prev: "*", next: "block" },
        ],

        "vue/v-slot-style": ["error", {
            atComponent: "shorthand",
            default:     "shorthand",
            named:       "shorthand",
        }],
        "vue/no-unused-vars":                     'error',
        "vue/no-deprecated-functional-template":  "error",
        // "vue/require-slots-as-functions":         "off",
        "vue/multi-word-component-names":         "off",
        "vue/no-v-for-template-key-on-child":     "off",
        "vue/require-default-prop":               "off",
        "vue/no-deprecated-inline-template":      "error",
        "vue/no-deprecated-v-on-native-modifier": "error",
        "vue/no-deprecated-destroyed-lifecycle":  "error",
        "vue/require-explicit-emits":             "error",
        "vue/this-in-template":                   "error",
        "vue/no-mutating-props":                  "error",
        "vue/no-computed-properties-in-data":     "error",
        "vue/component-options-name-casing":      ["error", "PascalCase"],
        "vue/custom-event-name-casing":           ["error", "kebab-case"],
        "vue/no-unused-properties":               "error",
        "vue/padding-line-between-blocks":        ["error", "always"],
        "vue/static-class-names-order":           ["error"],
        "vue/no-deprecated-v-bind-sync":          "error",
        "vue/no-deprecated-slot-attribute":       "error",
        "vue/no-deprecated-scope-attribute":      "error",
        "vue/no-deprecated-slot-scope-attribute": "error",
        "vue/no-deprecated-filter":               "off",
        "vue/no-deprecated-props-default-this":   "error",
        "vue/prop-name-casing":                   ["error", "camelCase"],
        "vue/component-name-in-template-casing":  ["error", "kebab-case", {}],
        "vue/script-indent":                      ["error", 4, {
            baseIndent: 1,
            switchCase: 0,
            ignores:    []
        }],
        "vue/html-indent": ["error", 4, {
            attribute:                 1,
            baseIndent:                1,
            closeBracket:              0,
            alignAttributesVertically: true,
            ignores:                   []
        }],
        "vue/max-attributes-per-line": ["error", {
            singleline: 15,      
            multiline:  3,
        }],
        "vue/html-self-closing": ["error", {
            html: {
                void:      "always",
                normal:    "always",
                component: "always"
            },
            svg:  "always",
            math: "always"
        }],
        "vue/component-tags-order": ["error", {
            order: [["template", "graphql", "script"], "style"]
        }]
    },
    overrides: [
        {
            files: ["*.vue"],
            rules: {
                indent: "off",
            }
        }
    ]
}