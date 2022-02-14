function on(obj){
    document.getElementById(obj).src="imagens/Lon.png";
    var state;
    state = 1;
    sendToServer(state);
}
function off(obj){
    document.getElementById(obj).src="imagens/Loff.png";
    var state;
    state = 0;
    sendToServer(state);
}
function sendToServer(state) {
    var KEY = "X9556EB41E168F73";
    //criar um objeto capaz de enviar dados via requisição HTTP GET
    const http = new XMLHttpRequest();
    //prepara um GET passando a váriavel lux como ultimo paramentro do link
    http.open("GET", "https://api.thingspeak.com/update?api_key=" + KEY + " &field1 =0" +state);
    //envia um GET
    http.send();
    //quando a requisição retornar ele chama o console e imprime o valor gerado
    http.onload = console.log(http.responseText+" "+state);
 
 }
