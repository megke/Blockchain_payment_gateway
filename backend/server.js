
const express = require("express");
const cors = require("cors");
const paymentRoutes = require("./routes/paymentRoutes");
const config = require("./config/config");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", paymentRoutes);

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
