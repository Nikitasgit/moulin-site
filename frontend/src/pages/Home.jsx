import Footer from "../components/Footer";
import Infos from "../components/Infos";
import Main from "../components/Main";
import NavBar from "../components/NavBar";
import Presentation from "../components/Presentation";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Main />
      <Presentation />
      <Infos />

      <Footer />
    </div>
  );
};

export default Home;
