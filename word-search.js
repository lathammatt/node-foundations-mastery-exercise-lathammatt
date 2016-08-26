#!/usr/bin/env node


const fs = require('fs');
const [, , ...args] = process.argv;
const limit = require('./limit-ten');
const es = require('event-stream')
const userData = args[0].toString().toLowerCase()


if (args.length === 0){
		console.log("Usage: word-search.js [startofsearch]");
	} else {
		fs.createReadStream('/usr/share/dict/words', 'utf8')
			.pipe(es.split())
			.pipe(es.map((line, cb) => {
				if (line.toLowerCase().startsWith(userData)){
					cb (null, line)
				} else {
					cb()
				}
			}))
			.pipe(limit.transformer)
			.pipe(process.stdout)
	}



