
const config = {
    setupFilesAfterEnv: ["jest-chain"],
    reporters: ["default", ["./node_modules/jest-html-reporter", {"pageTitle": "Test Report"}]],
};

export default config;