module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "@react-native-community"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        semi:['error', 'never'],
        'comma-dangle':[2, 'never'],
        'react/jsx-filename-extention':[1, {extebsion: ['.js','.jsx']}],
        "prettier/prettier": ["error", { "singleQuote": true }],
        'no-use-before-define':[
            'error',
            {functions: true, classes: true, variables: false}
        ]
        
    }
}
