
import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export const Header = ({ cartItemCount, onCartClick }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <span className="text-2xl font-bold text-primary">ShopHub</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/signin')}
            >
              Sign In
            </Button>
            <ThemeToggle />
            <Button
              variant="outline"
              size="sm"
              onClick={onCartClick}
              className="relative gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              Cart
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
