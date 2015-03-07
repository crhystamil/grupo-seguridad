'use strict'

var cheerio = require('cheerio');
var request = require('request');

var url='https://www.youtube.com/playlist?list=LLMAren6qcRFUIMAZB5fxp4Q';
request(url, function (error, response, html) {
      if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        $('td.pl-video-title').children().each(function(i, ele){
            console.log($(this).attr('href'))
        });
      }
});

