

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

export default FeatureCard
