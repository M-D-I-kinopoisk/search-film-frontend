module.exports = {
  moduleNameMapper: {
    '\\.(less|scss|sass)$': 'identity-obj-proxy',
    '\\.(css)$': '<rootDir>/test/jest/__mocks__/styleMock.js',
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
};