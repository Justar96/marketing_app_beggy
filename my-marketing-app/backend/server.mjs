import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import process from 'process';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Dummy data for demonstration purposes
const products = [
  { id: 1, name: 'Product A', cost: 100, markupPercentage: 20, taxRate: 10 },
  { id: 2, name: 'Product B', cost: 200, markupPercentage: 25, taxRate: 15 }
];

const orders = [
  { id: 1, product: 'Product A', quantity: 2, totalPrice: 240 },
  { id: 2, product: 'Product B', quantity: 1, totalPrice: 230 }
];

// Routes
app.get('/api/products', (req, res) => {
  // Fetch products from the database (for now, using dummy data)
  res.json({ message: 'Products fetched successfully', products });
});

app.post('/api/calculate-price', (req, res) => {
  // Logic for price calculation
  const { productId, quantity } = req.body;
  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  const price = calculatePrice(product, quantity);
  res.json({ price });
});

app.get('/api/orders', (req, res) => {
  // Fetch orders from the database (for now, using dummy data)
  res.json({ message: 'Orders fetched successfully', orders });
});

// Function to calculate price
function calculatePrice(product, quantity) {
  const baseCost = product.cost * quantity;
  const markup = baseCost * (product.markupPercentage / 100);
  const price = baseCost + markup;
  const tax = price * (product.taxRate / 100);
  return price + tax;
}

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
