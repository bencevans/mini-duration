const test = require('tape');
const miniDuration = require('.');

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

test('mini duration', t => {
  t.equal(miniDuration('4s'), 4 * SECOND);
  t.equal(miniDuration('6m'), 6 * MINUTE);
  t.equal(miniDuration('2h'), 2 * HOUR);
  t.equal(miniDuration('5d'), 5 * DAY);
  t.equal(miniDuration('5d12h'), (5 * DAY) + (12 * HOUR));
  t.equal(miniDuration('30d'), 30 * DAY);
  t.equal(miniDuration('d'), null);
  t.equal(miniDuration('23'), null);
  t.equal(miniDuration('23e'), null);
  t.end();
});

