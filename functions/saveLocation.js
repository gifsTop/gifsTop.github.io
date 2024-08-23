const fs = require("fs");

exports.handler = async function(event, context) {
    const data = JSON.parse(event.body);
    const log = `Lat: ${data.lat}, Long: ${data.long}, User Agent: ${data.userAgent}\n`;
    
    // Salva os dados em um arquivo (você precisará de um serviço de armazenamento para isso)
    // No Netlify, você pode salvar os dados em uma base de dados como FaunaDB ou outro serviço suportado.

    // Aqui, apenas retornamos a string como prova de conceito.
    return {
        statusCode: 200,
        body: "Localização salva: " + log
    };
};
