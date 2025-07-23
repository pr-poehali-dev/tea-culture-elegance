import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCartContext } from '@/context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCartContext();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    name: 'Лун Цзин (Колодец дракона)',
    category: 'Зеленый чай',
    price: '2,850 ₽',
    originalPrice: '3,200 ₽',
    rating: 4.8,
    reviewsCount: 127,
    availability: 'В наличии',
    images: [
      '/img/8c70a84e-d8e2-4d71-b517-c7553ad3f326.jpg',
      '/img/383e2182-371b-4cac-a4e5-21bb861fb146.jpg',
      '/img/a236a1fc-370e-4aa0-84ed-b365321a7868.jpg'
    ],
    description: 'Элитный зеленый чай из провинции Чжэцзян с нежным ореховым ароматом и сладковатым послевкусием. Этот чай собирается только весной, когда листья наиболее нежные и ароматные.',
    longDescription: `Лун Цзин — один из самых знаменитых китайских зеленых чаев, который производится в живописных окрестностях озера Сиху в городе Ханчжоу. История этого чая насчитывает более 1200 лет.

    Особенности производства:
    • Ручной сбор только верхних листочков и почек
    • Обжарка в специальных котлах при температуре 80-100°C
    • Каждый лист проходит 10 этапов обработки
    • Сушка происходит в течение 6-8 часов

    Этот чай обладает уникальным плоским видом листьев, что достигается особой техникой прессования во время обжарки. Напиток имеет нежно-зеленый цвет и свежий аромат с нотками орехов и трав.`,
    characteristics: {
      'Происхождение': 'Провинция Чжэцзян, Китай',
      'Тип чая': 'Зеленый чай',
      'Время сбора': 'Весна (март-апрель)',
      'Способ обработки': 'Ручная обжарка',
      'Форма листа': 'Плоская, удлиненная',
      'Цвет настоя': 'Светло-зеленый',
      'Аромат': 'Ореховый, травяной',
      'Вкус': 'Нежный, сладковатый',
      'Кофеин': 'Средний уровень (25-30 мг/чашка)',
      'Упаковка': 'Герметичная металлическая банка',
      'Вес': '100 грамм',
      'Срок хранения': '2 года с даты производства'
    },
    brewingInstructions: {
      temperature: '75-80°C',
      time: '2-3 минуты',
      amount: '3-4 грамма на 200 мл воды',
      steeps: 'До 4-5 заварок'
    }
  };

  const reviews = [
    {
      id: 1,
      author: 'Мария К.',
      rating: 5,
      date: '20 января 2025',
      text: 'Превосходный чай! Очень нежный вкус и приятный аромат. Заказываю уже второй раз.',
      verified: true
    },
    {
      id: 2,
      author: 'Алексей П.',
      rating: 5,
      date: '18 января 2025',
      text: 'Настоящий Лун Цзин! Качество на высоте, упаковка отличная. Рекомендую всем любителям зеленого чая.',
      verified: true
    },
    {
      id: 3,
      author: 'Елена В.',
      rating: 4,
      date: '15 января 2025',
      text: 'Хороший чай, но цена кусается. Вкус действительно особенный, стоит попробовать.',
      verified: false
    }
  ];

  const relatedProducts = [
    {
      id: 2,
      name: 'Би Ло Чунь',
      category: 'Зеленый чай',
      price: '3,200 ₽',
      image: '/img/8c70a84e-d8e2-4d71-b517-c7553ad3f326.jpg',
      rating: 4.7
    },
    {
      id: 3,
      name: 'Мао Фэн',
      category: 'Зеленый чай',
      price: '2,400 ₽',
      image: '/img/8c70a84e-d8e2-4d71-b517-c7553ad3f326.jpg',
      rating: 4.6
    },
    {
      id: 4,
      name: 'Глиняный чайник Исин',
      category: 'Аксессуары',
      price: '8,500 ₽',
      image: '/img/a236a1fc-370e-4aa0-84ed-b365321a7868.jpg',
      rating: 4.9
    }
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 text-sm text-tea-600">
          <a href="/" className="hover:text-sage-400">Главная</a>
          <Icon name="ChevronRight" size={16} />
          <a href="/tea" className="hover:text-sage-400">Чай</a>
          <Icon name="ChevronRight" size={16} />
          <span className="text-tea-800">{product.name}</span>
        </div>
      </div>

      {/* Product Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-white rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-sage-400' : 'border-cream-200 hover:border-sage-200'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} - ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="bg-sage-100 text-sage-700 mb-3">
                {product.category}
              </Badge>
              <h1 className="text-4xl font-cormorant font-bold text-tea-800 mb-4">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon 
                      key={i} 
                      name="Star" 
                      size={18} 
                      className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="ml-2 text-tea-600">
                    {product.rating} ({product.reviewsCount} отзывов)
                  </span>
                </div>
              </div>
              <p className="text-lg text-tea-600 leading-relaxed mb-6">
                {product.description}
              </p>
            </div>

            <Separator />

            {/* Price and Purchase */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-tea-800">{product.price}</span>
                <span className="text-lg text-tea-400 line-through">{product.originalPrice}</span>
                <Badge className="bg-red-100 text-red-700">-11%</Badge>
              </div>
              
              <div className="flex items-center space-x-2 text-sage-600">
                <Icon name="Check" size={18} />
                <span>{product.availability}</span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-cream-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-cream-100 transition-colors"
                  >
                    <Icon name="Minus" size={16} />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-cream-100 transition-colors"
                  >
                    <Icon name="Plus" size={16} />
                  </button>
                </div>
                <Button 
                  className="bg-sage-400 hover:bg-sage-500 text-white px-8 py-3 flex-1"
                  onClick={() => addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.images[0],
                    category: product.category
                  })}
                >
                  <Icon name="ShoppingCart" size={18} />
                  <span className="ml-2">Добавить в корзину</span>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="border-tea-300 text-tea-700">
                  <Icon name="Heart" size={16} />
                  <span className="ml-2">В избранное</span>
                </Button>
                <Button variant="outline" className="border-tea-300 text-tea-700">
                  <Icon name="Share" size={16} />
                  <span className="ml-2">Поделиться</span>
                </Button>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-sage-50 p-6 rounded-lg space-y-3">
              <div className="flex items-center space-x-3">
                <Icon name="Truck" size={20} className="text-sage-600" />
                <span className="text-tea-700">Бесплатная доставка от 5000 ₽</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Shield" size={20} className="text-sage-600" />
                <span className="text-tea-700">Гарантия качества</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="RotateCcw" size={20} className="text-sage-600" />
                <span className="text-tea-700">Возврат в течение 14 дней</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="space-y-8">
            <TabsList className="grid grid-cols-4 w-full max-w-2xl">
              <TabsTrigger value="description">Описание</TabsTrigger>
              <TabsTrigger value="characteristics">Характеристики</TabsTrigger>
              <TabsTrigger value="brewing">Заваривание</TabsTrigger>
              <TabsTrigger value="reviews">Отзывы ({reviews.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-cormorant text-tea-800">Подробное описание</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-tea max-w-none">
                    {product.longDescription.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-tea-600 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="characteristics">
              <Card>
                <CardHeader>
                  <CardTitle className="font-cormorant text-tea-800">Характеристики товара</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(product.characteristics).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-3 border-b border-cream-200 last:border-b-0">
                        <span className="font-medium text-tea-700">{key}:</span>
                        <span className="text-tea-600 text-right max-w-md">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="brewing">
              <Card>
                <CardHeader>
                  <CardTitle className="font-cormorant text-tea-800">Как правильно заваривать</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
                          <Icon name="Thermometer" size={24} className="text-sage-600" />
                        </div>
                        <div>
                          <h4 className="font-cormorant font-bold text-tea-800">Температура воды</h4>
                          <p className="text-tea-600">{product.brewingInstructions.temperature}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
                          <Icon name="Clock" size={24} className="text-sage-600" />
                        </div>
                        <div>
                          <h4 className="font-cormorant font-bold text-tea-800">Время заваривания</h4>
                          <p className="text-tea-600">{product.brewingInstructions.time}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
                          <Icon name="Scale" size={24} className="text-sage-600" />
                        </div>
                        <div>
                          <h4 className="font-cormorant font-bold text-tea-800">Количество чая</h4>
                          <p className="text-tea-600">{product.brewingInstructions.amount}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
                          <Icon name="RotateCw" size={24} className="text-sage-600" />
                        </div>
                        <div>
                          <h4 className="font-cormorant font-bold text-tea-800">Количество заварок</h4>
                          <p className="text-tea-600">{product.brewingInstructions.steeps}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 p-6 bg-cream-100 rounded-lg">
                    <h4 className="font-cormorant font-bold text-tea-800 mb-3">Совет мастера</h4>
                    <p className="text-tea-600">
                      Для лучшего раскрытия вкуса рекомендуем использовать мягкую воду и не заваривать чай слишком долго. 
                      Первую заварку можно слить через 30 секунд, чтобы "промыть" листья.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-cormorant font-bold text-tea-800">Отзывы покупателей</h3>
                    <p className="text-tea-600">Средняя оценка: {product.rating} из 5</p>
                  </div>
                  <Button variant="outline" className="border-sage-400 text-sage-600">
                    Написать отзыв
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="font-medium text-tea-800">{review.author}</span>
                              {review.verified && (
                                <Badge className="bg-green-100 text-green-700 text-xs">
                                  Подтвержденная покупка
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center space-x-1 mb-2">
                              {[...Array(5)].map((_, i) => (
                                <Icon 
                                  key={i} 
                                  name="Star" 
                                  size={14} 
                                  className={`${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-tea-500">{review.date}</span>
                        </div>
                        <p className="text-tea-600">{review.text}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h3 className="text-3xl font-cormorant font-bold text-tea-800 mb-8 text-center">
            Рекомендуемые товары
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-sage-400 text-white">
                    {relatedProduct.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="font-cormorant text-tea-800">{relatedProduct.name}</CardTitle>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon 
                        key={i} 
                        name="Star" 
                        size={14} 
                        className={`${i < Math.floor(relatedProduct.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="ml-2 text-sm text-tea-600">({relatedProduct.rating})</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-tea-800">{relatedProduct.price}</span>
                    <Button size="sm" className="bg-sage-400 hover:bg-sage-500">
                      <Icon name="Eye" size={16} />
                      <span className="ml-1">Посмотреть</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;