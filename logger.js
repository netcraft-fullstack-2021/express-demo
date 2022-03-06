import fsPromise from 'fs/promises';

const loggerFilePath = './logFile.log';

export function writeToLog(logLevel, logMessage) {
   return fsPromise.appendFile(loggerFilePath, `${JSON.stringify({
        time: new Date(), level: logLevel, message: logMessage
    })}\n`);
}