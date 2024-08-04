export function convert(num, convertTo) {
  if (convertTo === "f") {
    let value = (num * 9) / 5;
    value += 32;
    value = Math.round(value * 10) / 10;

    return value;
  } else if (convertTo === "c") {
    let value = num - 32;
    value *= 5;
    value /= 9;
    value = Math.round(value * 10) / 10;

    return value;
  } else return "ERROR, please define second parameter as 'f' or 'c'";
}

export function formatDate(inputDate) {
  // Parse the input date string into a Date object
  const date = new Date(inputDate);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date format");
  }

  // Define options for formatting the date
  const options = {
    month: "short",
    day: "2-digit",
  };

  // Format the date using Intl.DateTimeFormat
  const formatter = new Intl.DateTimeFormat("en-US", options);
  const [month, day] = formatter.formatToParts(date).reduce(
    (acc, part) => {
      if (part.type === "month") acc[0] = part.value;
      if (part.type === "day") acc[1] = part.value;
      return acc;
    },
    ["", ""]
  );

  return `${month} ${day}`;
}
