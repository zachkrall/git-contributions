const cheerio = require('cheerio')
const formatJSON = require('./formatJSON')

function processBody(body){

  const $ = cheerio.load(body)

  let data = {}

  let format = (i,elm) => {
    let date = $(elm).data('date')
    let count = $(elm).data('count')

    if( count > 0){
      return data[date] = count
    }
  }

  let json = $('rect').each(format)

  return formatJSON(data)

}

module.exports = processBody
