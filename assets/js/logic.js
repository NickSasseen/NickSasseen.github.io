var ricks = {
    "number": 6,
    "clues": [
        {
            "imgAns": "",
            "hint": "hint 1"
        },
        {
            "imgAns": "",
            "hint": "hint 2"
        },
    ]
};

$(document).ready(function () {
    var password = 'x';
    var instrNum = 1;
    var whosThere = '';

    $('.whos-there').click(function () {
        whosThere = $(this).html();
    
        $('#navbarMenu').collapse('hide')

        $('#instructions').fadeOut(2000, function () {
            $('#hello').html('Hello, ' + whosThere);
            $('#sawImg').fadeIn(2000);
        });
    });

    $('#btnPassword').click(function (e) {
        e.preventDefault();

        if ($('#txtPassword').val() == password) {
            if (whosThere == 'Mom') {
                $('.mom-pics-answers').show();
            } else {
                $('.rick-pic-answers').show();
            }
        }
        else {
            $('#txtPassword').val('');
            $('#dangerAlert').show('fast');
        }
    });

    $('#btnNext').click(function () {
        $('#sawImg').fadeOut(2000, function () {
            $('#gameInstructions').fadeIn(500, function() {
                $('#i-'+instrNum).fadeIn(1500, function() {
                    $('#btnNextInstr').show();
                });
            });
        })
    });

    $('#btnNextInstr').click(function() {
        $('#i-'+instrNum).fadeOut(1000, function() {
            instrNum++;
            $('#i-'+instrNum).fadeIn(1000, function() {
                if (instrNum == 3) {
                    $('#btnNextInstr').hide();
                    $('#btnStart').show();
                }
            });
        });
    });


    $('#btnStart').click(function () {
        var total = 0;

        $('#gameInstructions').hide();
        if (whosThere == 'Mom') {
            $('.mom').show();
            total = $('.mom').find('.card:visible').length;
            $('.mom-pics-answers').hide();
        } else {
            $('.rick').show();
            total = $('.rick').find('.card:visible').length;
            $('.rick-pic-answers').hide();
        }

        $('.js-count').show();

        var tenMinutes = 60 * 10, display = $('#timer');
        startTimer(tenMinutes, display);
    });

    $('.js-found').click(function() {
        var parent = $(this).data('card');
        $(parent).remove();
        var done = false;
        var whosPic = '';

        if (whosThere == 'Mom') {
            done = $('.mom').find('.card:visible').length == 0;
            whosPic = '.pic-mom';
        } else {
            done = $('.rick').find('.card:visible').length == 0;
            whosPic = '.pic-rick';
        }

        if (done) {
            $('#done').show();
            $(whosPic).show();
            $('.js-count').hide();
        } else {
            $('#complete').html(function() {
                var total = $('#total').html();
                var complete = 0;

                if (whosThere == 'Mom') {
                    return total - $('.mom').find('.card:visible').length;
                } else {
                    return total - $('.rick').find('.card:visible').length;
                }
            });
        }
    });

    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.text(minutes + ":" + seconds);
    
            if (--timer < 0) {
                // out of time
            }
        }, 1000);
    }
});