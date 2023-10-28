const express = require('express');
const http = require('http');
const app = express();
const cors = require('cors');
const { default: helmet } = require('helmet');
const cookieParser = require('cookie-parser');

const server = http.createServer(app);

app.use('/uploads', express.static('uploads'));

app.use(cookieParser());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(helmet());
app.use(cors());

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
