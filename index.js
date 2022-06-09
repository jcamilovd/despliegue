const app = require('./app/app');
const port = 10101;

const server = app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

module.exports = app;