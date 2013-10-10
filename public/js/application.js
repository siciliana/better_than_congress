$(function(){
    (function(){
        var imgs=$('#congress img');
        var imgs2=$('#personage img');
        var l=imgs.length-1, M=Math,
        i=M.floor((M.random()*(l+1))), current=i;

        function shuffle(){
            $(imgs[i]).fadeIn(100, function(){
                i=M.floor((M.random()*(l+1)));
                i=(current==i)?((i+1)>l?(i-1):(i+1)):i;
                current=i;
                setTimeout(function(){
                    $('#congress img').fadeOut(100);
                    shuffle();
                }, 100);
            });

            $(imgs2[i]).fadeIn(100, function(){
                i=M.floor((M.random()*(l+1)));
                i=(current==i)?((i+1)>l?(i-1):(i+1)):i;
                current=i;
                setTimeout(function(){
                    $('#personage img').fadeOut(100);
                    shuffle();
                }, 100);
            });

        }
        shuffle();
    })();




});