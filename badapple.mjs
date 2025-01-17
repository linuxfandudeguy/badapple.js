import chalk from 'chalk';
import { spawn } from 'child_process';
import { getArgs } from './badapple.config.mjs'; // Import your config

(async () => {
  try {
    // Styled banner
    const banner = `
${chalk.redBright('*************************************')}
${chalk.whiteBright('*')}        ${chalk.bold.green('Welcome to')}                ${chalk.whiteBright('*')}
${chalk.whiteBright('*')}       ${chalk.bold.magentaBright('Bad Apple!!!.js')}            ${chalk.whiteBright('*')}
${chalk.redBright('*************************************')}
    `;
    console.log(banner);
    console.log(chalk.cyan('\nStarting Bad Apple in ASCII art mode...\n'));
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.clear();

    // Spawn mplayer with customizable arguments
    const args = getArgs(); // Default arguments from config
    const mplayer = spawn('./assets/mplayer', [...args, './assets/badapple.mp4'], { stdio: 'inherit' });

    mplayer.on('close', (code) => {
      if (code === 0) {
        console.log(chalk.greenBright('\nPlayback completed successfully!'));
      } else {
        console.error(chalk.redBright(`\nPlayback failed with exit code ${code}`));
      }
    });
  } catch (error) {
    console.error(chalk.redBright('An error occurred:'), chalk.yellow(error.message));
  }
})();
