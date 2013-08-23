$(function(){ 

    $(window).hashchange( function(){
        var hash = location.hash;

        //Change the Title
        document.title = 'Hashchange Test | The current language is: ' + (hash.replace( /^#!/, '') || 'blank') + '.';

        //Bind Link's
        $('#nav li a').each(function(){
            var that = $(this);
            that[that.attr('href') === hash ? 'addClass' : 'removeClass']('selected');
            //Add selected class to Home
            if(hash == ""){
                $('#nav li a[href="#!home"]').addClass('selected');
            }
            //Add selected class to Blog, when is a post!
            if(hash == "#!other/jquery" || hash == "#!other/zepto"){
                $('#nav li a[href="#!other"]').addClass('selected');
            }
        });

        function reset(){
            //All Pages
            $('.page').hide();
        }

        if(hash == "#!home"){
            reset();
            $('.home').fadeIn(300);
        }
        else if(hash == "#!html"){
            reset();
            $('.html').fadeIn(300);
        }
        else if(hash == "#!css"){
            reset();
            $('.css').fadeIn(300);
        }
        else if(hash == "#!php"){
            reset();
            $('.php').fadeIn(300);
        }
        else if(hash == "#!javascript"){
            reset();
            $('.javascript').fadeIn(300);
        }
        else if(hash == "#!other"){
            reset();
            $('.other').fadeIn(300);
        }

            else if(hash == "#!other/jquery"){
                reset();
                $('.jquery').fadeIn(300);
            }
            else if(hash == "#!other/zepto"){
                reset();
                $('.zepto').fadeIn(300);
            }

    });

    $(window).hashchange();
      
});