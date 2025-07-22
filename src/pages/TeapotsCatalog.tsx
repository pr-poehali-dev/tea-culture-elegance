import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import CartDrawer from '@/components/CartDrawer';
import { useCartContext } from '@/context/CartContext';

const TeapotsCatalog = () => {
  const { addToCart, getTotalItems } = useCartContext();
  const [priceRange, setPriceRange] = useState([1000, 15000]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedVolumes, setSelectedVolumes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('name');

  const allTeapots = [
    {
      id: 1,
      name: 'Глиняный чайник Исин',
      category: 'Глина',
      price: '8,500 ₽',
      priceNum: 8500,
      image: '/img/a236a1fc-370e-4aa0-84ed-b365321a7868.jpg',
      rating: 5,
      description: 'Аутентичный чайник из знаменитой глины Исин, улучшает вкус чая',
      volume: '200 мл',
      material: 'Глина Исин',
      craftsman: 'Мастер Ли'
    },
    {
      id: 2,
      name: 'Фарфоровый Гайвань',
      category: 'Фарфор',
      price: '3,200 ₽',
      priceNum: 3200,
      image: '/img/a236a1fc-370e-4aa0-84ed-b365321a7868.jpg',
      rating: 5,
      description: 'Традиционная чайная пиала с крышкой для церемонии гунфу ча',
      volume: '120 мл',
      material: 'Фарфор',
      craftsman: 'Мастер Чен'
    },
    {
      id: 3,
      name: 'Стеклянный чайник',
      category: 'Стекло',
      price: '2,800 ₽',
      priceNum: 2800,
      image: '/img/a236a1fc-370e-4aa0-84ed-b365321a7868.jpg',
      rating: 4,
      description: 'Элегантный стеклянный чайник для наблюдения за раскрытием чайного листа',
      volume: '500 мл',
      material: 'Боросиликатное стекло',
      craftsman: 'Студия стекла'
    },
    {
      id: 4,
      name: 'Чайник из красной глины',
      category: 'Глина',
      price: '12,000 ₽',
      priceNum: 12000,
      image: '/img/a236a1fc-370e-4aa0-84ed-b365321a7868.jpg',
      rating: 5,
      description: 'Премиальный чайник из редкой красной глины Исина',
      volume: '180 мл',
      material: 'Красная глина Исин',
      craftsman: 'Мастер Ван'
    },
    {
      id: 5,
      name: 'Керамический чайник',
      category: 'Керамика',
      price: '4,500 ₽',
      priceNum: 4500,
      image: '/img/a236a1fc-370e-4aa0-84ed-b365321a7868.jpg',
      rating: 4,
      description: 'Классический керамический чайник с традиционной росписью',
      volume: '350 мл',
      material: 'Керамика',
      craftsman: 'Мастерская Дракона'
    },
    {
      id: 6,
      name: 'Чугунный тетцубин',
      category: 'Чугун',
      price: '15,500 ₽',
      priceNum: 15500,
      image: '/img/a236a1fc-370e-4aa0-84ed-b365321a7868.jpg',
      rating: 5,
      description: 'Традиционный японский чугунный чайник с эмалированным покрытием',
      volume: '600 мл',
      material: 'Чугун',
      craftsman: 'Мастер Танака'
    }
  ];

  const materials = ['Глина', 'Фарфор', 'Стекло', 'Керамика', 'Чугун'];
  const volumes = ['120 мл', '180 мл', '200 мл', '350 мл', '500 мл', '600 мл'];

  const filteredTeapots = allTeapots
    .filter(teapot => {
      const inPriceRange = teapot.priceNum >= priceRange[0] && teapot.priceNum <= priceRange[1];
      const inSelectedMaterials = selectedMaterials.length === 0 || selectedMaterials.includes(teapot.category);
      const inSelectedVolumes = selectedVolumes.length === 0 || selectedVolumes.includes(teapot.volume);
      return inPriceRange && inSelectedMaterials && inSelectedVolumes;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.priceNum - b.priceNum;
        case 'price-high':
          return b.priceNum - a.priceNum;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const handleMaterialChange = (material: string, checked: boolean) => {
    if (checked) {
      setSelectedMaterials([...selectedMaterials, material]);
    } else {
      setSelectedMaterials(selectedMaterials.filter(m => m !== material));
    }
  };

  const handleVolumeChange = (volume: string, checked: boolean) => {
    if (checked) {
      setSelectedVolumes([...selectedVolumes, volume]);
    } else {
      setSelectedVolumes(selectedVolumes.filter(v => v !== volume));
    }
  };

  const handleAddToCart = (teapot: typeof allTeapots[0]) => {
    addToCart({
      id: teapot.id,
      name: teapot.name,
      price: teapot.price,
      image: teapot.image,
      category: teapot.category
    });
  };

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
              <a href="/" className="text-tea-600 hover:text-sage-400 font-medium transition-colors">Главная</a>
              <a href="#" className="text-tea-600 hover:text-sage-400 font-medium transition-colors">Чай</a>
              <a href="#" className="text-sage-600 font-medium">Каталог чайников</a>
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
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-cormorant font-bold text-tea-800 mb-4">Каталог чайников</h1>
          <p className="text-lg text-tea-600">Найдите идеальный чайник для вашей чайной церемонии</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-cream-200 sticky top-8">
              <CardHeader>
                <CardTitle className="font-cormorant text-tea-800">Фильтры</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Price Range */}
                <div>
                  <label className="text-sm font-medium text-tea-700 mb-3 block">
                    Цена: {priceRange[0]} ₽ - {priceRange[1]} ₽
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    min={1000}
                    max={20000}
                    step={100}
                    className="w-full"
                  />
                </div>

                {/* Materials */}
                <div>
                  <label className="text-sm font-medium text-tea-700 mb-3 block">Материал</label>
                  <div className="space-y-3">
                    {materials.map(material => (
                      <div key={material} className="flex items-center space-x-2">
                        <Checkbox
                          id={material}
                          checked={selectedMaterials.includes(material)}
                          onCheckedChange={(checked) => handleMaterialChange(material, !!checked)}
                        />
                        <label htmlFor={material} className="text-sm text-tea-600 cursor-pointer">
                          {material}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Volumes */}
                <div>
                  <label className="text-sm font-medium text-tea-700 mb-3 block">Объем</label>
                  <div className="space-y-3">
                    {volumes.map(volume => (
                      <div key={volume} className="flex items-center space-x-2">
                        <Checkbox
                          id={volume}
                          checked={selectedVolumes.includes(volume)}
                          onCheckedChange={(checked) => handleVolumeChange(volume, !!checked)}
                        />
                        <label htmlFor={volume} className="text-sm text-tea-600 cursor-pointer">
                          {volume}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setPriceRange([1000, 15000]);
                    setSelectedMaterials([]);
                    setSelectedVolumes([]);
                  }}
                >
                  Очистить фильтры
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Sort and Results */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-tea-600">
                Найдено {filteredTeapots.length} товаров
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-tea-600">Сортировать:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">По названию</SelectItem>
                    <SelectItem value="price-low">Сначала дешевые</SelectItem>
                    <SelectItem value="price-high">Сначала дорогие</SelectItem>
                    <SelectItem value="rating">По рейтингу</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredTeapots.map((teapot) => (
                <Card key={teapot.id} className="group hover:shadow-xl transition-all duration-300 border-cream-200">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={teapot.image} 
                      alt={teapot.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-tea-500 text-white">
                      {teapot.category}
                    </Badge>
                    <div className="absolute top-3 right-3 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded">
                      {[...Array(teapot.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={12} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="font-cormorant text-tea-800">{teapot.name}</CardTitle>
                    <CardDescription className="space-y-1">
                      <div className="flex items-center text-xs text-tea-500">
                        <Icon name="Package" size={12} className="mr-1" />
                        {teapot.volume}
                      </div>
                      <div className="flex items-center text-xs text-tea-500">
                        <Icon name="User" size={12} className="mr-1" />
                        {teapot.craftsman}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-tea-600 mb-4">
                      {teapot.description}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-tea-800">{teapot.price}</span>
                      <Button 
                        size="sm" 
                        className="bg-tea-500 hover:bg-tea-600"
                        onClick={() => handleAddToCart(teapot)}
                      >
                        <Icon name="Plus" size={16} />
                        <span className="ml-1">В корзину</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredTeapots.length === 0 && (
              <div className="text-center py-12">
                <Icon name="Search" size={64} className="text-tea-300 mx-auto mb-4" />
                <h3 className="text-xl font-cormorant font-bold text-tea-600 mb-2">
                  Товары не найдены
                </h3>
                <p className="text-tea-500 mb-4">
                  Попробуйте изменить параметры фильтрации
                </p>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setPriceRange([1000, 15000]);
                    setSelectedMaterials([]);
                    setSelectedVolumes([]);
                  }}
                >
                  Сбросить фильтры
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeapotsCatalog;