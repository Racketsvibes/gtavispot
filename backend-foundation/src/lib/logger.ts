type LogLevel = 'INFO' | 'WARN' | 'ERROR';

class Logger {
  private formatMessage(level: LogLevel, message: string): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level}] ${message}`;
  }

  info(message: string, ...args: any[]) {
    console.log(this.formatMessage('INFO', message), ...args);
  }

  warn(message: string, ...args: any[]) {
    console.warn(this.formatMessage('WARN', message), ...args);
  }

  error(message: string, error?: any, ...args: any[]) {
    console.error(this.formatMessage('ERROR', message), ...args);
    if (error) {
      if (error instanceof Error) {
        console.error(error.stack);
      } else {
        console.error(JSON.stringify(error, null, 2));
      }
    }
  }
}

export const logger = new Logger();
