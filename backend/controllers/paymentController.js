
const blockchainService = require("../services/blockchainService");

exports.makePayment = async (req, res) => {
  try {
    const { sender, amount } = req.body;
    if (!sender || !amount) return res.status(400).json({ error: "Missing parameters" });

    const txHash = await blockchainService.processPayment(sender, amount);
    res.json({ message: "Payment successful", txHash });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
