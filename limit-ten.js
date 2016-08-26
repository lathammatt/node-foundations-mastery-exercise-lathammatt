"use strict";

const {Transform} = require('stream')

const transformer = Transform();

let counter = 0;

transformer._transform = (data, enc, cb) => {
	if (counter < 10){
	cb(null, `${data}\n`)
		counter++;
	} else {
		cb()
	}
}

module.exports = {transformer}
