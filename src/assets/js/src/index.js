const fs = require('fs');
const path = require('path');
const config_data = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../data/config.json')));
const os = require('os');
const http = require('http');
const open = require('open');
const fetch = require('node-fetch');
const jarfile = require("jarfile");
const glob = require("glob");
const trash = require("trash");
const request = require("request");
const { pipeline } = require('stream');
const { promisify } = require('util');
const streamPipeline = promisify(pipeline);
const ipcRenderer = require('electron').ipcRenderer;

function log(msg) {
    ipcRenderer.send('log', msg);
}