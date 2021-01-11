// Start product count
$(document).ready(function() {
    $('.moderation').click(function() {
        var img = this.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].children[0]
        $(img).clone().css({
            'position': 'absolute',
            'z-index': '100',
            'width': '80',
            'height': '80',
            'border-radius': '20px',
            'left': $(img).offset()['left'],
            'top': $(img).offset()['top'],
        }).appendTo('.sup_title').animate({
            top: $('.product_count').offset()['top'],
            left: $('.product_count').offset()['left'],
            opasity: 0,
            width: 30,
            height: 30
        }, 1000, function() {
            $(this).remove();
        })
    })
});