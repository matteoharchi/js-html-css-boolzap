var risposte = ["Ciao", "Va bene", "Ok", "Grazie"];
var hour = ora();
var minutes = minuti();
console.log(messaggioContatto(risposte));

//CHAT

//funzione invio messaggio
$("#message-bar").keydown(invio);
function invio(){
    if (event.which == 13 || event.keyCode == 13) {
        // prendo il contenuto di ciò che scrivo
        var messageContent = $("#message-bar").val();
        // // clono  template my message
        var myMessage = $(".chat.active .template .my.message").clone();
        var myMessageHour = myMessage.children(".hour");
        var myMessageContent = myMessage.children(".content");
        // // //copio il contenuto nel nuovo messaggio
        $(myMessageContent).text(messageContent);
        $(myMessageHour).text(hour + ":" + minutes);
        // // //aggiungo nuovo messaggio a chat
        $(".chat.active").append(myMessage);
        // auto scroll
        $(".chat.active").scrollTop(999999);


        //messaggio del contatto
        setTimeout(function () {
            var yourMessage = $(".chat.active .template .your.message").clone();
            var yourMessageHour = yourMessage.children(".hour");
            var yourMessageContent = yourMessage.children(".content");
            var contactMessage = messaggioContatto(risposte);
            $(yourMessageContent).text(contactMessage);
            $(yourMessageHour).text(hour + ":" + minutes)
            $(".chat.active").append(yourMessage);
            $(".chat.active").scrollTop(999999);
            $(".active #last-message").text(contactMessage);

        }, 1000);
    }

}

//funzione numero casuale per risposte
function randomIndex(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//funzione ora

function ora(){
    var d = new Date();
    var n = d.getHours();
    if (n < 10) {
        n = "0"+n;
    }
    return n;
};
function minuti(){
    var d = new Date();
    var n = d.getMinutes();
    if (n < 10) {
        n = "0"+n;
    }
    return n;
};

//ACTIVE CHAT

$(".conversation").click(function selectContact() {
    var index = $(this).index();
    $(".conversation").removeClass("active");
    $(".conversation").eq(index).addClass("active");
    $(".contact-info").removeClass("active");
    $(".contact-info").eq(index).addClass("active");
    $(".chat").removeClass("active");
    $(".chat").eq(index).addClass("active");

});

//SEARCHBAR
$("#searchcontact").keyup(findContact);
function findContact() {
    var research = $("#searchcontact").val().toLowerCase();
    var result = $(".conversation");
    for (var i = 0; i < result.length; i++){
        var item = result.eq(i).find(".contact-name").text();
        if (item.toLowerCase().includes(research)) {
            result.eq(i).show();
        } else {
            result.eq(i).hide();
        }
    }

}
function numeroRandom(max,min){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function messaggioContatto(mess){
    var mess= ["Ciao", "Va bene", "Ok", "Grazie"];
    return mess[numeroRandom(0,mess.length)]
}
