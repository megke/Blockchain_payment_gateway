
import { useState } from "react";
import { ethers } from "ethers";
import axios from "axios";

const PaymentForm = () => {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handlePayment = async () => {
    if (!window.ethereum) return alert("MetaMask required!");
    
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    
    try {
      const tx = await signer.sendTransaction({
        to: "DEPLOYED_CONTRACT_ADDRESS",
        value: ethers.parseEther(amount),
      });

      await axios.post("http://localhost:5000/api/pay", {
        sender: await signer.getAddress(),
        amount,
      });

      setMessage(`Payment successful! Tx Hash: ${tx.hash}`);
    } catch (error) {
      console.error(error);
      setMessage("Payment failed.");
    }
  };

  return (
    <div>
      <h2>Crypto Payment</h2>
      <input
        type="text"
        placeholder="Amount in ETH"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handlePayment}>Pay</button>
      <p>{message}</p>
    </div>
  );
};

export default PaymentForm;
