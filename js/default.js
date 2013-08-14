$(function(){ 

    $(window).hashchange( function(){
        var hash = location.hash;

        //Change the Title
        document.title = 'Hashchange | The current hash is ' + (hash.replace( /^#!/, '') || 'blank') + '.';

        //Bind Link's
        $('#nav li a').each(function(){
            var that = $(this);
            that[that.attr('href') === hash ? 'addClass' : 'removeClass']('selected');
            //Add selected class to Home
            if(hash == ""){
                $('#nav li a[href="#!home"]').addClass('selected');
            }
            //Add selected class to Blog, when is a post!
            if(hash == "#!blog/post-1" || hash == "#!blog/post-2"){
                $('#nav li a[href="#!blog"]').addClass('selected');
            }
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
            $('.home, .home h1').fadeIn(300);
        } 
        /* About */
        else if(hash == "#!about"){
            reset();
            $('.about, .about h1').fadeIn(300);
        }
        /* Portfolio */
        else if(hash == "#!portfolio"){
            reset();
            $('.portfolio, .portfolio h1').fadeIn(300);
        }
        /* Services */
        else if(hash == "#!services"){
            reset();
            $('.services, .services h1').fadeIn(300);
        }
        /* Blog */
        else if(hash == "#!blog"){
            reset();
            $('.blog, .blog h1').fadeIn(300);
        }
        /* Contact */
        else if(hash == "#!contact"){
            reset();
            $('.contact, .contact h1').fadeIn(300);
        }

            /* Blog/Post 1 */
            else if(hash == "#!blog/post-1"){
                reset();
                $('.post-1, .post-1 h1').fadeIn(300);
            } 
            /* Blog/Post 2 */
            else if(hash == "#!blog/post-2"){
                reset();
                $('.post-2, .post-2 h1').fadeIn(300);
            }

    });

    $(window).hashchange();
      
});