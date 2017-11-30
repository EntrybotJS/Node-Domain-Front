# Node-Domain-Front
A node program  to control the behavior of multiple domains and subdomains

## Config Example (not implemented yet)
```json
{
	"nodes": [
		{
			"name": "web1",
			"role": "http",
			"ip": "192.168.2.3",
			"port": 80,
			"domain": "example.com"
		},
		{
			"name": "web2",
			"role": "http",
			"ip": "192.168.2.4",
			"port": 80,
			"domain": "example.com"
		},
		{
			"name": "api",
			"role": "http",
			"ip": "192.168.2.5",
			"port": 80,
			"domain": "api.example.com"
		}
	],
	"in": {
		"domains": [
			"example.com"
		],
		"subdomains": [
			"api.example.com"
		]
	},
	"out": {
		"ports": [
			80
		]
	}
}
```

## Availability
The server will automatically ping every endpoint marked in the config file. Endpoints that do not respond will cause the server to show a 404 page on their behalf. Such a file can be modified in the config file. Also, **uptime monitoring could be implemented later**.
