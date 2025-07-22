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

const TeaCatalog = () => {
  const { addToCart, getTotalItems } = useCartContext();
  const [priceRange, setPriceRange] = useState([1000, 10000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('name');

  const allTeas = [
    {
      id: 1,
      name: 'Лун Цзин (Колодец дракона)',
      category: 'Зеленый чай',
      price: '2,850 ₽',
      priceNum: 2850,
      image: '/img/8c70a84e-d8e2-4d71-b517-c7553ad3f326.jpg',
      rating: 5,
      description: 'Элитный зеленый чай из провинции Чжэцзян с нежным ореховым ароматом',
      origin: 'Ханчжоу, Китай',
      taste: 'Ореховый, свежий'
    },
    {
      id: 2,
      name: 'Да Хун Пао',
      category: 'Улун',
      price: '4,200 ₽',
      priceNum: 4200,
      image: '/img/8c70a84e-d8e2-4d71-b517-c7553ad3f326.jpg',
      rating: 5,
      description: 'Легендарный чай с гор Уишань, обладающий глубоким минеральным вкусом',
      origin: 'Уишань, Фуцзянь',
      taste: 'Минеральный, сложный'
    },
    {
      id: 3,
      name: 'Белый Пион',
      category: 'Белый чай',
      price: '3,100 ₽',
      priceNum: 3100,
      image: '/img/8c70a84e-d8e2-4d71-b517-c7553ad3f326.jpg',
      rating: 4,
      description: 'Деликатный белый чай с цветочными нотами и медовым послевкусием',
      origin: 'Фудин, Фуцзянь',
      taste: 'Цветочный, медовый'
    },
    {
      id: 4,
      name: 'Тегуаньинь',
      category: 'Улун',
      price: '3,800 ₽',
      priceNum: 3800,
      image: '/img/8c70a84e-d8e2-4d71-b517-c7553ad3f326.jpg',
      rating: 5,
      description: 'Классический улун с богатым ароматом и долгим послевкусием',
      origin: 'Анси, Фуцзянь',
      taste: 'Цветочный, фруктовый'
    },
    {
      id: 5,
      name: 'Кимун',
      category: 'Черный чай',
      price: '2,400 ₽',
      priceNum: 2400,
      image: '/img/8c70a84e-d8e2-4d71-b517-c7553ad3f326.jpg',
      rating: 4,
      description: 'Знаменитый китайский черный чай с винными нотами',
      origin: 'Цимэнь, Аньхой',
      taste: 'Винный, мальтовый'
    },
    {
      id: 6,
      name: 'Шен Пуэр',
      category: 'Пуэр',
      price: '5,500 ₽',
      priceNum: 5500,
      image: '/img/8c70a84e-d8e2-4d71-b517-c7553ad3f326.jpg',
      rating: 5,
      description: 'Сырой пуэр многолетней выдержки с глубоким земляным вкусом',
      origin: 'Юньнань',
      taste: 'Земляный, древесный'
    }
  ];

  const categories = ['Зеленый чай', 'Черный чай', 'Белый чай', 'Улун', 'Пуэр'];

  const filteredTeas = allTeas
    .filter(tea => {
      const inPriceRange = tea.priceNum >= priceRange[0] && tea.priceNum <= priceRange[1];
      const inSelectedCategories = selectedCategories.length === 0 || selectedCategories.includes(tea.category);
      return inPriceRange && inSelectedCategories;
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

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    }
  };

  const handleAddToCart = (tea: typeof allTeas[0]) => {
    addToCart({
      id: tea.id,
      name: tea.name,
      price: tea.price,
      image: tea.image,
      category: tea.category
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
              <a href="#" className="text-sage-600 font-medium">Каталог чая</a>
              <a href="#" className="text-tea-600 hover:text-sage-400 font-medium transition-colors">Чайники</a>
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
          <h1 className="text-4xl font-cormorant font-bold text-tea-800 mb-4">Каталог чая</h1>
          <p className="text-lg text-tea-600">Выберите идеальный чай для вашего настроения</p>
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
                    max={10000}
                    step={100}
                    className="w-full"
                  />
                </div>

                {/* Categories */}
                <div>
                  <label className="text-sm font-medium text-tea-700 mb-3 block">Категории</label>
                  <div className="space-y-3">
                    {categories.map(category => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={category}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={(checked) => handleCategoryChange(category, !!checked)}
                        />
                        <label htmlFor={category} className="text-sm text-tea-600 cursor-pointer">
                          {category}
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
                    setPriceRange([1000, 10000]);
                    setSelectedCategories([]);
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
                Найдено {filteredTeas.length} товаров
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
              {filteredTeas.map((tea) => (
                <Card key={tea.id} className="group hover:shadow-xl transition-all duration-300 border-cream-200">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={tea.image} 
                      alt={tea.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-sage-400 text-white">
                      {tea.category}
                    </Badge>
                    <div className="absolute top-3 right-3 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded">
                      {[...Array(tea.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={12} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="font-cormorant text-tea-800">{tea.name}</CardTitle>
                    <CardDescription className="space-y-1">
                      <div className="flex items-center text-xs text-tea-500">
                        <Icon name="MapPin" size={12} className="mr-1" />
                        {tea.origin}
                      </div>
                      <div className="flex items-center text-xs text-tea-500">
                        <Icon name="Coffee" size={12} className="mr-1" />
                        {tea.taste}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-tea-600 mb-4">
                      {tea.description}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-tea-800">{tea.price}</span>
                      <Button 
                        size="sm" 
                        className="bg-sage-400 hover:bg-sage-500"
                        onClick={() => handleAddToCart(tea)}
                      >
                        <Icon name="Plus" size={16} />
                        <span className="ml-1">В корзину</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredTeas.length === 0 && (
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
                    setPriceRange([1000, 10000]);
                    setSelectedCategories([]);
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

export default TeaCatalog;