import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = ({cart}) => {
    return (
        <div>
            <Navbar cart={cart}/>
            <Announcement/>
            <Slider/>
            <Categories/>
            <Newsletter/>
            <Footer/>
        </div>
    );
}
 
export default Home;