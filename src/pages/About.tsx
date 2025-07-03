
const About = () => {
  const values = [
    {
      title: 'Quality Craftsmanship',
      description: 'Every piece is meticulously crafted by skilled artisans who take pride in their work.',
      icon: '🔨'
    },
    {
      title: 'Timeless Design',
      description: 'Our designs blend classic elegance with contemporary style for lasting appeal.',
      icon: '🎨'
    },
    {
      title: 'Customer Satisfaction',
      description: 'We are committed to exceeding expectations with exceptional service and quality.',
      icon: '⭐'
    },
    {
      title: 'Sustainable Practices',
      description: 'We use environmentally responsible methods in our silver plating processes.',
      icon: '🌱'
    }
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Master Craftsperson',
      description: 'With over 20 years of experience in silver crafting, Sarah founded Silver Elegance to share her passion for beautiful, handcrafted items.',
      image: '👩‍🎨'
    },
    {
      name: 'Michael Chen',
      role: 'Design Director',
      description: 'Michael brings a modern aesthetic to traditional silver plating, creating pieces that are both timeless and contemporary.',
      image: '👨‍🎨'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Quality Assurance Manager',
      description: 'Emma ensures every piece meets our exacting standards before it reaches our customers.',
      image: '👩‍💼'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-light to-white">
        <div className="container-custom section-padding">
          <div className="text-center">
            <h1 className="text-5xl font-serif font-bold text-gray-900 mb-4">
              About Silver Elegance
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Crafting beautiful silver plated items with passion, precision, and an unwavering commitment to excellence since 2010.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Silver Elegance was born from a simple belief: that everyday objects can be transformed into works of art through skilled craftsmanship and attention to detail. Founded in 2010 by master craftsperson Sarah Johnson, our company has grown from a small workshop to a respected name in silver plated items.
                </p>
                <p>
                  What started as a passion project has evolved into a mission to bring elegance and sophistication to homes around the world. Each piece we create tells a story of dedication, artistry, and the timeless appeal of silver.
                </p>
                <p>
                  Today, we continue to honor traditional silver plating techniques while embracing modern design sensibilities, ensuring that every item we produce meets the highest standards of quality and beauty.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-brand-primary to-brand-dark rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">🏭</div>
                  <p className="text-lg opacity-90">Our Workshop</p>
                  <p className="text-sm opacity-75 mt-2">Your workshop photo will go here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The talented individuals behind Silver Elegance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center group hover:shadow-xl transition-shadow duration-300">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-brand-primary font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-brand-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Our Crafting Process
            </h2>
            <p className="text-xl opacity-90">
              From concept to completion, every step is handled with care
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Design', description: 'Every piece begins with careful design and planning' },
              { step: '02', title: 'Preparation', description: 'Materials are selected and prepared for the plating process' },
              { step: '03', title: 'Silver Plating', description: 'Our skilled artisans apply the silver plating with precision' },
              { step: '04', title: 'Quality Check', description: 'Each item undergoes rigorous quality inspection' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold mb-4 opacity-75">
                  {process.step}
                </div>
                <h3 className="text-xl font-serif font-semibold mb-4">
                  {process.title}
                </h3>
                <p className="opacity-90 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About