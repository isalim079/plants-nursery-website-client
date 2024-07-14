import AllPlants from "./HomeContainer/AllPlants/AllPlants";
import CategorySection from "./HomeContainer/CategorySection/CategorySection";
import SearchBar from "./HomeContainer/SearchBar/SearchBar";
import TopBanner from "./HomeContainer/TopBanner/TopBanner";


const Home = () => {
    return (
        <div>
            <TopBanner />
            <SearchBar />
            <CategorySection />
            <AllPlants />
        </div>
    );
};

export default Home;