// const mongoose = require("mongoose");

// exports.connectDatabase = () => {
//   mongoose
//     .connect(process.env.MONGO_URI)
//     .then((con) => console.log(`Database Connected: ${con.connection.host}`))
//     .catch((err) => console.log(err));
// };
 

const mongoose = require("mongoose");
const connectDatabase = async () => {
  try {
     //const conn = await mongoose.connect(`mongodb://localhost:27017/SocialMedia`, {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected on ${conn.connection.host}`);
  } catch (error) {
    console.error(`Failed to connect to MongoDB: ${error.message}`);
  }
};

// module.exports = connectDatabase;


// const connectDatabase = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     if (conn) {
//       console.log(`MongoDB Connected on ${conn.connection.host}`);
//     } else {
//       console.log("Failed to connect DB");
//     }
//   } catch (error) {
//     console.log(`Failed with error: ${error.message}`);
//   }
// };

