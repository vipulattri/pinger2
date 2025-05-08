// pinger.js

const https = require('https');
const http = require('http');

const url ='https://pinger-pj83.onrender.com/'; // <-- Replace with your website

function pingWebsite() {
  const lib = url.startsWith('https') ? https : http;
  
  const req = lib.get(url, (res) => {
    console.log(`[${new Date().toLocaleTimeString()}] Pinged ${url} - Status Code: ${res.statusCode}`);
  });

  req.on('error', (err) => {
    console.error(`[${new Date().toLocaleTimeString()}] Error pinging ${url}:`, err.message);
  });

  req.end();
}

// Ping immediately
pingWebsite();

// Then ping every 30 seconds
setInterval(pingWebsite, 30000);
