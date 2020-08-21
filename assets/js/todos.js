//Check off Specific todos by clicking

$('ul').on("click","li",function(){
   $(this).toggleClass("completed");
});

//click on X to delete todos
$('ul').on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//add listener to input

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
    //grabbing text from input
      var todoText = $(this).val();
      $(this).val("");
    //create a new li and to ul
    $("ul").append("<li> <span> <i class='fas fa-trash'></i> </span> " + todoText +"</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});