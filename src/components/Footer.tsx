
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-background border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ShopHub</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Your one-stop shop for amazing products
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <MapPin className="w-4 h-4" />
              <span>123 Shopping St, City, State 12345</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Phone className="w-4 h-4" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>support@shophub.com</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>24/7 Support Available</li>
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Order Tracking</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Free Shipping</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>On orders over $50</li>
              <li>Fast & Reliable</li>
              <li>Worldwide Delivery</li>
              <li>Express Options</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Easy Returns</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>30-day return policy</li>
              <li>Free Returns</li>
              <li>No Questions Asked</li>
              <li>Money Back Guarantee</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 ShopHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
