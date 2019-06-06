$(document).ready(function(){
    $.ajax({
        type: "POST",
        url: "/ajax/cart.php",
        dataType:"text",
        data: 'action=sum',
        error: function () {
        },
        success: function (response) {
            $('.header__btn-basket').append("<div class='car-tiket'>"+ response +"</div>");
            $('.header__btn-basket_m').append("<div class='car-tiket'>"+ response +"</div>");

        }
    });
    $('.popup-open').click(function() {
        $('.popup-fade').fadeIn();
        return false;
    });

    $('.popup-close').click(function() {
        $(this).parents('.popup-fade').fadeOut();
        return false;
    });

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.popup-fade').fadeOut();
        }
    });

    $('.popup-fade').click(function(e) {
        if ($(e.target).closest('.popup').length == 0) {
            $(this).fadeOut();
        }
    });


});

function addToCart(id){
    $.ajax({
        async: false,			
        type: "POST",
        url: "/ajax/cart.php",
        dataType:"text",
        data: 'action=add&id=' + id,
        error: function () {	
            alert( "Произошла ошибка при добавлении товара" );
        },
        success: function (response) {
            $('.popup-fade').fadeIn()
            $('.car-tiket').html(response);

        }
    });
}

function showMyCart(){
    $.ajax({
        async: false,
        type: "POST",
        url: "/ajax/cart.php",
        data: "action=show",
        dataType:"text",
        error: function () {	
            alert( "Произошла ошибка при добавлении товара" );
        },
        success: function (response) {
           // тут выводим данные корзины из response
        }
    });
}

function delFromCart(id){
    console.log('del ' + id);
    $.ajax({
        async: false,
        type: "POST",
        url: "/ajax/cart.php",
        data: 'action=del&id=' + id,
        dataType:"text",
        error: function () {	
            alert( "Произошла ошибка при удалении товара" );
        },
        success: function (response) {
            showMyCart();

        }
    });
}