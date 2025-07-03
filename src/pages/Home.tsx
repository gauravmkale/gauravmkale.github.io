import { Link } from 'react-router-dom'

const Home = () => {
  const features = [
    {
      title: 'Premium Quality',
      description: 'Each piece is crafted with the finest silver plating techniques for lasting beauty.',
      icon: '✨'
    },
    {
      title: 'Elegant Design',
      description: 'Timeless designs that complement any style and occasion.',
      icon: '💎'
    },
    {
      title: 'Expert Craftsmanship',
      description: 'Handcrafted by skilled artisans with attention to every detail.',
      icon: '🎨'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-light to-white min-h-screen flex items-center">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                Exquisite Silver
                <span className="text-brand-primary block">Elegance</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover our stunning collection of silver plated items, where timeless craftsmanship meets modern elegance. Each piece tells a story of luxury and sophistication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="btn-primary text-center">
                  Explore Collection
                </Link>
                <Link to="/about" className="btn-secondary text-center">
                  Our Story
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-brand-primary to-brand-dark rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">🏺</div>
                  <p className="text-lg opacity-90">Beautiful Silver Collection</p>
                  <p className="text-sm opacity-75 mt-2">Your photos will go here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Why Choose Silver Elegance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine traditional craftsmanship with modern design to create pieces that stand the test of time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Featured Collection
            </h2>
            <p className="text-xl text-gray-600">
              A glimpse of our most popular silver plated items
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 bg-gradient-to-br from-brand-light to-brand-primary flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">🍽️</div>
                    <p className="opacity-90">Product {item}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                    Silver Plated Item {item}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Elegant and sophisticated design perfect for any occasion.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-brand-primary">$99</span>
                    <button className="text-brand-primary hover:text-brand-dark font-medium">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">
            Ready to Add Elegance to Your Life?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Browse our complete collection and find the perfect silver plated items for your home or as a gift for someone special.
          </p>
          <Link to="/contact" className="bg-white text-brand-primary hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home