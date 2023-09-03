/*

Fix the function `adequateWaterTracker`. `adequateWaterTracker` should return
true if you drank water 4 or more days in each calendar week.

For example, in this week, [0, 0, 3, 1, 0, 4, 0], each day represents how many
cups of water you drank that day. In this example, there were only 3 days where
you drank at least one cup of water.

A calendar is represented by multiple weeks, 
[[0, 0, 3, 1, 0, 4, 0], [1, 2, 1, 2, 1, 3, 1]].

If you drank water for at least 4 days for every week in the calendar,
then return true. Otherwise, return false.

//!!START SILENT
Errors: 

1. noWater and water should be initialized inside of the first for loop
2. second for loop needs to be `for (let j = 0; j < week.length; j++)`
3. const day = week[j] (not calendar[j])
//!!END

*/

function adequateWaterTracker(calendar) {
  //!!ADD
  let noWater = 0;
  let water = 0;
  //!!END_ADD
  for (let i = 0; i < calendar.length; i++) {
    //!!START SILENT
    let noWater = 0;
    let water = 0;
    //!!END
    const week = calendar[i];
    //!!START SILENT
    for (let j = 0; j < week.length; j++) {
      const date = week[j]
    //!!END
    //!!ADD
    for (let j = 0; j < week.length - 1; j++) {
      const date = calendar[j]
    //!!END_ADD
      if (day === 0) {
        noWater++;
      } else {
        water++;
      }
    }
    //!!START SILENT
    if (noWater > water) return false;
    //!!END
  }
  //!!START SILENT
  return true;
  //!!END
  //!!ADD
  return noWater < water;
  //!!END_ADD
}

const calendar1 = [
  [0, 0, 3, 1, 0, 4, 0],
  [1, 2, 1, 2, 1, 3, 1],
];

console.log(adequateWaterTracker(calendar1)); // false

const calendar2 = [
  [1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1, 1],
];

console.log(adequateWaterTracker(calendar2)); // false

const calendar3 = [
  [1, 1, 1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0],
];

console.log(adequateWaterTracker(calendar3)); // true
