
 
 function changeColor(){
    console.log("entro");
  /*  $("html body").animate(
        {
          backgroundColor: 'red',
          color: 'white'
        },
        1000
      );
*/
let color=['#06AED5','#086788','#F0C808','#DD1C1A','#5D584C'];
let randomColor=Math.floor(Math.random()*4+1);
console.log(randomColor);

$('body').css('background-color', color[randomColor]);
$('#title').css('color', color[randomColor]);

}


 
 $(document).ready(function() {
  //  console.log("entro");
  $('#new-quote').on('click', changeColor);
  }); 


  /*function getQuotes() {
    return $.ajax({
      headers: {
        Accept: "application/json"
      },
      url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
      success: function(jsonQuotes) {
        if (typeof jsonQuotes === 'string') {
          quotesData = JSON.parse(jsonQuotes);
          console.log('quotesData');
          console.log(quotesData);
        }
      }
    });
  }*/