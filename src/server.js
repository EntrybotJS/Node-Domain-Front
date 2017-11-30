/**
 * Script d'amorçage du sevreur
 * 2017-11-25
*/

import express from 'express'
import logger from 'morgan'
import fs from 'fs'
import path from 'path'
import https from 'https'
import http from 'http'
import { getProxyDetails } from './config-parser'
const request = require('request')

const config = JSON.parse(fs.readFileSync(path.resolve("dist/config.json")))

const app = express()
const dashboard = express()

app.use(logger("dev"))

dashboard.get('*', (req, res, next) => {
	config.dashboard.allowAdress.map((ip) => {
		console.log(ip + " " + req.ip)
		if(req.ip === "::ffff:" + ip) {
			next()
		}
	})
})

dashboard.get('/', (req, res, next) => {
	res.send('dashboard')
})

app.get('*', (req, res, next) => {
	res.set({
		"X-NDF-By": "Node-Domain-Front"
	})

	getProxyDetails(config, req)
	.then((data) => {
		req.pipe(request.get(data.host + req.path)
		).pipe(res).on('error', (error) => {
			console.log(error)
		})
	})
	.catch((error) => {
		console.log(error)
	})
})

app.post('*', (req, res, next) => {
	res.set({
		"X-NDF-By": "Node-Domain-Front"
	})

	getProxyDetails(config, req)
	.then((data) => {
		req.pipe(request.post(data.host + req.path)
		).pipe(res).on('error', (error) => {
			res.writeHead(500)
			console.log(error)
		})
	})
	.catch((error) => {
		res.writeHead(500)
		console.log(error)
	})
})

config.out.map((instance) => {
	switch(instance.port) {
		case 443:
			https.createServer({}, app).listen(instance.port, instance.domain)
			break
		default:
			http.createServer(app).listen(instance.port, instance.domain)
			break
	}
	console.log("server started on "  + instance.domain + ":" + instance.port)
})

if(config.dashboard.enable) {
	dashboard.listen(config.dashboard.port, () => {
		console.log("Dasboard started on port " + config.dashboard.port)
	})
}
