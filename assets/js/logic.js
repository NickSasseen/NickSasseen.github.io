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
            console.log('you got the password');
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

        $('#gameInstructions').hide();
        if (whosThere == 'Mom') {
            $('.mom').show();
        } else {
            $('.rick').show();
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