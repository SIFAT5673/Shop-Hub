
import { useState } from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Header } from '../components/Header';
import { CartSidebar } from '../components/CartSidebar';
import { CheckoutModal, OrderData } from '../components/CheckoutModal';
import { Footer } from '../components/Footer';
import { useCart } from '../hooks/useCart';
import { useToast } from '../hooks/use-toast';
import { Button } from '../components/ui/button';
import { Filter } from 'lucide-react';

const Index = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems
  } = useCart();

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { toast } = useToast();

  const categories = ['All', 'Electronics', 'Clothing', 'Accessories', 'Home & Office', 'Kitchen'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart.`,
    });
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderSubmit = (orderData: OrderData) => {
    console.log('Order submitted:', orderData);
    
    toast({
      title: "Order placed successfully!",
      description: `Thank you ${orderData.name}! Your order for $${getTotalPrice().toFixed(2)} has been confirmed.`,
    });
    
    clearCart();
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItemCount={getTotalItems()}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Discover Amazing Products
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Shop the latest trends and find everything you need in one place. Quality products, great prices, and fast delivery.
          </p>
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`gap-2 ${
                  selectedCategory === category 
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white" 
                    : "border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
                }`}
              >
                <Filter className="w-4 h-4" />
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </main>

      <Footer />

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        totalPrice={getTotalPrice()}
        onCheckout={handleCheckout}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        totalPrice={getTotalPrice()}
        onSubmit={handleOrderSubmit}
      />
    </div>
  );
};

export default Index;
