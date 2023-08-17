const check = (updated) => {
  for (let i = 0; i < 9; i += 3) {
    if (
      updated[i].val !== "" &&
      updated[i].val === updated[i + 1].val &&
      updated[i].val === updated[i + 2].val
    ) {
      alert(`${updated[i].val} won!`);
      return true;
    }
  }
  for (let i = 0; i < 3; i++) {
    if (
      updated[i].val !== "" &&
      updated[i].val === updated[i + 3].val &&
      updated[i].val === updated[i + 6].val
    ) {
      alert(`${updated[i].val} won!`);
      return true;
    }
  }
  if (
    updated[0].val !== "" &&
    updated[0].val === updated[4].val &&
    updated[0].val === updated[8].val
  ) {
    alert(`${updated[0].val} won!`);
    return true;
  }

  if (
    updated[2].val !== "" &&
    updated[2].val === updated[4].val &&
    updated[2].val === updated[6].val
  ) {
    alert(`${updated[2].val} won!`);
    return true;
  }

  var flag = false;
  for (var i = 0; i < 9; i++) {
    if (updated[i].val === "") {
      flag = true;
      break;
    }
  }
  if (!flag) {
    alert("Draw");
    return true;
  }
};

export default check;
