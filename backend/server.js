const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const profileRoutes = require('./routes/profile');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use(cors({
    origin: ["https://hotelbooking-5qwv.onrender.com/"],
    credentials: true
}));
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/booking", require("./routes/booking"));
app.use('/api/profile', profileRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
