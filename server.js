const express = require('express');
const http = require('http');
const app = express();
const cors = require('cors');
const { default: helmet } = require('helmet');
const cookieParser = require('cookie-parser');
const configs = require('./configs/index');
const consts = require('./consts/index');
const router = require('./router/index');

const server = http.createServer(app);
const {connectToDb} = require('./db/connectDb')
configs.serverConfig.initialServerConfig();
const PORT = process.env.PORT;

app.use('/uploads', express.static('uploads'));

app.use(cookieParser());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(helmet());
app.use(cors());

app.use(`${process.env.APP_PREFIX}${consts.router.USER}`, router.userRouter.user);

connectToDb()

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
