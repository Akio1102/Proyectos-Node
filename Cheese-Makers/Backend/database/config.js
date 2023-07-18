const mongoose = require("mongoose");

const dbConection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Conect DB`);
  } catch (error) {
    console.log(error);
    throw new Error(`Db dont conection`);
  }
};

module.exports = {
  dbConection,
};
