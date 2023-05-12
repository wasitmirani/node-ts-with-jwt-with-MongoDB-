
import mongoose from 'mongoose';
import customEnvironmentVariables from '../../config/custom-environment-variables';

const dbUrl = `mongodb://${customEnvironmentVariables.dbName}:${customEnvironmentVariables.dbPass}@localhost:6000/jwtAuth?authSource=admin`;

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log('Database connected...');
  } catch (error: any) {
    console.log(error.message);
    setTimeout(connectDB, 5000);
  }
};

export default connectDB;

