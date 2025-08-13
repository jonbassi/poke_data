const app = require('./app');
const { PORT } = require('./config/env');

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});