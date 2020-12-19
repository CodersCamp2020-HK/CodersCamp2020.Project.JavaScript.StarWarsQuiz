module.exports = {
    moduleFileExtensions: ['js', 'json', 'ts'],
    testRegex: '(spec|test)[.]js',
    coverageDirectory: 'coverage',
    setupFiles: ['./test/setupJest.js'],
    collectCoverageFrom: ['./src/**'],
};
