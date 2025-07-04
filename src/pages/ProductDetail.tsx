
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Shield, Truck, RotateCcw } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { StarRating } from '../components/StarRating';
import { ReviewSystem } from '../components/ReviewSystem';
import { products } from '../data/products';

interface ProductDetailProps {
  onAddToCart: (product: any) => void;
}

export const ProductDetail = ({ onAddToCart }: ProductDetailProps) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id === parseInt(id || '0'));
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  // Sample reviews for demonstration
  const sampleReviews = [
    {
      id: 1,
      name: "David Park",
      rating: 5,
      comment: "Perfect for tracking my runs. GPS is very accurate and battery lasts all week!",
      date: "6/12/2024"
    },
    {
      id: 2,
      name: "Lisa Thompson",
      rating: 4,
      comment: "Great quality and fast shipping. Would recommend to others.",
      date: "6/10/2024"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        className="mb-6 gap-2" 
        onClick={() => navigate('/')}
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Products
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold mt-4 mb-2">{product.title}</h1>
            
            <div className="flex items-center gap-4 mb-4">
              <StarRating rating={product.rating.rate} readonly />
              <span className="ml-2 text-sm font-medium">{product.rating.rate}</span>
              <span className="text-sm text-muted-foreground">
                ({product.rating.count} reviews)
              </span>
            </div>

            <p className="text-4xl font-bold text-primary mb-6">
              ${product.price.toFixed(2)}
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {product.description}
            </p>

            <Button
              onClick={() => onAddToCart(product)}
              size="lg"
              className="w-full sm:w-auto gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </Button>
          </div>

          {/* Features */}
          {product.features && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Specifications */}
          {product.specifications && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center border-b pb-2">
                      <span className="text-sm font-medium">{key}:</span>
                      <span className="text-sm text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Additional Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <Truck className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Free Shipping</p>
                <p className="text-xs text-muted-foreground">On orders over $50</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 text-center">
                <RotateCcw className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">30-Day Returns</p>
                <p className="text-xs text-muted-foreground">Easy returns policy</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 text-center">
                <Shield className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Warranty</p>
                <p className="text-xs text-muted-foreground">Manufacturer warranty</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Review System */}
      <ReviewSystem productId={product.id} initialReviews={sampleReviews} />
    </div>
  );
};
