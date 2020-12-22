const express = require('express');
const app = express();
port = 4000;
// routes
app.get('/', (req, res) => {
	res.send('hello world');
});
//server connection code
app.listen(port, () => {
	console.log(`Server started on ${port} port`);
});
