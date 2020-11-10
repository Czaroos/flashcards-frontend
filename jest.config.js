module.exports = {
  testEnvironment: "node",
  transform: {
    "\\.(ts|tsx)?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "json", "js", "node"],
  moduleDirectories: ["node_modules", "src"],
  testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.ts", "!src/**/*.d.ts"],
};
