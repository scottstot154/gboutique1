import Collections from "../Collections";
import Hero from "../Hero";
import heroImg from '../../assets/hero-dress.png';
import { useGetCollectionsQuery } from "../../api/boutiqueApi";

const HomePage: React.FC = () => {
  const { data: collections, isLoading } = useGetCollectionsQuery();

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="bg-[#fdf6ec] min-h-screen w-full text-[#2d1b0f] font-serif">
      <Hero backgroundImage={heroImg} title="Crafted with Heritage. Worn with Grace." />
      <Collections collections={collections || []} />
    </div>
  );
};

export default HomePage;
