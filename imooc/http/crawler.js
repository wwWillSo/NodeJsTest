var http = require('http')
var url = 'http://www.imooc.com/learn/637'
var cheerio = require('cheerio')

function filterChapters(html) {

	// console.log(html)

	var $ = cheerio.load(html)
	
	$('.J-media-item .icon-video').each(function(i, item){
		console.log(item.next.data.trim())

		console.log('=====================================')
	} ) 
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