const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
require('dotenv').config();
const path = require('path');

const { getOrCreateAdmin } = require('./src/helpers');

const authRouter = require('./src/routes/api/auth');
const userRouter = require('./src/routes/api/user');
const adminRouter = require('./src/routes/api/admin');
const productRouter = require('./src/routes/api/product');
const galleryRouter = require('./src/routes/api/gallery');
const timeWorkRouter = require('./src/routes/api/time');

const app = express();
getOrCreateAdmin();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '/src', '/public')));

app.get('/', (req, res) => {
  res.send(
    '<p>Base URL: https://tobeapi-1-t6466481.deta.app/ </p><p>tobeApi Docs <a href="https://tobeapi-1-t6466481.deta.app/api-docs/">Swagger</a></p>'
  );
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/admin', adminRouter);
app.use('/api/product', productRouter);
app.use('/api/gallery', galleryRouter);
app.use('/api/time', timeWorkRouter);

app.use((_, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, _, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

module.exports = app;
