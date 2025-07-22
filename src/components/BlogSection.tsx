import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const BlogSection = () => {
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

  return (
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
  );
};

export default BlogSection;