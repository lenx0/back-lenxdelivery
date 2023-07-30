import mongoose from "mongoose";
require('dotenv').config();

const connectString = process.env.MONGO_URI as string;

mongoose.connect(connectString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
  .then(() => console.log('Conexão com o banco de dados estabelecida com sucesso!'))
  .catch((err) => console.error('Erro ao conectar ao banco de dados:', err));

export default mongoose;
