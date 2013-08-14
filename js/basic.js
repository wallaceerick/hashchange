$(function(){
  
    //If URL is empty, display this div's content
    var cache = {
        '' : $('.home')
    };

    $(window).bind('hashchange', function(e){

        var url = $.param.fragment();

        $('#content').children(':visible').hide();
    
        //Remove selected class and add to to current page
        $('a.selected').removeClass('selected');
        url && $( 'a[href="#' + url + '"]' ).addClass( 'selected' );
        
        if (cache[url]){
            cache[ url ].show();
        }
        else {
            $( '.loading' ).show();
            cache[url] = $('<div class="page"/>').appendTo('#content').load(url, function(){
                $('.loading').hide();
            });
        }
    });

    $(window).trigger('hashchange');
  
});