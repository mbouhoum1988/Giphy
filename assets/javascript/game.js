$(document).ready(function(){

var list = ['dog', 'park', 'lion', 'bird', 'rayan gosling', 'bear', 'tiger', 'horse', 'obama', 'rabbit', 'trump', 'whales', 'deer', 'goat'];

function call(){

    var clickValue = $(this).attr('data-name');    
    var key ="NjCzUiwS8NUCJXFw4n0siZjGL49zrjFp";
    var queryURL="https://api.giphy.com/v1/gifs/search?q="+ clickValue +"&api_key=" + key +"&limit=10";

    $.ajax({
        url : queryURL,
        method : 'get'
    }).then(function(response){
        
        var number = 10;
        var action = response.data; 
        var results = response.data;

        $('#pictures').empty();
        for(j=0 ; j< number ; j++){
            var wrapper = $('<div>');
            wrapper.addClass("image-wrapper");           
            var label = $('<div>');
            label.addClass("rating");
            var img = $('<img>');

            var rating = action[j].rating.toUpperCase();
            label.text("Rating:" + rating );
            
            var still = action[j].images.downsized_still.url;
            var animated = action[j].images.downsized.url;
            
            img.addClass('play');
            img.attr('src', still);
            img.attr('data-url', animated);

            wrapper.append(label, img);
            $('#pictures').prepend(wrapper);
        }
    });

}

function display(){

    $('#name').empty();
    for (var i=0 ; i<list.length; i++){
        var button = $('<button>');
        button.addClass('addName');
        button.attr('data-name', list[i]);
        button.text(list[i]);
        $('#name').append(button);
        
    }
}

$("#submit").click(function(event){

   event.preventDefault();
   var inputText = $("#text-input").val().trim();
   list.push(inputText);
   display();
   $('#text-input').val("");

})

function toggleAnimate(){

    var curSrc = $(this).attr('src');
    $(this).attr('src',$(this).attr('data-url'));
    $(this).attr('data-url',curSrc);
}

$(document).on('click', '.addName', call);

$(document).on('click', '.play', toggleAnimate);

display();
})