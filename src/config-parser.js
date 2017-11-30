import { typeCheck } from 'type-check'

const configParser = {
	getProxyDetails: (config, req) => getProxyDetails(config, req)
}

export const getProxyDetails = (config, req) => {
	return new Promise((resolve, reject) => {
		config.nodes.map((node) => {
			if(req.hostname === node.domain && req.connection.localPort) {
				const data = {
					'host': node.host,
					'port': node.port,
					'method': req.method,
					'path': req.path
				}
				resolve(data)
			}
		})
		reject(new Error("No node matched specified address " + req.hostname + "at port " + req.connection.localPort))
	})
}

export default configParser