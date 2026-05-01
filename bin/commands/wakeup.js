import chalk from "chalk";
import { banner, divider } from "../utils/art.js";

export const wakeup = () => {
    console.clear();

    banner();

    console.log();
    divider();
    console.log(
        chalk.bold.white('  ◆   Online. Systems nominal.')
    );
    divider();
    console.log();

    console.log(
        chalk.cyan('    Welcome back, Boss.') +
        chalk.gray('    What can I do for you?')
    );

    console.log();
    console.log(chalk.gray('    Type') + chalk.white(' iris --help') + chalk.gray(' to see available commands.'));
    console.log();
}
