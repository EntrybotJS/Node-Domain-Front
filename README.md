# Node-Domain-Front
A node program  to control the behavior of multiple domains and subdomains

## Config Example (not implemented yet)
```json
{
	"dashboard": {
		"enable": true,
		"port": 8080,
		"allowAdress": ["::1", "127.0.0.1"]
	},
	"nodes": [
		{
			"name": "web1",
			"role": "http",
			"host": "http://julienferluc.com",
			"port": 80,
			"domain": "127.0.0.1"
		},
		{
			"name": "web2",
			"role": "http",
			"host": "http://google.ca",
			"port": 80,
			"domain": "localhost"
		}
	],
	"out": [
		{
			"domain": "127.0.0.1",
			"port": 3000
		},
		{
			"domain": "localhost",
			"port": 3000
		}
	]
}
```

## Availability
The server will automatically ping every endpoint marked in the config file. Endpoints that do not respond will cause the server to show a 404 page on their behalf. Such a file can be modified in the config file. Also, **uptime monitoring could be implemented later**.
