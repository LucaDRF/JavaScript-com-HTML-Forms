function prepararMensagem() {
    var campoTelefone = document.getElementById("campoTelefone").value;
    var campoMensagem = document.getElementById("campoMensagem").value;
    var link = "https://api.whatsapp.com//send?phone=phone=551131400500&text=Oi";
    var linkMensagem = link.replace("551131400500", campoTelefone).replace("Oi", campoMensagem);
    document.getElementById("linkM").setAttribute("href", linkMensagem);
}
