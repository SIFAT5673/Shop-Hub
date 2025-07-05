
import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    title: "Wireless Bluetooth Headphones",
    price: 79.99,
    description: "Premium wireless headphones with active noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    rating: { rate: 4.5, count: 2 },
    features: ["Active Noise Cancellation", "30-hour battery", "Bluetooth 5.0", "Quick charge"],
    specifications: {
      "Battery Life": "30 hours",
      "Connectivity": "Bluetooth 5.0",
      "Weight": "250g",
      "Warranty": "2 years"
    }
  },
  {
    id: 2,
    title: "Smart Fitness Watch",
    price: 199.99,
    description: "Advanced fitness tracking with heart rate monitoring, GPS, and smartphone notifications. Water resistant up to 50m.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    rating: { rate: 4.8, count: 2 },
    features: ["Heart Rate Monitor", "GPS Tracking", "Water Resistant", "7-day battery"],
    specifications: {
      "Battery Life": "7 days",
      "Display": "1.4 inch AMOLED",
      "Water Resistance": "50m",
      "Warranty": "1 year"
    }
  },
  {
    id: 3,
    title: "Modern Desk Lamp",
    price: 45.99,
    description: "Adjustable LED desk lamp with touch controls and wireless charging pad. Multiple brightness levels and color temperatures.",
    category: "Home & Office",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop",
    rating: { rate: 4.3, count: 2 },
    features: ["Wireless Charging", "Touch Controls", "Adjustable", "LED Technology"],
    specifications: {
      "Power": "12W LED",
      "Charging": "Qi Wireless",
      "Brightness": "10 levels",
      "Warranty": "1 year"
    }
  },
  {
    id: 4,
    title: "Premium Cotton T-Shirt",
    price: 24.99,
    description: "Comfortable 100% organic cotton t-shirt with modern fit. Available in multiple colors and sizes.",
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    rating: { rate: 4.6, count: 2 },
    features: ["100% Organic Cotton", "Modern Fit", "Pre-shrunk", "Machine Washable"],
    specifications: {
      "Material": "100% Organic Cotton",
      "Fit": "Modern/Slim",
      "Care": "Machine Wash",
      "Origin": "Made in USA"
    }
  },
  {
    id: 5,
    title: "Programmable Coffee Maker",
    price: 89.99,
    description: "12-cup programmable coffee maker with thermal carafe and auto-shutoff. Brew strength control and 24-hour programming.",
    category: "Kitchen",
    image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1721863797-cuisinart-coffee-center-barista-bar-4-in-1-coffeemaker-wit-o.jpg?crop=1xw:1xh;center,top&resize=980:*",
    rating: { rate: 4.4, count: 2 },
    features: ["12-cup capacity", "Programmable", "Thermal carafe", "Auto-shutoff"],
    specifications: {
      "Capacity": "12 cups",
      "Carafe": "Thermal stainless steel",
      "Timer": "24-hour programmable",
      "Warranty": "2 years"
    }
  },
  {
    id: 6,
    title: "Leather Messenger Bag",
    price: 129.99,
    description: "Handcrafted genuine leather messenger bag with laptop compartment. Perfect for professionals and students.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    rating: { rate: 4.7, count: 2 },
    features: ["Genuine Leather", "Laptop Compartment", "Adjustable Strap", "Handcrafted"],
    specifications: {
      "Material": "Full-grain leather",
      "Laptop Size": "Up to 15 inch",
      "Dimensions": "16 x 12 x 4 inches",
      "Warranty": "Lifetime"
    }
  },
  {
    id: 7,
    title: "Wireless Gaming Mouse",
    price: 59.99,
    description: "High-precision wireless gaming mouse with RGB lighting and customizable buttons. Perfect for gamers and professionals.",
    category: "Electronics",
    image: "https://m.media-amazon.com/images/I/71CS9gxERqL.jpg",
    rating: { rate: 4.5, count: 2 },
    features: ["RGB Lighting", "Wireless", "Customizable Buttons", "High DPI"],
    specifications: {
      "DPI": "Up to 12,000",
      "Battery Life": "70 hours", 
      "Connectivity": "2.4GHz Wireless",
      "Warranty": "2 years"
    }
  },
  {
    id: 8,
    title: "Portable Bluetooth Speaker",
    price: 34.99,
    description: "Compact Bluetooth speaker with 360-degree sound and waterproof design. Perfect for outdoor adventures.",
    category: "Electronics",
    image: "https://www.pchouse.com.bd/image/cache/catalog/JBL/JBL-GO-4-Portable-Bluetooth-Waterproof-Speaker-600x500h.jpg.webp",
    rating: { rate: 4.2, count: 2 },
    features: ["360-degree Sound", "Waterproof", "12-hour Battery", "Bluetooth 5.0"],
    specifications: {
      "Battery Life": "12 hours",
      "Water Rating": "IPX7",
      "Range": "30 feet",
      "Warranty": "1 year"
    }
  }
];
