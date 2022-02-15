import Header from "../../components/Header/Header";
import Welcome from "./Welcome/Welcome";
import About from "./About/About";
import Join from "./Join/Join";
import Meet from "./Meet/Meet";
import Mission from "./Mission/Mission";
import Utility from "./Utility/Utility";
import Roadmap from "./Roadmap/Roadmap";
import FAQ from "./FAQ/FAQ";

const Main = () => {
    return (
    <>
        <Header/>
        <Welcome/>
        <About/>
        <Join/>
        <Meet/>
        <Mission/>
        <Utility/>
        <Roadmap/>
        <FAQ/>
    </>
    )
}

export default Main