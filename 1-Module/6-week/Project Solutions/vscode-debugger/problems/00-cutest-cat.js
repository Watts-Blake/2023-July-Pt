/*

Fix the `cutestCat` function. Should return the cat with the highest `cuteness`
rating.
//!!START SILENT
Errors:

1. if (cat.cuteness > cutest.cutest)
2. cutest = cat
3. let cutest = cats[0]
4. let i = 1
//!!END
*/

function cutestCat(cats) {
  //!!START SILENT
  let cutest = cats[0];
  //!!END
  //!!ADD
  let cutest;
  //!!END_ADD
  //!!START SILENT
  let i = 1;
  //!!END
  //!!ADD
  let i = 0;
  //!!END_ADD

  while (i < cats.length) {
    const cat = cats[i];
    //!!START SILENT
    if (cat.cuteness > cutest.cuteness) {
    //!!END
    //!!ADD
    if (cat > cutest) {
    //!!END_ADD
      //!!START SILENT
      cutest = cat;
      //!!END
      //!!ADD
      cutest = cat.cuteness;
      //!!END_ADD
    }
    i++;
  }

  return cutest;
}

const cats = [
  { name: 'Fluffy', cuteness: 9 },
  { name: 'Princess', cuteness: 6 },
  { name: 'Tiger', cuteness: 7 },
  { name: 'Indie', cuteness: 5 },
]
debugger
console.log(cutestCat(cats)); // { name: 'Fluffy', cuteness: 9 }