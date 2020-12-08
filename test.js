// let http = require("http")

// let ourApp = http.createServer(function(req, res) {
// 	if (req.url == "/") {
// 		res.end("Hello res is responding!!")
// 	}
// 	else if (req.url == "/about") {
// 		res.end("Hey this is our about page!!")
// 	}
// 	else {
// 		res.end("Page not found hehe")
// 	}
// })

// ourApp.listen(3000)

let express = require("express")

let ourApp = express()

ourApp.use(express.urlencoded({extended: false}))

ourApp.get('/', function(req, res) {
	res.send(`
		<form action='/answer' method="POST">
			<p>What color is the sky?</p>
			<input name="skyColor" autocomplete="off">
			<button>Submit Answer</button>
		</form>
		`)
})

ourApp.post('/answer', function(req, res) {
	if (req.body.skyColor.toLowerCase() == "blue") {
		res.send(`
			<h1>You are correct!!</h1>
			<a href="/">Bach to Homepage</a>
			`)
	} 
	else {
		res.send(`
			<p>You are wrong :(</p>
			<a href="/">Bach to Homepage</a>
			`)
	}
})

ourApp.get('/answer', function(req, res) {
	res.send("Where are u going!!")
})

ourApp.listen(3000)