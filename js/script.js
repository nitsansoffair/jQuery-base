$(function () {
    const flickrApiUrl = 'https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';

    $.getJSON(flickrApiUrl, {
        tags: 'sun, beach',
        tagmode: 'any',
        format: 'json'
    })
        .done(function (data) {
            $.each(data.items, function (index, value) {
                $('<img>').attr('src', value.media.m).appendTo('#flickr');

                if (index === 4) {
                    return false;
                }
            });
        })
        .fail(function () {
            alert('fail');
        });
});
