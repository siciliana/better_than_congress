// var counter = 

$(document).ready(function(){

    $('#shuffle-button').click(function(event){
        event.preventDefault();

        $.get('/shuffle', function(response){
            console.log(response)
            $('#personage').html(response);
        });
   
    });

    $(document).on('click', "#personage img", function(event){
        var personageId = $("#personage img").data('photo');
        var voteData = { 
            "vote[congress_photo_id]" : 0, 
            "vote[personage_photo_id]" : personageId, 
            "vote[photo_choice]": "personage" };

        $.post('/vote', voteData);
    })

        $(document).on('click', "#congress img", function(event){
        var personageId = $("#personage img").data('photo');
        var voteData = { 
            "vote[congress_photo_id]" : 0, 
            "vote[personage_photo_id]" : personageId, 
            "vote[photo_choice]": "personage" };

        $.post('/vote', voteData);
    })
});

// var div = $('#personage img')
// jQuery.data( div, "test", {
//   first: 16,
//   last: "pizza!"




// $(function(){
//     (function(){
    //     var imgs=$('#personage img');
    //     // var imgs2=$('#personage img');
    //     var l=imgs.length-1, M=Math,
    //     i=M.floor((M.random()*(l+1))), current=i;

    //     function shuffle(){
    //         $(imgs[i]).fadeIn(1000, function(){
    //             i=M.floor((M.random()*(l+1)));
    //             i=(current==i)?((i+1)>l?(i-1):(i+1)):i;
    //             current=i;
    //             setTimeout(function(){
    //                 $('#personage img').fadeOut(1000);
    //                 shuffle();
    //             }, 1000);
    //         });
    //     }
    //     shuffle();
    // })();
// });
