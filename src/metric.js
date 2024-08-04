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
