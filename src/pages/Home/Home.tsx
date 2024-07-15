import AllPlants from "./HomeContainer/AllPlants/AllPlants";
import CategorySection from "./HomeContainer/CategorySection/CategorySection";
import PlantImageGallery from "./HomeContainer/PlantImageGallery/PlantImageGallery";
import TopBanner from "./HomeContainer/TopBanner/TopBanner";


const Home = () => {
    return (
        <div>
            <TopBanner />
            <CategorySection />
            <AllPlants />
            <PlantImageGallery />
        </div>
    );
};

export default Home;