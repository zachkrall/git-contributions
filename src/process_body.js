const cheerio = require('cheerio')

function process_body(body){

  const $ = cheerio.load(body)

  let max = 0
  let min = 999

  const list = []

  const format = (i,elm) => {
    let count = $(elm).data('count')
    let date = $(elm).data('date')
    if(count > 0){
      list.push({date,count})
      if(count > max){
        max = count
      }
      if( count < min ){
        min = count
      }
    }
  }

  const rects = $('rect').each(format)

  return {
    max_value: max,
    min_value: min,
    entries: list
  }

}

module.exports = process_body
