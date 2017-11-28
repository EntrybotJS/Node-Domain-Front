# Node-Domain-Front
A node program  to control the behavior of multiple domains and subdomains

## Config Example (not implemented yet)
```json
{
	"this": {
		"ip": "192.168.2.2",
		"port": 80
	},
 	"node": {
		"ip": "192.168.2.3",
		"port": 80,
		"domain": "example1.com",
		"name": "website1"
	},
	"node": {
		"ip": "192.168.2.4",
		"port": 80,
		"domain": "example1.com",
		"name": "website2"
	},
	"node": {
		"ip": "192.168.2.5",
		"port": [80, 443],
		"domain": "example1.com",
		"name": "api"
	},
	"node": {
		"ip": "192.168.2.6",
		"port": [80, 443],
		"domain": "local",
		"name": "db"
	},
	"balancer": {
		"method": "hashIP",
		"servers": ["website1", "website2"],
		"port": [80, 443],
		"ssl": {
			"chain": "./ssl/fullchain.pem",
			"key": "./ssl/privkey.pem"
		}
	}
}
