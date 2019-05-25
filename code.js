
 
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
$('body').css('background-color', '#FF4000');
$('#title').css('color', '#FF4000');

}


 
 $(document).ready(function() {
  //  console.log("entro");
  $('#new-quote').on('click', changeColor);
  }); 


