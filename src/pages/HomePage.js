import Slide1 from "../images/Slide1.png";
import Slide2 from "../images/Slide2.png";
import Slide3 from "../images/Slide3.png";
import Slide4 from "../images/Slide4.png";
 




function HomePage() {
    return  (
      <div className="mt-50">
      <img src={Slide1} alt="TORQ-MATCH Header" style={{ width: "70%", height: "70%", display: "block", position: "relative", left: "14vw"}} />
      <img src={Slide2} alt="Concept description" style={{ width: "50%", height: "50%", display: "block", marginTop: "20px", float: "left" }} />
      <img src={Slide3} alt="Advantages description" style={{ width: "50%", height: "50%", display: "block", position: "relative", top: "60vh" }} />
      <img src={Slide4} alt=" Legacy Product Line Supply Study Graph" style={{ width: "50%", height: "50%", display: "block", position: "relative", top: "70vh", right: "50vw" }} /> 
    </div>
    );
 }

 export default HomePage;

  