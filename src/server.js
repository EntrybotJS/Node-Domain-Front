/**
 * Script d'amorçage du sevreur
 * 2017-11-25
*/

import fs from 'fs'
import path from 'path'
import { typeCheck } from 'type-check'

const config = JSON.parse(fs.readFileSync(path.resolve("dist/config.json")))
let ports = []

config.map((node) => {
	console.log(node)
	if(typeCheck('Number', node.port)) {
		if(ports.indexOf(node.port) == -1) {
			ports.push(node.port)
		}
	} else if(typeCheck('[Number]', node.port)) {
		node.port.map((port) => {
			if(ports.indexOf(port) == -1) {
				ports.push(port)
			}
		})
	}
	else {
		throw new Error("Port not found or of wrong type in config in item => " + JSON.stringify(node))
	}
})
