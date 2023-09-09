import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
require('dotenv').config();

const connectString = process.env.MONGO_URI as string;

mongoose.connect(connectString)
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
    
    autoIncrement.initialize(mongoose.connection);
  })
  .catch((err) => console.error('Erro ao conectar ao banco de dados:', err));

export default mongoose;
