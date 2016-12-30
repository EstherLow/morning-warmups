/*
Build a random quote generator that randomly displays a quote on the page.
Use a variable of any data type you like to store 5-10 quotes. When user clicks a button, use DOM manipulation to randomly cycle through the quotes to display one on the page.
Feel free to do this in vanilla JavaScript or jQuery, whichever you feel you need to practice.
Bonus

Add a 'click to Tweet' button that takes the current quote and opens it in a separate tab, letting the user tweet the quote (if user is logged in to Twitter).
*/

function Quotes (author, quote, url) {
  this.author = author;
  this.quote = quote;
  this.url = url;
}

var quote1 = new Quotes('C.S. Lewis', 'Education without values, as useful as it is, seems rather to make man a more clever devil.', 'http://publicdomainarchive.com/wp-content/uploads/2014/08/public-domain-images-free-stock-photos-old-books-vintage-brown-red-1-1000x666.jpg')
var quote2 = new Quotes('Mother Teresa', 'I have found the paradox, that if you love until it hurts, there can be no more hurt, only more love.', 'https://static.pexels.com/photos/5390/sunset-hands-love-woman.jpg')
var quote3 = new Quotes('Helen Keller', 'Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved.', 'https://static.pexels.com/photos/23049/pexels-photo.jpg')

var quote4 = new Quotes('T.S. Eliot', 'We shall not cease from exploration, and the end of all our exploring will be to arrive where we started and know the place for the first time.', 'https://www.photocase.com/photos/1309846-exploring-the-wilderness-human-being-nature-vacation-and-travel-photocase-stock-photo-large.jpeg')

var quote5 = new Quotes('George Bernard Shaw', 'Progress is impossible without change, and those who cannot change their minds cannot change anything.', 'http://i.dailymail.co.uk/i/pix/2014/03/10/article-2577364-1B6CF0B100000578-879_634x418.jpg')

var myQuotes = [quote1, quote2, quote3, quote4, quote5]

$('.button').click(function () {
  if ($(".show-quote").has($(".quotes"))){
    $(".quotes").remove();
    $(".quoteAuthor").remove();
  }
  var i = Math.floor(Math.random() * 5)
  $('.show-quote').append("<div class='quotes' style='text-align:center'><h1>" + myQuotes[i].quote + "</h1></div><div class='quoteAuthor' style='text-align:right; font-size:26px'>" + myQuotes[i].author + "</div>");
  $('.wrapper').css({'background-image': 'url(' + myQuotes[i].url + ')', 'background-size' : 'cover'});
})
