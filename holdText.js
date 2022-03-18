function mostrarTexto1() {
    if (document.getElementById("texto1").style.display == "block") {
        let texto1 = document.getElementById("texto1").style.display = "none"
        let button = document.getElementById("button1").classList.remove("rotate")

    } else {
        let texto1 = document.getElementById("texto1").style.display = "block"
        let texto2 = document.getElementById("texto2").style.display = "none"
        let texto3 = document.getElementById("texto3").style.display = "none"
        let texto4 = document.getElementById("texto4").style.display = "none"
        let texto5 = document.getElementById("texto5").style.display = "none"
        let div = document.getElementById("texto1").innerHTML = "This is the text about text 1"

        let button1 = document.getElementById("button1").classList.add("rotate")
        let button2 = document.getElementById("button2").classList.remove("rotate")
        let button3 = document.getElementById("button3").classList.remove("rotate")
        let button4 = document.getElementById("button4").classList.remove("rotate")
        let button5 = document.getElementById("button5").classList.remove("rotate")

    }

}


function mostrarTexto2() {
    if (document.getElementById("texto2").style.display == "block") {
        let texto2 = document.getElementById("texto2").style.display = "none"
        let button2 = document.getElementById("button2").classList.remove("rotate")
    } else {
        let texto1 = document.getElementById("texto1").style.display = "none"
        let texto2 = document.getElementById("texto2").style.display = "block"
        let texto3 = document.getElementById("texto3").style.display = "none"
        let texto4 = document.getElementById("texto4").style.display = "none"
        let texto5 = document.getElementById("texto5").style.display = "none"
        let div = document.getElementById("texto2").innerHTML = "This is the text about text 2 This is the text about text 5 This is the text about text 5 This is the text about text 5"

        let button1 = document.getElementById("button1").classList.remove("rotate")
        let button2 = document.getElementById("button2").classList.add("rotate")
        let button3 = document.getElementById("button3").classList.remove("rotate")
        let button4 = document.getElementById("button4").classList.remove("rotate")
        let button5 = document.getElementById("button5").classList.remove("rotate")
    }
}

function mostrarTexto3() {
    if (document.getElementById("texto3").style.display == "block") {
        let texto3 = document.getElementById("texto3").style.display = "none"
        let button3 = document.getElementById("button3").classList.remove("rotate")
    } else {
        let texto1 = document.getElementById("texto1").style.display = "none"
        let texto2 = document.getElementById("texto2").style.display = "none"
        let texto3 = document.getElementById("texto3").style.display = "block"
        let texto4 = document.getElementById("texto4").style.display = "none"
        let texto5 = document.getElementById("texto5").style.display = "none"
        let div = document.getElementById("texto3").innerHTML = "This is the text about text 3"

        let button1 = document.getElementById("button1").classList.remove("rotate")
        let button2 = document.getElementById("button2").classList.remove("rotate")
        let button3 = document.getElementById("button3").classList.add("rotate")
        let button4 = document.getElementById("button4").classList.remove("rotate")
        let button5 = document.getElementById("button5").classList.remove("rotate")
    }
}

function mostrarTexto4() {
    if (document.getElementById("texto4").style.display == "block") {
        let texto4 = document.getElementById("texto4").style.display = "none"
        let button4 = document.getElementById("button4").classList.remove("rotate")
    } else {
        let texto1 = document.getElementById("texto1").style.display = "none"
        let texto2 = document.getElementById("texto2").style.display = "none"
        let texto3 = document.getElementById("texto3").style.display = "none"
        let texto4 = document.getElementById("texto4").style.display = "block"
        let texto5 = document.getElementById("texto5").style.display = "none"
        let div = document.getElementById("texto4").innerHTML = "This is the text about text 4"

        let button1 = document.getElementById("button1").classList.remove("rotate")
        let button2 = document.getElementById("button2").classList.remove("rotate")
        let button3 = document.getElementById("button3").classList.remove("rotate")
        let button4 = document.getElementById("button4").classList.add("rotate")
        let button5 = document.getElementById("button5").classList.remove("rotate")
    }
}

function mostrarTexto5() {
    if (document.getElementById("texto5").style.display == "block") {
        let texto5 = document.getElementById("texto5").style.display = "none"
        let button5 = document.getElementById("button5").classList.remove("rotate")
    } else {
        let texto1 = document.getElementById("texto1").style.display = "none"
        let texto2 = document.getElementById("texto2").style.display = "none"
        let texto3 = document.getElementById("texto3").style.display = "none"
        let texto4 = document.getElementById("texto4").style.display = "none"
        let texto5 = document.getElementById("texto5").style.display = "block"
        let div = document.getElementById("texto5").innerHTML = "This is the text about text 5"

        let button1 = document.getElementById("button1").classList.remove("rotate")
        let button2 = document.getElementById("button2").classList.remove("rotate")
        let button3 = document.getElementById("button3").classList.remove("rotate")
        let button4 = document.getElementById("button4").classList.remove("rotate")
        let button5 = document.getElementById("button5").classList.add("rotate")


    }
}