const express = require("express");
const PORT = 3003;
const myapp = express();
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));
const url =
		'http://localhost:4502/graphql/execute.json/graphql-demo-endpoint-final/query1';
	const options = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Basic YWRtaW46YWRtaW4='
		}
	};

myapp.get("/api", (req, res) => {
	fetch(url, options)
		.then(resp => resp.json())
		.then(json => res.json(json))
		.catch(err => console.error('error:' + err));
});

myapp.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});