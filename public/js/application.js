// var counter = 

$(document).ready(function(){

    $('#shuffle-button').click(function(event){
        event.preventDefault();

        $.get('/shuffle_personage', function(response){
            $('#personage').html(response).delay(500);
        });

        $.get('/shuffle_congress', function(response){
            $('#congress').html(response);
        });
   
    });

    $(document).on('click', "#personage img", function(event){
        console.log("This shows after the personage click")
        var personageId = $("#personage img").data('photo');
        var personageUrl= $("#personage img").data('url');
        var personageVotes= 0

        console.log(personageId)
        console.log(personageUrl)
        // var congressId = $("#congress img").data('photo');

        var voteData1 = {  
            "vote[photo_id]" : personageId, 
            "vote[photo_choice]": "personage", 
            "vote[vote_tally]" : personageVotes +1   
        };

        console.log(voteData1)

        $.post('/vote', voteData1);
        // $.get('/vote_display', function(response){
        //     $('.image_container').append(response); 
        // }
    });

        $(document).on('click', "#congress img", function(event){
            console.log("This happens after the congress click")
        var congressId = $("#congress img").data('photo');
        var congressUrl= $("#congress img").data('url');
        var congressVotes= 0

        console.log(congressId)
        console.log(congressUrl)
        var voteData2 = { 
            "vote[photo_id]" : congressId, 
            "vote[photo_choice]": "congress",
            "vote[vote_tally]" : congressVotes+1
        };

        console.log(voteData2)

            $.post('/vote', voteData2);
    })
});




