var list = [1, 2, 3, 4];

for (var x = 0, ln = list.length; x < ln; x++) {
  setTimeout(
    function (y) {
      console.log("%d => %d", y, (list[y] += 10));
    },
    x*1000,
    x
  ); // we're passing x
}
