function getHowManyDays(month, day) {
  let sumDay;
  if (month == 2 && day == 29) {
    let year = new Date().getFullYear();
    while (new Date(year, 2, 0).getDate() != 29) {
      year++
    }
    let now = new Date()
    let future = new Date(year, month - 1, day)

    let diff = future - now

    if (diff > 0) {
      sumDay = Math.floor(diff / 1000 / 60 / 60 / 24)
    } else if (diff == 0) {
      sumDay = 0;
    } else {
      let yearFuture = new Date().getFullYear() + 1;
      while (new Date(yearFuture, 2, 0).getDate() != 29) {
        yearFuture++
      }

      let futureDay = new Date(yearFuture, month - 1, day)
      let futurediff = futureDay - now
      sumDay = Math.floor(futurediff / 1000 / 60 / 60 / 24)
    }
    return sumDay
  } else {
    let now = new Date()
    let date = new Date(now.getFullYear(), month - 1, day)
    let diff = date - now

    if (diff > 0) {
      sumDay = Math.floor(diff / 1000 / 60 / 60 / 24)
    } else if (diff == 0) {
      sumDay = 0;
    } else {
      date = new Date(now.getFullYear() + 1, month - 1, day)
      diff = date - now
      sumDay = Math.floor(diff / 1000 / 60 / 60 / 24)
    }
    return sumDay
  }
}