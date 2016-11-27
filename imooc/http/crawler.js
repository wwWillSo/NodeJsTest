var http = require('http')
var url = 'http://nodejs.cn/'
var cheerio = require('cheerio')

function filterChapters(html) {
	var $ = cheerio.load(html)
	
}

http.get(url, function (res) {
	var html = ''

	res.on('data', function (data) {
		html += data

	})

	res.on('end', function() {
		filterChapters(html)
	})
}).on('error', function () {
	console.log('抓取出错')
})