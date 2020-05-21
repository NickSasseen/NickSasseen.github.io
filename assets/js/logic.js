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
    var password = 'supersecretpassword';
    $('.whos-there').click(function () {
        var whosThere = $(this).html();
    
        $('#navbarMenu').collapse('hide')

        $('#instructions').fadeOut(2000, function () {
            $('#hello').html('Hello, ' + whosThere);
            $('#sawImg').fadeIn(2000);
        });
    });

    $('#btnPassword').click(function (e) {
        e.preventDefault();

        if ($('#txtPassword').val() == password) {
            console.log('you got the password');
        }
        else {
            $('#txtPassword').val('');
            $('#dangerAlert').show('fast');
        }
    });

    $('#btnNext').click(function () {
        $('#sawImg').fadeOut(2000, function () {
            $('#gameInstructions').fadeIn(2000, cycleInstructions);
        })
    });

    function cycleInstructions() {
        var instrNum = 2;

        for (let num = 1; num <= instrNum; num++) {
            $('#i-'+num).fadeIn(1500, function() {
                $(this).delay(10000).fadeOut(1000);
            });
        }

        $('#btnStart').fadeIn(1000);
    }

    $('#btnStart').click(function () {
        var whosThere = $('.whos-there').filter(function () {
            return $(this).hasClass('text-danger');
        }).html();

        $('#gameInstructions').hide();
        if (whosThere == 'Mom') {
            $('.mom.slider').show();
        } else {
            $('.rick.slider').show();
        }
    });

    function loadClues() {
        for (var clue of ricks.clues) {
            console.log(clue.hint);
            $('.rick.slider').append('<div class="">' + clue.hint + '</div>');
        }
    }

    //loadClues();

    $('.slider').slick({
        dots: true,
        arrows: true,
    })
});