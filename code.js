var currentQuote;
var currentAuthor;
 
var getQuotes={
  "quotes": [

      { "quote": "Engineering is the closest thing to magic that exists in the world", "author": "Elon Musk" },
      { "quote": "Stay Inspired", "author": "Jeff Bezos" },
      { "quote": "Our industry does not respect tradition - it only respects innovation", "author": "Satya Nadella" },
      { "quote": "For me, it matters that we drive technology as an equalizing force, as an enabler for everyone around the world.", "author": "Pichar" },
      { "quote": "Stone Age. Bronze Age. Iron Age. We define entire epics of humanity by the technology they use.", "author": "Reed Hastings" },
      { "quote": "The biggest risk is not taking any risk... In a world that changing really quickly, the only strategy that is guaranteed to fail is not taking risks.", "author": "Mark Zuckerberg" },
      { "quote": "Work takes on new meaning when you feel you are pointed in the right direction. Otherwise, it's just a job, and life is too short for that.", "author": "Tim Cook" },
      { "quote": "You don’t have to be a genius or a visionary or even a college graduate to be successful. You just need a framework and a dream.", "author": "Michael Dell" },
      { "quote": "Desperation sometimes drives innovation", "author": "Dara Khosrowshahi" },
      { "quote": "It's not about working harder; it's about working the system.", "author": "Evan Spiegel" }


  ]


};



 function changeQuote(){
    console.log("entro");
let color=['#06AED5','#086788','#F0C808','#DD1C1A','#5D584C','#B3DD1A','#870CCE'];
let randomColor=Math.floor(Math.random()*6+1);
let randomQuote=Math.floor(Math.random()*10+1);
console.log(randomColor);
console.log(randomQuote);
currentQuote=getQuotes.quotes[randomQuote].quote;
currentAuthor=getQuotes.quotes[randomQuote].author;
$('body').css('background-color', color[randomColor]);
$('#title').css('color', color[randomColor]);
$("#text").html(getQuotes.quotes[randomQuote].quote);
$("#author").html(getQuotes.quotes[randomQuote].author);
}


function tweetQuote(){

window.open("https://twitter.com/intent/tweet?text=" + $("#text").html());
}
 
 $(document).ready(function() {
  //  console.log("entro");
  $('#new-quote').on('click', changeQuote);
  $('#tweet-quote').on('click',tweetQuote);
  }); 
