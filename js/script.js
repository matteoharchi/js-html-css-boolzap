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
        var myMessage = $(".my.message").clone();
        var myMessageHour = $(".my.message .hour").clone();
        var myMessageContent = $(".my.message .content").clone();
        // // //copio il contenuto nel nuovo messaggio
        $(myMessageContent).text(messageContent);
        $(myMessage).append(myMessageContent);
        $(myMessageHour).text(hour + ":" + minutes);
        $(myMessage).append(myMessageHour);
        // // //aggiungo nuovo messaggio a chat
        $(".chat").append(myMessage);
        // rendo visibile il messaggio
        $(myMessage).removeClass("template");

        //messaggio del contatto
        setTimeout(function () {
            var yourMessage = $(".your.message").clone();
            var yourMessageHour = $(".your.message .hour").clone();
            var yourMessageContent = $(".your.message .content").clone();
            $(yourMessageContent).text("ok");
            $(yourMessage).append(yourMessageContent);
            $(yourMessageHour).text(hour + ":" + minutes)
            $(yourMessage).append(yourMessageHour);
            $(".chat").append(yourMessage);
            $(yourMessage).removeClass("template");
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
