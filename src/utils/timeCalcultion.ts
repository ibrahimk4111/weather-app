import moment from "moment-timezone";

const getTimeZoneName = (timezone: number): string => {
  const timezoneInMinutes = timezone / 60;
  const possibleTimeZones = moment.tz.names().filter((name) => {
    const tzOffset = moment.tz(name).utcOffset();
    return tzOffset === timezoneInMinutes;
  });
  return possibleTimeZones.length ? possibleTimeZones[0] : "Unknown timezone";
};

export const timeAndDateWithTimestampAndTimezone = (
  timestamp: number,
  timezone: number
) => {
  // Create the Date object from the timestamp
  const date = new Date(timestamp * 1000);

  // Format the date and time according to the specified timezone
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "2-digit",
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: getTimeZoneName(timezone),
  };

  return date.toLocaleString("en-US", options);
};
