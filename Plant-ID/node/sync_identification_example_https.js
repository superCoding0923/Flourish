const https = require('https')
var fs = require('fs');

const files = ['photo1.jpg'];

const base64files = files.map(file => fs.readFileSync(file, 'base64'));

const data = JSON.stringify({
    api_key: "ftgMU1minamhEWUAjMdlh2VVWMTYPGSkT5BioLhADeQNkqDBrN",
    images: base64files,
    modifiers: ["crops_fast", "similar_images"],
    plant_language: "en",
    plant_details: ["common_names",
        "url",
        "name_authority",
        "wiki_description",
        "taxonomy",
        "synonyms"]
});

const options = {
    hostname: 'api.plant.id',
    port: 443,
    path: '/v2/identify',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
}

const req = https.request(options, res => {
    res.on('data', d => {
        process.stdout.write(d)
    });
});

req.on('error', error => {
    console.error('Error: ', error)
});

req.write(data)

req.end()