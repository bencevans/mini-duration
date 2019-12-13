const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;

const durationLabels = {
  s: SECOND,
  m: MINUTE,
  h: HOUR,
  d: DAY,
  w: WEEK
};

const miniDuration = inputString => {
  if (typeof (inputString) !== 'string' || inputString.length < 2) {
    return null;
  }

  const matched = inputString.match(/[a-zA-Z]+|\d+/g);

  if (matched.length % 2 !== 0) {
    return null;
  }

  let totalDuration = 0;

  for (let index = 0; index < matched.length; index += 2) {
    const num = parseFloat(matched[index], 10);
    const opString = matched[index + 1];

    if (opString in durationLabels === false) {
      return null;
    }

    totalDuration += num * durationLabels[opString];
  }

  return totalDuration;
};

module.exports = miniDuration;
