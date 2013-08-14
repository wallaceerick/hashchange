$(function(){ 
    
    $(window).hashchange( function(){
        var hash = location.hash;

        //Change the Title
        document.title = 'Hashchange | The current hash is ' + ( hash.replace( /^#/, '' ) || 'blank' ) + '.';

        //Bind Link's
        $('#nav li a').each(function(){
            var that = $(this);
            that[that.attr( 'href' ) === hash ? 'addClass' : 'removeClass' ]( 'selected' );
        });

        function reset(){
            //All Pages
            $('.page').hide();
            $('.page h2').animate({
                opacity: 0, 
                marginLeft: '0'
            }, 500);
            $('.page p').animate({
                opacity: 0, 
                marginLeft: '0'
            }, 700);
        }

        /* Home */
        if(hash == "#!home"){
            reset();
            $('.home').fadeIn(300);
            $('.home h2').animate({
                opacity: 1, 
                marginLeft: '120px'
            }, 500);
            $('.home p').animate({
                opacity: 1, 
                marginLeft: '120px'
            }, 700);
        } 
        /* About */
        else if(hash == "#!about"){
            reset();
            $('.about').fadeIn(300);
            $('.about h2').animate({
                opacity: 1, 
                marginLeft: '120px'
            }, 500);
            $('.about p').animate({
                opacity: 1, 
                marginLeft: '120px'
            }, 700);
        }
        /* Services */
        else if(hash == "#!services"){
            reset();
            $('.services').fadeIn(300);
            $('.services h2').animate({
                opacity: 1, 
                marginLeft: '120px'
            }, 500);
            $('.services p').animate({
                opacity: 1, 
                marginLeft: '120px'
            }, 700);
        }
        /* Contact */
        else if(hash == "#!contact"){
            reset();
            $('.contact').fadeIn(300);
            $('.contact h2').animate({
                opacity: 1, 
                marginLeft: '120px'
            }, 500);
            $('.contact p').animate({
                opacity: 1, 
                marginLeft: '120px'
            }, 700);
        }
        /* Contact/Test */
        else if(hash == "#!contact/test"){
            reset();
            $('.test').fadeIn(300);
            $('.test h2').animate({
                opacity: 1, 
                marginLeft: '120px'
            }, 500);
            $('.test p').animate({
                opacity: 1, 
                marginLeft: '120px'
            }, 700);
        }

    });

    $(window).hashchange();
      
});