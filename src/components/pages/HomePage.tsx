import Collections from "../Collections";
import Hero from "../Hero";
import heroImg from '../../assets/hero-dress.png'; // Adjust the path as necessary

const HomePage: React.FC = () => {
  return (
    <div className="bg-[#fdf6ec] min-h-screen w-full text-[#2d1b0f] font-serif">
      {/* Hero Section */}
      <Hero backgroundImage={heroImg} title="Handcrafted Elegance for the Modern You" />

      {/* Collections */}
      <Collections />
    </div>
  );
};

export default HomePage;
