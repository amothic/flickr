// DOMを操作する場合はページの読み込みを待つ
$(function() {

    $("#searchButton").on("click", function(){
        var keyword = $("#keyword").val();
        var url = 'http://api.flickr.com/services/feeds/photos_public.gne?tagmode=any&format=json&jsoncallback=drawImg&tags=' + keyword;
        var script = $('<script>').attr({src: url});
        $('head').append(script);
    });

});

function drawImg(result) {
    $("#resultArea").append($('<img>').attr({src: result.items[0].media.m}));
}
