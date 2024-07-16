/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
	testEnvironment: "node",
	transform: {
		"^.+.tsx?$": ["ts-jest", {}],
	},
	testMatch: ["**/__tests__/units/**/*.[jt]s?(x)"],
	setupFilesAfterEnv: ["./src/__tests__/__mocks__/prisma.ts"],
};
