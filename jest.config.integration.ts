/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
	testEnvironment: "node",
	transform: {
		"^.+.tsx?$": ["ts-jest", {}],
	},
	testMatch: ["**/__tests__/integrations/**/*.[jt]s?(x)"],
	setupFilesAfterEnv: ["./src/__tests__/utils/clearDatabase.ts"],
};
