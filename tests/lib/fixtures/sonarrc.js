module.exports = {
    connector: {
        name: 'chrome',
        options: { waitFor: 1000 }
    },
    formatters: ['json'],
    rules: {
        'disallowed-headers': 'warning',
        'manifest-exists': 'warning',
        'manifest-file-extension': 'warning',
        'manifest-is-valid': 'warning',
        'no-friendly-error-pages': 'warning',
        'no-html-only-headers': 'warning',
        'no-protocol-relative-urls': 'warning',
        'x-content-type-options': 'warning'
    }
};
