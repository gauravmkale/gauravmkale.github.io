import { useState } from 'react'

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'tableware', name: 'Tableware' },
    { id: 'decorative', name: 'Decorative' },
    { id: 'jewelry', name: 'Jewelry' },
    { id: 'gifts', name: 'Gifts' }
  ]

  const products = [
    { id: 1, name: 'Silver Plated Dinner Set', category: 'tableware', price: 299, image: '🍽️' },
    { id: 2, name: 'Elegant Candle Holders', category: 'decorative', price: 89, image: '🕯️' },
    { id: 3, name: 'Silver Plated Necklace', category: 'jewelry', price: 149, image: '📿' },
    { id: 4, name: 'Decorative Bowl', category: 'decorative', price: 79, image: '🏺' },
    { id: 5, name: 'Tea Service Set', category: 'tableware', price: 199, image: '🫖' },
    { id: 6, name: 'Silver Plated Frame', category: 'gifts', price: 59, image: '🖼️' },
    { id: 7, name: 'Elegant Vase', category: 'decorative', price: 129, image: '🏺' },
    { id: 8, name: 'Silver Plated Bracelet', category: 'jewelry', price: 99, image: '💍' },
    { id: 9, name: 'Serving Tray', category: 'tableware', price: 119, image: '🍽️' }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white shadow-sm">
        <div className="container-custom section-padding">
          <div className="text-center">
            <h1 className="text-5xl font-serif font-bold text-gray-900 mb-4">
              Our Products
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our exquisite collection of silver plated items, each piece carefully crafted to bring elegance and sophistication to your life.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b">
        <div className="container-custom py-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-brand-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-brand-light hover:text-brand-primary'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-64 bg-gradient-to-br from-brand-light to-brand-primary flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-5xl mb-2">{product.image}</div>
                    <p className="opacity-90 text-sm">Your photo will go here</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Beautifully crafted silver plated item with exceptional attention to detail and quality.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-brand-primary">
                      ${product.price}
                    </span>
                    <button className="btn-primary text-sm px-6 py-2">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We offer custom silver plating services. Contact us to discuss your specific requirements and create something truly unique.
          </p>
          <button className="bg-white text-brand-primary hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
            Contact Us for Custom Orders
          </button>
        </div>
      </section>
    </div>
  )
}

export default Products