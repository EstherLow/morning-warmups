
var delayAction


function followMouse () {
  $(document).mousemove(function () {
    $('#mouse').css({
      left: event.pageX,
      top: event.pageY
  })
})
}

//followMouse()

$(document).mousemove(function(e){
  var currentX = e.pageX
  var currentY = e.pageY
  console.log(currentX + " " + currentY);
  $('#mouse').stop().animate({left:e.pageX, top:e.pageY})
})
