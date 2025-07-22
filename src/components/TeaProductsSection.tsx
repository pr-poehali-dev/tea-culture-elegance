import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useCartContext } from '@/context/CartContext';

const TeaProductsSection = () => {
  const { addToCart } = useCartContext();

  const teaProducts = [
    {
      id: 1,
      name: 'Лун Цзин (Колодец дракона)',
      category: 'Зеленый чай',
      price: '2,850 ₽',
      image: '/img/8c70a84e-d8e2-4d71-b517-c7553ad3f326.jpg',
      rating: 5,
      description: 'Элитный зеленый чай из провинции Чжэцзян с нежным ореховым ароматом'
    },
    {
      id: 2,
      name: 'Да Хун Пао',
      category: 'Улун',
      price: '4,200 ₽',
      image: '/img/8c70a84e-d8e2-4d71-b517-c7553ad3f326.jpg',
      rating: 5,
      description: 'Легендарный чай с гор Уишань, обладающий глубоким минеральным вкусом'
    },
    {
      id: 3,
      name: 'Белый Пион',
      category: 'Белый чай',
      price: '3,100 ₽',
      image: '/img/8c70a84e-d8e2-4d71-b517-c7553ad3f326.jpg',
      rating: 4,
      description: 'Деликатный белый чай с цветочными нотами и медовым послевкусием'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-cormorant font-bold text-tea-800 mb-4">Наш чай</h3>
          <p className="text-lg text-tea-600 max-w-2xl mx-auto">
            Тщательно отобранные сорта чая из лучших регионов Китая
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teaProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-cream-200">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-sage-400 text-white">
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
                    className="bg-sage-400 hover:bg-sage-500"
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
          <a href="/tea">
            <Button variant="outline" className="border-sage-400 text-sage-600 hover:bg-sage-50 px-8 py-3">
              Посмотреть все сорта чая
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeaProductsSection;