module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.vue$': '@vue/vue3-jest',
        '^.+\\js$': 'babel-jest'
    },
    roots: ['<rootDir>/src/', '<rootDir>/tests/'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    }
};
