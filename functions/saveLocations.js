xports.handler = async function (event, context) {
  const data = JSON.parse(event.body);
  const log = `Lat: ${data.lat}, Long: ${data.long}, User Agent: ${data.userAgent}\n`;

  // Simular a gravação dos dados (você precisa configurar um serviço real de armazenamento)
  console.log(log); // Isto será visível no painel de logs do Netlify

  return {
    statusCode: 200,
    body: "Localização salva: " + log
  };
};