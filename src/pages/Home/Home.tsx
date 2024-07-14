import CategorySection from "./HomeContainer/CategorySection/CategorySection";
import SearchBar from "./HomeContainer/SearchBar/SearchBar";
import TopBanner from "./HomeContainer/TopBanner/TopBanner";


const Home = () => {
    return (
        <div>
            <TopBanner />
            <SearchBar />
            <CategorySection />
        </div>
    );
};

export default Home;