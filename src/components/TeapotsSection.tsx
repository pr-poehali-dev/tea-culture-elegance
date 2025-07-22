import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useCartContext } from '@/context/CartContext';

const TeapotsSection = () => {
  const { addToCart } = useCartContext();

  const teapotProducts = [
    {
      id: 1,
      name: 'Глиняный чайник Исин',
      category: 'Глина',
      price: '8,500 ₽',
      image: '/img/a236a1fc-370e-4aa0-84ed-b365321a7868.jpg',
      rating: 5,
      description: 'Аутентичный чайник из знаменитой глины Исин, улучшает вкус чая'
    },
    {
      id: 2,
      name: 'Фарфоровый Гайвань',
      category: 'Фарфор',
      price: '3,200 ₽',
      image: '/img/a236a1fc-370e-4aa0-84ed-b365321a7868.jpg',
      rating: 5,
      description: 'Традиционная чайная пиала с крышкой для церемонии гунфу ча'
    },
    {
      id: 3,
      name: 'Стеклянный чайник',
      category: 'Стекло',
      price: '2,800 ₽',
      image: '/img/a236a1fc-370e-4aa0-84ed-b365321a7868.jpg',
      rating: 4,
      description: 'Элегантный стеклянный чайник для наблюдения за раскрытием чайного листа'
    }
  ];

  return (
    <section className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-cormorant font-bold text-tea-800 mb-4">Чайники ручной работы</h3>
          <p className="text-lg text-tea-600 max-w-2xl mx-auto">
            Аутентичные чайники от мастеров, создающие особую атмосферу чаепития
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teapotProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-cream-200">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-tea-500 text-white">
                  {product.category}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="font-cormorant text-tea-800">{product.name}</CardTitle>
                <div className="flex items-center space-x-1">
                  {[...Array(product.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-tea-600 mb-4">
                  {product.description}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-tea-800">{product.price}</span>
                  <Button 
                    size="sm" 
                    className="bg-tea-500 hover:bg-tea-600"
                    onClick={() => addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                      category: product.category
                    })}
                  >
                    <Icon name="Plus" size={16} />
                    <span className="ml-1">В корзину</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="/teapots">
            <Button variant="outline" className="border-tea-500 text-tea-600 hover:bg-tea-50 px-8 py-3">
              Посмотреть все чайники
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeapotsSection;