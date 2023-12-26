module.exports = {
    "extends": "stylelint-config-recommended-vue/scss",
    "rules": {
        // "indentation": [
        //     4,
        //     {
        //         "baseIndentLevel": 1,
        //     }
        // ],
        "color-no-invalid-hex": true,
        "block-no-empty": true,
        "custom-property-pattern": [
            "^([a-z][a-z0-9:]*)(-[a-z0-9]+)*$",
            {
              "message": "Expected custom property name to be kebab-case"
            }
        ],
        "selector-class-pattern": [
            "^([a-z][a-z0-9:]*)(-[a-z0-9]+)*$",
            {
              "message": "Expected custom class name to be kebab-case"
            }
        ],
        // "function-whitespace-after": "always",
        // "function-parentheses-space-inside": "always",
        // "function-parentheses-newline-inside": "always-multi-line",
        // "function-max-empty-lines": 0,
        "max-nesting-depth": 10,
        "comment-empty-line-before": [
            "always",
            {
                except: ["first-nested"],
                ignore: ["after-comment", "stylelint-commands"],
            }
        ],
        "comment-whitespace-inside": "always",
        // "max-empty-lines": 5,
        // "max-line-length": 250,
        // "no-eol-whitespace": true,
        // "no-missing-end-of-source-newline": true,
        // "no-extra-semicolons": true,
        "no-descending-specificity": null,
        "no-irregular-whitespace": true,
        // "declaration-block-semicolon-newline-after": "always",
        // "declaration-block-semicolon-newline-before": "never-multi-line",
        // "declaration-block-semicolon-space-before": "never",
        // "block-closing-brace-newline-before": "always",
        // "block-closing-brace-newline-after": "always",
        // "block-opening-brace-newline-after": "always",
        "rule-empty-line-before": "always",
    }
}