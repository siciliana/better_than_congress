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
        console.log(personageId)
        // var congressId = $("#congress img").data('photo');

        var voteData = {  
            "vote[photo_id]" : personageId, 
            "vote[photo_choice]": "personage" };

        $.post('/vote', voteData);
        // $.get('/vote_display', function(response){
        //     $('.image_container').append(response); 
        // }
    });

        $(document).on('click', "#congress img", function(event){
            console.log("This happens after the congress cl ick")
        var congressId = $("#congress img").data('photo');
        console.log(congressId)

        var voteData = { 
            "vote[photo_id]" : congressId, 
    //         "vote[photo_id]" : personageId, 
            "vote[photo_choice]": "congress" };

            $.post('/vote', voteData);
    })
});




