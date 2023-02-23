/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['src/proto/*', 'build/*'],
  coveragePathIgnorePatterns: ['src/proto/*', 'build/*'],
};
