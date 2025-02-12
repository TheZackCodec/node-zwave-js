import { red } from "ansi-colors";
import { generateCCAPIInterface } from "./generateCCAPIInterface";
import { generateCCExports } from "./generateCCExports";
import { generateCCValuesInterface } from "./generateCCValuesInterface";
// import { lintCCConstructors } from "./lintCCConstructor";
import { lintCCInterview } from "./lintCCInterview";

const argv = process.argv.slice(2);

const lint = () =>
	Promise.all([
		lintCCInterview(),
		// lintCCConstructors(),
	]);
const codegen = () =>
	Promise.all([
		generateCCAPIInterface(),
		generateCCValuesInterface(),
		generateCCExports(),
	]);

(async () => {
	if (argv.includes("lint")) {
		await lint();
	}

	if (argv.includes("codegen")) {
		await codegen();
	}
})().catch((e) => {
	console.error(red(e.message));
	console.error(" ");
	process.exit(1);
});
