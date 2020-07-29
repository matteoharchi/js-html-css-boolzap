
//funzione invio messaggio
$("#message-bar").keydown(invio);
function invio(){
    if (event.which == 13 || event.keyCode == 13) {
        // prendo il contenuto di ciò che scrivo
        var messageContent = $("#message-bar").val();
        // // clono my message
        var myMessage = $(".my.message").clone();
        // // //copio il contenuto nel nuovo messaggio
        $(myMessage).text(messageContent);
        // // //aggiungo myMessage a chat
        $(".chat").append(myMessage);
    }
}
