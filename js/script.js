// for all pages ----------------------------------------------------------------------------------------------------------------
// change theme dark/ light
function toggleTheme() {
    var currentTheme = document.body.getAttribute("data-theme");

    if (currentTheme === "light") {
        document.body.setAttribute("data-theme", "dark");
        document.body.style.backgroundColor = "#000000ce"; // dark theme background color
    } else {
        document.body.setAttribute("data-theme", "light");
        document.body.style.backgroundColor = "#efefef"; // light theme background color
    }
}


// log in page --------------------------------------------------------------------------------------------------------------------------------------------
// the user how signup
let fName = document.getElementById("fName");
let lName = document.getElementById("lName");
let eMail = document.getElementById("eMail");
let welcomingTitle = document.getElementById("welcoming-title");
let passwordSignup = document.getElementById("password-signup");

function signUp() {
    if (fName.value == "" || lName.value == "" || eMail.value == "" || passwordSignup.value == "") {
        alert("Please fill in all the fields");
        // so if any one of then is empty it will make error
    } else {
        welcomingTitle.textContent = "Hello " + fName.value + " " + lName.value + " to our Super Market";
        document.getElementById("welcoming").style.visibility = "visible";
        // this below will take the customer to index.html after 3 second 
        setTimeout(function () {
            window.location.href = "index.html";
        }, 3000);
    }
}
// the user how signin
let userName = document.getElementById("userName");
let passwordSignin = document.getElementById("password-signin");

function signIn() {
    if (userName.value == "" || passwordSignin.value == "") {
        alert("Please fill in all the fields");
    } else {
        welcomingTitle.textContent = "Welcome back " + userName.value;
        document.getElementById("welcoming").style.visibility = "visible";
        // this below will take the customer to index.html after 3 second 
        setTimeout(function () {
            window.location.href = "index.html";
        }, 3000);
    }
}
// forget password
let welcomingMSG = document.getElementById("welcoming-msg");

function forgetPassword() {
    document.getElementById("forgetPass").style.display = "block";
    document.getElementById("signup-section").style.display = "none";
}

function forgetPass() {
    welcomingTitle.textContent = "Forget your password?";
    welcomingMSG.textContent = "We will send you reset Password via your Email";
    document.getElementById("welcoming").style.visibility = "visible";
}

// contact us page --------------------------------------------------------------------------------------------------------------------------------------------
let first_name = document.getElementById("first_name");
let last_name = document.getElementById("last_name");

function CustomerMSG() {
    if (first_name.value == "" || last_name.value == "") {
        alert("Please fill in all the fields");
    } else {
        alert("Hello " + first_name.value + " " + last_name.value + " please note that your message has receved and we will work on it." +
            " Thank You");
    }
}



// add to cart button ----------------------------------------------------------------------------------------------------------------------------------
// not ended yet
function addToCart() {
    // let quantity = document.getElementsByClassName("input-text qty text");
    // console.log(quantity.value);
    // var numberInput = document.getElementsByClassName("hot-item-1");
    // console.log(numberInput.value);
    // let quantityItem1 = getElementById
}














//                       ---------------------------------------------------------------------------------------------------------------------------------------------------
// /* floating buttton */
// var button = document.getElementById("main-button");
// var options = document.getElementById("options");

// button.addEventListener("click", function () {
//     if (options.style.display === "block") {
//         options.style.display = "none";
//     } else {
//         options.style.display = "block";
//     }
// });




// chips-salt.html----------------------------------------------------------------------------------------------------------------------------------------------------
//
//    + - button       ---------------------------------------------------------------------------------------------------------------------------------------------------
$(document).ready(() => {
    $("a[href='#']").on("click", function (e) {
        e.preventDefault();
    });

    if ($("body").matchHeight != undefined) {
        $(".eH-Area").each(function () {
            $(this).find(".eH").matchHeight();
        });
    }

    if ($(document).magnificPopup != undefined) {
        $(".popup").magnificPopup({
            type: "image",
            mainClass: "mfp-with-zoom",
            gallery: {
                enabled: true,
                preload: [0, 2],
                navigateByImgClick: true,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: '<span class="mfp-counter">%curr% of %total%</span>',
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: "ease-in-out",
                opener: function (openerElement) {
                    return openerElement.is("img") ?
                        openerElement :
                        openerElement.find("img");
                },
            },
        });
    }

    $(".accept-cookies").on("click", function () {
        $(".cookies-animate").attr("data-animate", "fadeOut");
        $(".cookies-animate").addClass("fadeOut").removeClass("fadeInUp");
    });
});

$(window).ready(() => {
    // delay js
    $(".loader").fadeOut(1000);
    // $(".cookies-popup").addClass("animated").attr("data-animate","fadeInUp")
});

function wcqib_refresh_quantity_increments() {
    jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function (a, b) {
        var c = jQuery(b);
        c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
    })
}
String.prototype.getDecimals || (String.prototype.getDecimals = function () {
    var a = this,
        b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
}), jQuery(document).ready(function () {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("updated_wc_div", function () {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("click", ".plus, .minus", function () {
    var a = jQuery(this).closest(".quantity").find(".qty"),
        b = parseFloat(a.val()),
        c = parseFloat(a.attr("max")),
        d = parseFloat(a.attr("min")),
        e = a.attr("step");
    b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
});