// server.js

const express = require (`express`);
const mongoose = require(`mongoose`);
const app = express();

const routes = require(`./routes`);

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(`client/build`));

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/stark-etf`, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true,
}).then( () => {
	console.log(`[i] MongoDB connected successfully`);
}).catch( (err) => {
	console.log(`[E] MongoDB connection error: ${err}`);
});

app.get("api/config", (req, res) => {
	res.json( { apiLoopbackOK: true, } );
});

app.use(routes);

app.get(`*`, (req, res) => {
	res.sendFile(path.join(__dirname, `client/build/index.html`));
});

app.listen(PORT, () => {
	console.log(`Server running on http://localhost${PORT}`);
});