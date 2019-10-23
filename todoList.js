//check off specific todos by clicking
$("ul").on("click", "li", function(){
   $(this).toggleClass("completed");
});

//click on x to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
    if(event.which === 13){
        var todoText =  $(this).val();
        $(this).val("");
        //creat a new li
        $("ul").append("<li><span>X</span> " + todoText + "</li>")
    }
});
