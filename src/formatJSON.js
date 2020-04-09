const formatJSON = json => {

  // MIN & MAX COUNTS
  let max = 0, min = 999

  let list = []

  for(var key in json){

    // SET VARIABLE NAMES
    let date = key
    let count = json[key]

    // UPDATE MIN & MAX
    if(count > max) max = count
    if(count < min) min = count

    // PUSH TO LIST
    list.push({ date, count })
  }

  return {
    min_value: min,
    max_value: max,
    entries: list
  }

}

export { formatJSON }
