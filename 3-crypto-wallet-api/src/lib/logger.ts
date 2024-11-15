import chalk from 'chalk';
import { createLogger, format, transports } from 'winston';

const { timestamp, printf } = format;

const consoleFormat = printf(({ level, message, timestamp }) => {
  const levelUpper = level.toUpperCase();
  switch (levelUpper) {
    case 'INFO':
      message = chalk.green(message);
      level = chalk.green.bold(level);
      break;

    case 'ERROR':
      message = chalk.red(message);
      level = chalk.black.red.bold(level);
      break;

    default:
      break;
  }

  return `[${chalk.black.bold.white(timestamp)}] [${level}]: ${message}`;
});

function getLogger() {
  const consoleTransport = new transports.Console();

  const logger = createLogger({
    format: format.combine(
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      format.errors({ stack: true }),
      format.combine(timestamp(), format.splat(), consoleFormat),
    ),
    transports: [consoleTransport],
  });

  return logger;
}

export default getLogger();
