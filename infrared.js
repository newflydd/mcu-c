const readline = require('readline');
var SerialPort = require("serialport");
var Q = require('q');
var EventEmitter = require('events').EventEmitter;

var port = new SerialPort(
    "COM3",
    {
        baudRate: 9600,
        parser: SerialPort.parsers.byteLength(1),
        autoOpen: false,
    }
);

port.on('data', data => {
    let dataBuffer = new Buffer(data. 'hex');

    console.log(dataBuffer.toString('hex'));
});
