var risposte = ["Ciao", "Va bene", "Ok", "Grazie"];
//funzione invio messaggio
$("#message-bar").keydown(invio);
function invio(){
    if (event.which == 13 || event.keyCode == 13) {
        // prendo il contenuto di ciò che scrivo
        var messageContent = $("#message-bar").val();
        // // clono  template my message
        var myMessage = $(".my.message").clone();
        // // //copio il contenuto nel nuovo messaggio
        $(myMessage).text(messageContent);
        // // //aggiungo nuovo messaggio a chat
        $(".chat").append(myMessage);

        //messaggio del contatto
        setTimeout(function () {
            var yourMessage = $(".your.message").clone();
            var yourMessageHour = $(".your.message .hour").clone();
            $(yourMessage).append(yourMessageHour);
            $(yourMessage).text("Tutto bene");
            $(".chat").append(yourMessage);
        }, 1000);
    }
}

//funzione numero casuale per risposte
function randomIndex(min, max){
    Math.random(Math.floor()* (max - min + 1) - min);
}
