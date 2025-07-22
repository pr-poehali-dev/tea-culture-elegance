import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import CartDrawer from '@/components/CartDrawer';
import { useCartContext } from '@/context/CartContext';

const Header = () => {
  const { getTotalItems } = useCartContext();

  return (
    <header className="bg-white shadow-sm border-b border-cream-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-sage-400 rounded-full flex items-center justify-center">
              <span className="text-white font-cormorant font-bold text-lg">茶</span>
            </div>
            <h1 className="text-2xl font-cormorant font-bold text-tea-800">茶店</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-tea-600 hover:text-sage-400 font-medium transition-colors">О нас</a>
            <a href="/tea" className="text-tea-600 hover:text-sage-400 font-medium transition-colors">Чай</a>
            <a href="/teapots" className="text-tea-600 hover:text-sage-400 font-medium transition-colors">Чайники</a>
            <a href="#" className="text-tea-600 hover:text-sage-400 font-medium transition-colors">Блог</a>
            <a href="#" className="text-tea-600 hover:text-sage-400 font-medium transition-colors">Контакты</a>
            <CartDrawer>
              <Button variant="outline" size="sm" className="relative">
                <Icon name="ShoppingCart" size={16} />
                <span className="ml-2">Корзина</span>
                {getTotalItems() > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-sage-400 text-white text-xs">
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
            </CartDrawer>
          </nav>
          <Button variant="ghost" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;