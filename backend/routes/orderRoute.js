import express from 'express';
import { placeOrder, allOrders, userOrders, updateStatus, confirmQrisPayment } from '../controllers/ordersController.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';

const orderRouter = express.Router();

// Admin Features
orderRouter.post('/list', adminAuth, allOrders);  // Melihat semua pesanan (Admin)
orderRouter.post('/status', adminAuth, updateStatus);  // Mengupdate status pesanan (Admin)

// Payment Features
orderRouter.post('/place', authUser, placeOrder);  // Menempatkan pesanan dengan metode pembayaran
orderRouter.post('/qrispayment', authUser, confirmQrisPayment);  // Mengonfirmasi pembayaran QRIS

// User Feature
orderRouter.post('/userorders', authUser, userOrders);  // Melihat pesanan pengguna

export default orderRouter;
