$(document).ready(function(){

var list = ['dog', 'park', 'lion', 'bird', 'rayan gosling', 'bear', 'tiger', 'horse', 'obama', 'rabbit', 'trump', 'whales', 'deer', 'goat'];

function call(){

    var clickValue = $(this).attr('data-name');    
    var key ="NjCzUiwS8NUCJXFw4n0siZjGL49zrjFp";
    var queryURL="https://api.giphy.com/v1/gifs/search?q="+ clickValue +"&api_key=" + key;

    $.ajax({
        url : queryURL,
        method : 'get'
    }).then(function(response){

        var action = response.data; 
        var results = response.data;

        for(j=0 ; j< 10 ; j++){
            
            var k = $('<img>');
            k.addClass('play');
            var n = action[j].images.downsized_still.url;
            var m = action[j].images.downsized.url;
            k.attr('src', n);
            k.attr('data-url', m);
            $('#pictures').prepend(k);
        }
    });

}

function display(){

    $('#name').empty();
    for (var i=0 ; i<list.length; i++){
        var x = $('<button>');
        x.addClass('addName');
        x.attr('data-name', list[i]);
        x.text(list[i]);
        $('#name').append(x);
    }
}

$("#submit").click(function(event){

   event.preventDefault();
   var inputText = $("#text-input").val().trim();
   list.push(inputText);
   display();
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