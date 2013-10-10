$(function(){
    (function(){
        var imgs=$('#personage img');
        // var imgs2=$('#personage img');
        var l=imgs.length-1, M=Math,
        i=M.floor((M.random()*(l+1))), current=i;

        function shuffle(){
            $(imgs[i]).fadeIn(1000, function(){
                i=M.floor((M.random()*(l+1)));
                i=(current==i)?((i+1)>l?(i-1):(i+1)):i;
                current=i;
                setTimeout(function(){
                    $('#personage img').fadeOut(1000);
                    shuffle();
                }, 1000);
            });
        }
        shuffle();
    })();
});