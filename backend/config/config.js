
require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 5000,
  ALCHEMY_RPC_URL: process.env.ALCHEMY_RPC_URL,
  PRIVATE_KEY: process.env.PRIVATE_KEY,
  CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS,
};
