var gifTimer;
var currentGifId=null;
var step = 100; //height of a thumbnail
$('.thumbnail-wrapper img').hover(
   function(){
      currentGifId = $(this)
      gifTimer = setInterval(playGif,500);
   },
)
