const faunadb = require('faunadb');
const q = faunadb.query;

// Inicializar o cliente do FaunaDB
const client = new faunadb.Client({
    secret: process.env.FAUNA_SECRET // a chave secreta do FaunaDB
});

exports.handler = async function (event, context) {
    const data = JSON.parse(event.body);

    try {
        // Inserir os dados no FaunaDB
        const result = await client.query(
            q.Create(
                q.Collection('Locations'), // Nome da Collection no FaunaDB
                { data: { lat: data.lat, long: data.long, userAgent: data.userAgent } }
            )
        );

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Localização salva com sucesso!" })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Erro ao salvar localização.", error: error.message })
        };
    }
};