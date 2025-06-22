import "./Hero.css";
import heroimage from "../../assets/image-hero-desktop.png";
import clientimage1 from "../../assets/client-audiophile.svg";
import clientimage2 from "../../assets/client-databiz.svg";
import clientimage3 from "../../assets/client-maker.svg";
import clientimage4 from "../../assets/client-meet.svg";

const Hero = () => {
    return (
        <div className="herocontainer">
            <div className="herotext">
                <h1> Make remote work </h1>
                <p> Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar. </p>
                <button> Learn more</button>
                <div className="herotext_clients">
                    <img src={clientimage1} alt="client image 1" />
                    <img src={clientimage2} alt="client image 2" />
                    <img src={clientimage3} alt="client image 1" />
                    <img src={clientimage4} alt="client image 1" />
                </div>
            </div>

            <div className="heroimage">
                <img src={heroimage} alt="the hero image" />
            </div>
        </div>
    );
};
export default Hero;