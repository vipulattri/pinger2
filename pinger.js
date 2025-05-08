const https = require('https');

console.log('Pinger started...');

const url = 'https://vipul-attri-portfolio.netlify.app/'; // Single website to ping

function pingWebsite(url) {
  https.get(url, (res) => {
    console.log(`[${new Date().toLocaleTimeString()}] Pinged ${url} - Status Code: ${res.statusCode}`);
  }).on('error', (err) => {
    console.error(`[${new Date().toLocaleTimeString()}] Error pinging ${url}:`, err.message);
  });
}

function pingAllWebsites() {
  pingWebsite(url); // Call pingWebsite directly for a single URL
}

pingAllWebsites();
setInterval(pingAllWebsites, 30000);
