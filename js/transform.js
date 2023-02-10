$('#transform').click(function() {
    var elem = document.getElementById("style"); 
    // console.log(elem)
    // console.log(elem.href) --> http://127.0.0.1:5501/css/main.css が返る
    str = elem.href.split('css/') 
    if (str[1] == "main.css") {
        elem.href = "css/transformed.css";
        console.log(elem)
    } else {
        elem.href = "css/main.css"
    }
    console.log('change!')
})