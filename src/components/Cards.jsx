import { features } from "@/data";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="glass-card p-6 rounded-xl animate-on-scroll">
      <div className="bg-linear-to-br from-purple-500 to-pink-600 p-3 w-fit rounded-lg mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const CardsSection = () => {

  return (
    <section id="features" className="py-24 bg-black">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-gradient-blue">US</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We combine latest studies knowledge, expert training principles, and
            a motivating atmosphere to deliver the ultimate fitness experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
