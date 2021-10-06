module.exports =  async () => {
  return {
    moduleFileExtensions: [
      "js",
      "ts",
      "svelte",
      "json",
    ],
    setupFilesAfterEnv: [
      "@testing-library/jest-dom/extend-expect",
    ],
    testEnvironment: "jsdom",
    testPathIgnorePatterns: [
      "/node_modules/",
      "/build/",
      "/storybook-static/",
    ],
    transform: {
      "^.+\\.svelte$": "jest-transform-svelte",
      "^.+\\.js$": "babel-jest",
      "^.+\\.ts$": "ts-jest",
    },
  };
};
