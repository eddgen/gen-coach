import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { memberships } from "../data";
import { Check } from "lucide-react";

const MembershipCard = ({
  title,
  price,
  period,
  description,
  features,
  popular = false,
}) => {
  return (
    <div
      className={`relative glass-card p-8 rounded-xl border ${
        popular ? "border-purple-500" : "border-white/10"
      } overflow-hidden animate-on-scroll flex flex-col h-full`}
    >
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-linear-to-r from-purple-600 to-pink-600 text-white text-xs font-bold py-1 px-3 rounded-bl-xl">
            POPULAR
          </div>
        </div>
      )}

      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>

      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-gray-400">/{period}</span>
      </div>

      <ul className="space-y-3 mb-8 grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-purple-500 mr-2 shrink-0" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <Link to="/signup" className="mt-auto">
        <Button
          className={`w-full ${
            popular
              ? "bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              : "bg-white/10 hover:bg-white/20"
          } text-white`}
        >
          Choose Plan
        </Button>
      </Link>
    </div>
  );
};

const Memberships = () => {
  return (
    <section
      id="memberships"
      className="pt-32 pb-24 bg-linear-to-b from-black to-[#0A0A0A] min-h-screen"
    >
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Choose Your <span className="text-gradient-purple">Membership</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find the perfect plan that fits your fitness goals and lifestyle. No
            long-term contracts, cancel anytime. All the higher tiers include
            the benefits of the ones before.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {memberships.map((membership, index) => (
            <MembershipCard
              key={index}
              title={membership.title}
              price={membership.price}
              period={membership.period}
              description={membership.description}
              features={membership.features}
              popular={membership.popular}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Memberships;
