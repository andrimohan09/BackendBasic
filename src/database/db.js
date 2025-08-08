import mongoose from "mongoose"

const DBConnect = async() => {
    try {
        const response = await mongoose.connect("mongodb+srv://andrimohan09:2025@cluster0.cbvtlym.mongodb.net/tempDB")
        console.log("DB connected successfully!")
    } catch(error) {
        console.log(error);
    }
}

export default DBConnect