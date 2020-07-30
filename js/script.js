var risposte = ["Ciao", "Va bene", "Ok", "Grazie"];
var hour = ora();
var minutes = minuti();

//funzione invio messaggio
$("#message-bar").keydown(invio);
function invio(){
    if (event.which == 13 || event.keyCode == 13) {
        // prendo il contenuto di ciò che scrivo
        var messageContent = $("#message-bar").val();
        // // clono  template my message
        var myMessage = $(".template .my.message").clone();
        var myMessageHour = myMessage.children(".hour");
        var myMessageContent = myMessage.children(".content");
        // // //copio il contenuto nel nuovo messaggio
        $(myMessageContent).text(messageContent);
        $(myMessageHour).text(hour + ":" + minutes);
        // // //aggiungo nuovo messaggio a chat
        $(".chat").append(myMessage);




        //messaggio del contatto
        setTimeout(function () {
            var yourMessage = $(".template .your.message").clone();
            var yourMessageHour = yourMessage.children(".hour");
            var yourMessageContent = yourMessage.children(".content");
            $(yourMessageContent).text("ok");
            $(yourMessageHour).text(hour + ":" + minutes)
            $(".chat").append(yourMessage);
            $(".chat").scrollTop(999999);

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
    return n;
};
function minuti(){
    var d = new Date();
    var n = d.getMinutes();
    return n;
};
console.log(minuti());
