import moongose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = moongose.connect(
      process.env.DB_URL.replace("<password>", process.env.DB_PWD)
    );
    console.log(
      "Database is connected !! connection host : " +
        (await connectionInstance).connection.host
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
