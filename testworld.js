var gifTimer;
var currentGifId=null;
var step = 100; //height of a thumbnail
$('.thumbnail-wrapper img').hover(
   function(){
      currentGifId = $(this)
      gifTimer = setInterval(playGif,500);
   },
)

var playGif = function(){
   var top = parseInt(currentGifId.css('top'))-step;
   var max = currentGifId.height();
   console.log(top,max)
   if(max+top>=0){
     console.log('reset')
     top=0;
   }
   currentGifId.css('top',top);
}
