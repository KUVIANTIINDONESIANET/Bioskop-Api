const axios = require('axios')
const cheerio = require('cheerio')

async function ComingSoon() {
  return new Promise((resolve, reject) => {
    axios.get(`https://jadwalnonton.com/comingsoon`)
      .then(({
        data
      }) => {
        const $ = cheerio.load(data)
        let title = []
     let url = []
     let img = []
 	$('div.item > div.clearfix > div.rowl > div.col-xs-6 > a').get().map((rest) => {
         url.push($(rest).attr('href'))
         })
         $('div.item > div.clearfix > div.rowl > div.col-xs-6 > a > img').get().map((rest) => {
        	title.push($(rest).attr('alt'))
         })
         $('div.item > div.clearfix > div.rowl > div.col-xs-6 > a > img').get().map((rest) => {
        	img.push($(rest).attr('src'))
         })
     let result = []
     for (let i = 0; i < url.length; i++) {
          result.push({
               	url: url[i],
               	title: title[i],
               	img: img[i]
          })
     }
            
        const res = {
            status: 200,
            hasil: result
          }
          resolve(res)
      })
      .catch(reject)
  })
}

module.exports = ComingSoon