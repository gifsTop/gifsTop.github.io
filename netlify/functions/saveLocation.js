const faunadb = require('faunadb');
const q = faunadb.query;

const client = new faunadb.Client({
    secret: process.env.FAUNA_SECRET // Certifique-se de que esta variável está definida nas variáveis de ambiente do Netlify
});

exports.handler = async function (event, context) {
    const data = JSON.parse(event.body);
    const log = {
        lat: data.lat,
        long: data.long,
        userAgent: data.userAgent
    };

    try {
        // Criar um documento no FaunaDB
        const result = await client.query(
            q.Create(
                q.Collection('Locations'), // Nome da sua coleção
                { data: log }
            )
        );

        return {
            statusCode: 200,
            body: JSON.stringify(result)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};