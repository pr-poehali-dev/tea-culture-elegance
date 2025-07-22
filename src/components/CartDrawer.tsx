import React from 'react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useCart } from '@/hooks/useCart';

interface CartDrawerProps {
  children: React.ReactNode;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ children }) => {
  const {
    cartItems,
    isOpen,
    setIsOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
  } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
    }).format(price);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="w-full sm:w-[400px] flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between font-cormorant">
            Корзина
            {getTotalItems() > 0 && (
              <Badge variant="secondary" className="bg-sage-100 text-sage-700">
                {getTotalItems()} товаров
              </Badge>
            )}
          </SheetTitle>
          <SheetDescription>
            {cartItems.length === 0 
              ? 'Ваша корзина пуста' 
              : 'Проверьте товары перед оформлением заказа'
            }
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <Icon name="ShoppingCart" size={64} className="text-tea-300 mb-4" />
              <p className="text-tea-600 mb-6">Ваша корзина пуста</p>
              <Button 
                onClick={() => setIsOpen(false)} 
                className="bg-sage-400 hover:bg-sage-500"
              >
                Продолжить покупки
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.category}`} className="flex items-center space-x-4 p-4 border border-cream-200 rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-cormorant font-semibold text-tea-800 truncate">
                      {item.name}
                    </h4>
                    <p className="text-sm text-tea-600">{item.category}</p>
                    <p className="font-semibold text-tea-800">{item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateQuantity(item.id, item.category, item.quantity - 1)}
                      className="h-8 w-8 p-0"
                    >
                      <Icon name="Minus" size={16} />
                    </Button>
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateQuantity(item.id, item.category, item.quantity + 1)}
                      className="h-8 w-8 p-0"
                    >
                      <Icon name="Plus" size={16} />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeFromCart(item.id, item.category)}
                      className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                    >
                      <Icon name="Trash2" size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="space-y-4 pt-6 border-t border-cream-200">
            <div className="flex items-center justify-between">
              <span className="font-cormorant font-semibold text-lg text-tea-800">
                Итого:
              </span>
              <span className="font-cormorant font-bold text-xl text-sage-600">
                {formatPrice(getTotalPrice())}
              </span>
            </div>
            
            <div className="space-y-2">
              <Button 
                className="w-full bg-sage-400 hover:bg-sage-500 text-white"
                size="lg"
              >
                <Icon name="CreditCard" size={20} />
                <span className="ml-2">Оформить заказ</span>
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={clearCart}
              >
                <Icon name="Trash2" size={16} />
                <span className="ml-2">Очистить корзину</span>
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;