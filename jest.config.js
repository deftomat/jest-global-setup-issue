module.exports = {
  projects: [
    {
      displayName: 'unit',
      testMatch: ['<rootDir>/src/**/*.spec.js'],
    },
    {
      displayName: 'e2e',
      testMatch: ['<rootDir>/e2e/**/*.spec.js'],
      globalSetup: '<rootDir>/e2e/global-setup.js',
      globalTeardown: '<rootDir>/e2e/global-teardown.js'
    }
  ]
};
