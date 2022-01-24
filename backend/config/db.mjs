import cnn from "mongoose";
const { connect } = cnn;


const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo DB connection working");
  } catch (error) {
    console.error("Database connection erro");
    process.exit(1);
  }
};

export default connectDB;
