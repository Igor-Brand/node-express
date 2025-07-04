const mongoose = require('mongoose');

async function main() {
  try {
    await mongoose.connect('mongodb://localhost:27017/get-pet', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Conectado ao MongoDB!');
  } catch (error) {
    console.error('❌ Erro ao conectar ao MongoDB:', error);
  }
}

module.exports = main;
