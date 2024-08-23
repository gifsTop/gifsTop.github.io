const faunadb = require('faunadb'); 
const q = faunadb.query;

// Inicializa o cliente FaunaDB com a chave secreta
const client = new faunadb.Client({ secret: process.env.FAUNA_SECRET });

exports.handler = async function(event, context) {
    const data = JSON.parse(event.body);
    const log = {
        lat: data.lat,
        long: data.long,
        userAgent: data.userAgent,
        timestamp: new Date().toISOString()
    };
    
    try {
        // Insere o log na coleção "Locations" do FaunaDB
        const result = await client.query(
            q.Create(
                q.Collection('Locations'),
                { data: log }
            )
        );
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Localização salva com sucesso!', result })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Erro ao salvar localização', error })
        };
    }
};
