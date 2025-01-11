import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Placing orders with dynamic payment method (COD or QRIS)
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address, paymentMethod } = req.body;  // Ambil paymentMethod dari request body

    // Set paymentMethod berdasarkan yang dikirim dari frontend (default COD)
    const method = paymentMethod || "COD";  

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: method,  // Gunakan method yang diterima dari frontend
      payment: false,         // Payment status masih false, menunggu konfirmasi pembayaran
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Order Placed", orderId: newOrder._id });  // Mengembalikan orderId
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Fungsi konfirmasi pembayaran QRIS
const confirmQrisPayment = async (req, res) => {
  try {
    const { orderId } = req.body;

    const order = await orderModel.findById(orderId);

    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    if (order.paymentMethod !== "qris") {
      return res.status(400).json({ success: false, message: "Invalid payment method" });
    }

    // Update status pembayaran menjadi true
    order.payment = true;
    await order.save();

    return res.status(200).json({ success: true, message: "QRIS payment confirmed successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

// All Orders data for Admin Panel
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// User Order Data for Frontend
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;

    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Update order status from Admin Panel
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;

    await orderModel.findByIdAndUpdate(orderId, { status });
    res.json({ success: true, message: 'Status Updated' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export {
  placeOrder,           // Menggunakan placeOrder yang dinamis
  allOrders,
  userOrders,
  updateStatus,
  confirmQrisPayment,   // Untuk mengonfirmasi pembayaran QRIS
};
