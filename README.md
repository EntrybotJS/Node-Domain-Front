# Node-Domain-Front
A node program  to control the behavior of multiple domains and subdomains

## Config Example (not implemented yet)
```json
[
	{
		"role": "master",
		"ip": "192.168.2.2",
		"port": 80
	},
 	{
		"name": "web1",
		"role": "http",
		"ip": "192.168.2.3",
		"port": 80,
		"domain": "example1.com"
	},
	{
		"name": "web2",
		"role": "http",
		"ip": "192.168.2.4",
		"port": 80,
		"domain": "example1.com"
	},
	{
		"name": "api",
		"role": "http",
		"ip": "192.168.2.5",
		"port": [80, 443],
		"domain": "example1.com"
	},
	{
		"name": "db",
		"role": "db",
		"ip": "192.168.2.6",
		"port": 27017,
		"domain": "local"
	},
	{
		"role": "balancer",
		"method": "hashIP",
		"servers": ["web1", "web2"],
		"port": [80, 443],
		"ssl": {
			"chain": "./ssl/fullchain.pem",
			"key": "./ssl/privkey.pem"
		}
	}
]
```

## Availability
The server will automatically ping every endpoint marked in the config file. Endpoints that do not respond will cause the server to show a 404 page on their behalf. Such a file can be modified in the config file. Also, **uptime monitoring could be implemented later**.
