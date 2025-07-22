import React from 'react';
import Icon from '@/components/ui/icon';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-4xl font-cormorant font-bold text-tea-800 mb-6">О нас</h3>
            <p className="text-lg text-tea-600 mb-6 leading-relaxed">
              Мы — команда энтузиастов чайной культуры, которая уже более 10 лет занимается 
              импортом премиального китайского чая и изделий ручной работы.
            </p>
            <p className="text-lg text-tea-600 mb-8 leading-relaxed">
              Наша миссия — познакомить вас с настоящими традициями чаепития и предоставить 
              доступ к лучшим сортам чая и аутентичным чайникам от мастеров своего дела.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-cormorant font-bold text-sage-400 mb-2">10+</div>
                <div className="text-tea-600">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-cormorant font-bold text-sage-400 mb-2">50+</div>
                <div className="text-tea-600">Сортов чая</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-sage-400 p-6 rounded-lg text-center text-white">
                <Icon name="Leaf" size={32} className="mx-auto mb-3" />
                <p className="font-cormorant font-bold">Натуральный чай</p>
              </div>
              <div className="bg-tea-500 p-6 rounded-lg text-center text-white">
                <Icon name="Coffee" size={32} className="mx-auto mb-3" />
                <p className="font-cormorant font-bold">Ручная работа</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-cream-500 p-6 rounded-lg text-center text-white">
                <Icon name="Award" size={32} className="mx-auto mb-3" />
                <p className="font-cormorant font-bold">Премиум качество</p>
              </div>
              <div className="bg-tea-300 p-6 rounded-lg text-center text-white">
                <Icon name="Heart" size={32} className="mx-auto mb-3" />
                <p className="font-cormorant font-bold">Забота о клиентах</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;