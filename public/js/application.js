$(document).ready(function(){
  $('#get_color').on("click", function(event){
    event.preventDefault();
    changeColor();
  });

  function changeColor(){
    $.ajax({
      url: '/color',
      method: 'post',
    }).done(function(response){
      $("li").eq(response.cell).css("background-color", response.color);
    }).fail(function(){
      console.log("fail");
    });
  }
});