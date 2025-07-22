import React from 'react';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-tea-800 text-cream-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-sage-400 rounded-full flex items-center justify-center">
                <span className="text-white font-cormorant font-bold text-lg">茶</span>
              </div>
              <h4 className="text-2xl font-cormorant font-bold">茶店</h4>
            </div>
            <p className="text-cream-200 leading-relaxed">
              Искусство чая и ручной работы. Традиции, качество, мастерство.
            </p>
          </div>
          <div>
            <h5 className="font-cormorant font-bold text-lg mb-4">Каталог</h5>
            <ul className="space-y-2 text-cream-200">
              <li><a href="#" className="hover:text-white transition-colors">Зеленый чай</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Черный чай</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Белый чай</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Улун</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Чайники</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-cormorant font-bold text-lg mb-4">Информация</h5>
            <ul className="space-y-2 text-cream-200">
              <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Оплата</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Возврат</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-cormorant font-bold text-lg mb-4">Контакты</h5>
            <div className="space-y-3 text-cream-200">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>hello@tea-shop.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Чайная, 15</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-tea-700 mt-12 pt-8 text-center text-cream-200">
          <p>&copy; 2025 茶店. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;