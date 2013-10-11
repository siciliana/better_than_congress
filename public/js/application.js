// var counter = 

$(document).ready(function(){

    $('#shuffle-button').click(function(event){
        event.preventDefault();

        $.get('/shuffle_personage', function(response){
            $('#personage').html(response);
        });
   
    });

    $(document).on('click', "#personage img", function(event){
        var personageId = $("#personage img").data('photo');
        var congressId = $("#congress img").data('photo');

        var voteData = {  
            "vote[photo_id]" : personageId, 
            "vote[photo_choice]": "personage" };

        $.post('/vote', voteData);
        // $.get('/vote_display', function(response){
        //     $('.image_container').append(response); 
        // }
    });

    //     $(document).on('click', "#congress img", function(event){
    //     var congressId = $("#congress img").data('photo');
    //     var personageId = $("#personage img").data('photo');

    //     var voteData = { 
    //         "vote[photo_id]" : congressId, 
    //         "vote[photo_id]" : personageId, 
    //         "vote[photo_choice]": "congress" };

    //         $.post('/vote', voteData);
    // })
});




