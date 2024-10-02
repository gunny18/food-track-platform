import mongoose from "mongoose";

export async function connectDatabaseEngine(uri: string) {
  try {
    await mongoose.connect(uri);
  } catch (error) {
    console.error(error);
  }
}
