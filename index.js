const app = require('./app/app');
const port = 10101;


const server = app.listen(process.env.PORT || port, () => {
  console.log(`Express server listening on port ${port}`);
  
});

module.exports = app;W