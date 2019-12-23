; $(() => {
    $('#buynow,#addcart,.yixuan').on('click', function () {
        $('.gouwuche-mask').css('display', "block");
    });

    $('.gouwuche-mask,.guanbi').on('click', function (ev) {
        if (ev.target.className == 'gouwuche-mask' || ev.target.className == 'gouwuche-p' || ev.target.className == 'guanbi') {
            $('.gouwuche-mask').css('display', "");
        }
    })

    $('main').scroll(function () {
        if ($('main').scrollTop() > 20) {
            $('header').css('display', 'none');
        } else {
            $('header').css('display', 'block');
        }
    })

    $('.more').on('click', function () {
        if ($('#show').css('display') == 'none') {
            $('#show').css('display', 'block');
        } else {
            $('#show').css('display', 'none');
        }
    })

    $('body').on("click", function (ev) {
        let arr = ev.target.classList;
        let result = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == 'more') {
                result = true;
            }
        }
        if (!result) {
            $('#show').css('display', 'none');
        }
    })
});