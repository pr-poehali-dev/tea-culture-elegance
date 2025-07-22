import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-sage-50 to-cream-100 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-cormorant font-bold text-tea-800 mb-6 leading-tight">
              Искусство чая и ручной работы
            </h2>
            <p className="text-lg text-tea-600 mb-8 leading-relaxed">
              Окунитесь в мир традиционной китайской чайной культуры. 
              Премиальные сорта чая и чайники ручной работы от мастеров своего дела.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/tea">
                <Button className="bg-sage-400 hover:bg-sage-500 text-white px-8 py-6 text-lg">
                  <Icon name="Leaf" size={20} />
                  <span className="ml-2">Выбрать чай</span>
                </Button>
              </a>
              <a href="/teapots">
                <Button variant="outline" className="border-tea-300 text-tea-700 hover:bg-tea-50 px-8 py-6 text-lg">
                  <Icon name="Coffee" size={20} />
                  <span className="ml-2">Чайники</span>
                </Button>
              </a>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <img 
              src="/img/383e2182-371b-4cac-a4e5-21bb861fb146.jpg" 
              alt="Чайная церемония"
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-sage-400 rounded-full flex items-center justify-center">
                  <Icon name="Award" size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-cormorant font-bold text-tea-800">500+</p>
                  <p className="text-sm text-tea-600">Довольных клиентов</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;