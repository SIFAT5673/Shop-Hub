
import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalPrice: number;
  onSubmit: (orderData: OrderData) => void;
}

export interface OrderData {
  name: string;
  email: string;
  address: string;
}

export const CheckoutModal = ({ isOpen, onClose, totalPrice, onSubmit }: CheckoutModalProps) => {
  const [formData, setFormData] = useState<OrderData>({
    name: '',
    email: '',
    address: ''
  });
  const [errors, setErrors] = useState<Partial<OrderData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const validateForm = (): boolean => {
    const newErrors: Partial<OrderData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.address.trim()) {
      newErrors.address = 'Shipping address is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    onSubmit(formData);
    
    // Reset form
    setFormData({ name: '', email: '', address: '' });
    setErrors({});
    setIsSubmitting(false);
  };

  const handleInputChange = (field: keyof OrderData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal */}
        <Card 
          className="w-full max-w-md"
          onClick={(e) => e.stopPropagation()}
        >
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Checkout</CardTitle>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={errors.name ? 'border-destructive' : ''}
                />
                {errors.name && (
                  <p className="text-sm text-destructive mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={errors.email ? 'border-destructive' : ''}
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <Label htmlFor="address">Shipping Address *</Label>
                <textarea
                  id="address"
                  placeholder="Enter your complete shipping address"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.address ? 'border-destructive' : ''}`}
                  rows={3}
                />
                {errors.address && (
                  <p className="text-sm text-destructive mt-1">{errors.address}</p>
                )}
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium">Total Amount:</span>
                  <span className="text-lg font-bold text-primary">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>

                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    className="flex-1"
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Processing...' : 'Place Order'}
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
