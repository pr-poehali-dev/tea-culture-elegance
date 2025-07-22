import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const TestimonialsSection = () => {
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
  );
};

export default TestimonialsSection;