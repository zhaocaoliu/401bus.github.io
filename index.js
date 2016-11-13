$(function(){

    $.getJSON("url.json",function(data){
        var gettpl = $("#demo").html();
        laytpl(gettpl).render(data, function(html){$('#view').html(html);})
    })
    .fail(function(){
            $.getJSON("url.json",function(data){
                var gettpl = $('#demo').html();
                laytpl(gettpl).render(data, function(html){ $('#view').html(html);})
            })
            .done(function(){
              alert("加载失败，重新加载");
            })
            .fail(function(){
                alert("加载失败!")
            });
        })
    });
