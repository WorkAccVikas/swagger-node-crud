const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
module.exports = {
  bootstrap: () => {
    const connectionString =
      "mongodb+srv://workacc:workacc@cluster0.dpejp.mongodb.net/swagger_crud?retryWrites=true&w=majority";

    // const connectionString = "mongodb://0.0.0.0:27017/firstdb";
    
    mongoose.set("useNewUrlParser", true);
    mongoose.set("useUnifiedTopology", true);
    mongoose.set("useCreateIndex", true);
    mongoose.set("useFindAndModify", false);

    mongoose.connect(connectionString, (err, db) => {
      if (err) {
        console.error(err);
        throw new Error("Unable to connect MongoDB");
      }
      console.log(
        `################# Connected to MongoDB ################# ${db}`
      );

      autoIncrement.initialize(db);
    });
  },
  config: null,
};
