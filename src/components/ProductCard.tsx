
import { Product } from '../types/product';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Star, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
  };

  return (
    <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-200" onClick={handleCardClick}>
      <CardContent className="p-4">
        <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
              {product.category}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{product.rating.rate}</span>
            </div>
          </div>
          
          <h3 className="font-semibold text-lg line-clamp-2">{product.title}</h3>
          
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between pt-2">
            <span className="text-2xl font-bold text-primary">
              ${product.price.toFixed(2)}
            </span>
            
            <Button
              onClick={handleAddToCart}
              size="sm"
              className="gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
