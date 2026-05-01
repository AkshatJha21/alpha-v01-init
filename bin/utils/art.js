import figlet from "figlet";
import chalk from "chalk";

export const banner = () => {
    const text = figlet.textSync('IRIS', {
        font: 'Slant',
        horizontalLayout: 'default',
    });
    console.log(chalk.cyan(text));
}

export const divider = () => {
    console.log(chalk.cyan('-'.repeat(50)));
}
