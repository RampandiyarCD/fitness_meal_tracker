import winston, { format, transports, Logger } from "winston";

export const infoFilter = format((info) => {
  return info.level === "info" ? info : false;
});

export const logger: Logger = winston.createLogger({
  format: format.combine(
    format.timestamp(),
    format.json(),
    format.prettyPrint()
  ),
  transports: [
    new transports.File({
      filename: "logger/err.log",
      level: "error",
      format: format.combine(
        format.timestamp(),
        format.json(),
        format.prettyPrint()
      ),
    }),
    new transports.File({
      filename: "logger/info.log",
      level: "info",
      format: format.combine(
        infoFilter(),
        format.timestamp(),
        format.json(),
        format.prettyPrint()
      ),
    }),
    new transports.File({ filename: "logger/combined.log" }),
  ],
});
