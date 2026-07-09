import { features } from "../../data";
import FeatureCard from "./FeatureCard";


const CardsSection = () => {
  return (
    <section id="features" className="py-24 bg-black">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            De Ce <span className="text-gradient-blue">NOI</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Combinăm cele mai noi cercetări, principii de antrenament expert și
            o atmosferă motivantă pentru a-ți oferi experiența supremă de
            fitness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
          {features.map((feature) => {
            const { id, icon, title, description } = feature;
            return (
              <FeatureCard
                key={id}
                icon={icon}
                title={title}
                description={description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
