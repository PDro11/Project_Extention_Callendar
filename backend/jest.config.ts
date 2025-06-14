import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  rootDir: './',
  testMatch: ['<rootDir>/tests/unit/**/*.test.ts'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/tests/',
    '/src/config/',
    '/src/app.ts',
    '/src/routes/',
  ],
  setupFiles: ['<rootDir>/tests/setup.ts'],
};

export default config;