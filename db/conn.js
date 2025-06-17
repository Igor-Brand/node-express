const mongoose = require('mongoose');

async function main(){
    await mongoose.connect('mongodb://localhost:27017/your_database_name');
    console.log('Connected to MongoDB');
}
main().catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;