import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
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

  const blogPosts = [
    {
      id: 1,
      title: 'История чайной церемонии',
      excerpt: 'Узнайте о древних традициях и философии чаепития',
      date: '15 января 2025',
      category: 'Культура'
    },
    {
      id: 2,
      title: 'Как выбрать правильный чайник',
      excerpt: 'Гид по выбору чайника в зависимости от типа чая',
      date: '10 января 2025',
      category: 'Руководство'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Анна Л.',
      text: 'Потрясающий чай и замечательное обслуживание! Каждая покупка - это путешествие в мир вкусов.',
      rating: 5
    },
    {
      id: 2,
      name: 'Михаил П.',
      text: 'Чайники ручной работы превосходного качества. Мой Исин служит уже несколько лет.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
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
              <a href="#" className="text-tea-600 hover:text-sage-400 font-medium transition-colors">Чай</a>
              <a href="#" className="text-tea-600 hover:text-sage-400 font-medium transition-colors">Чайники</a>
              <a href="#" className="text-tea-600 hover:text-sage-400 font-medium transition-colors">Блог</a>
              <a href="#" className="text-tea-600 hover:text-sage-400 font-medium transition-colors">Контакты</a>
              <Button variant="outline" size="sm">
                <Icon name="ShoppingCart" size={16} />
                <span className="ml-2">Корзина</span>
              </Button>
            </nav>
            <Button variant="ghost" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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
                <Button className="bg-sage-400 hover:bg-sage-500 text-white px-8 py-6 text-lg">
                  <Icon name="Leaf" size={20} />
                  <span className="ml-2">Выбрать чай</span>
                </Button>
                <Button variant="outline" className="border-tea-300 text-tea-700 hover:bg-tea-50 px-8 py-6 text-lg">
                  <Icon name="Coffee" size={20} />
                  <span className="ml-2">Чайники</span>
                </Button>
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

      {/* Tea Products Section */}
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
                    <Button size="sm" className="bg-sage-400 hover:bg-sage-500">
                      <Icon name="Plus" size={16} />
                      <span className="ml-1">В корзину</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" className="border-sage-400 text-sage-600 hover:bg-sage-50 px-8 py-3">
              Посмотреть все сорта чая
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Teapots Section */}
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
                    <Button size="sm" className="bg-tea-500 hover:bg-tea-600">
                      <Icon name="Plus" size={16} />
                      <span className="ml-1">В корзину</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" className="border-tea-500 text-tea-600 hover:bg-tea-50 px-8 py-3">
              Посмотреть все чайники
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Blog Section */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-cormorant font-bold text-tea-800 mb-4">Блог</h3>
            <p className="text-lg text-tea-600 max-w-2xl mx-auto">
              Познавательные статьи о чайной культуре, традициях и секретах мастерства
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-sage-100 text-sage-700">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-tea-500">{post.date}</span>
                  </div>
                  <CardTitle className="font-cormorant text-tea-800 group-hover:text-sage-600 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-tea-600 mb-4">
                    {post.excerpt}
                  </CardDescription>
                  <Button variant="ghost" className="text-sage-600 hover:text-sage-700 p-0">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" className="border-sage-400 text-sage-600 hover:bg-sage-50 px-8 py-3">
              Все статьи блога
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-cormorant font-bold text-tea-800 mb-4">Отзывы клиентов</h3>
            <p className="text-lg text-tea-600">Что говорят о нас наши клиенты</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-cream-200">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-tea-600 italic mb-4">"{testimonial.text}"</p>
                  <p className="font-cormorant font-bold text-tea-800">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Index;