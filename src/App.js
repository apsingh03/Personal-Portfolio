import "./App.css";
import { useEffect ,  } from "react";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";
// import { Header } from "./components/Header";

// react icons
import {
  AiOutlineUser,
  AiFillHtml5,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import {  TbApi } from "react-icons/tb";
import { BsAndroid2 ,BsGithub , BsLinkedin } from "react-icons/bs";

import { FaTelegramPlane, FaLaptopCode } from "react-icons/fa";
import {
  BsFillCloudDownloadFill,
} from "react-icons/bs";
import About from "./components/About";
import RestApis from "./components/RestApis";
import AndroidApp from "./components/AndroidApp";
import WebApp from "./components/WebApp";
import Projects from "./components/Projects";

function App() {
  useEffect(() => {}, []);

  // .style.display="none"
  let cardAbout = document.getElementById("cardAbout");
  let cardResume = document.getElementById("cardResume");
  let cardWorks = document.getElementById("cardWorks");
  let cardContact = document.getElementById("cardContact");
  let cardProduct = document.getElementById("cardProduct");

  const location = useLocation();
  const idPath = location.hash;
  // console.log(idPath);
  // const idPath = currrentHook.slice(1); cardProduct

  if (idPath === "#aboutMe") {
    // console.log("path - ", idPath);
    cardAbout.style.display = "block";
    // hide other cards
    cardResume.style.display = "none";
    cardWorks.style.display = "none";
    cardContact.style.display = "none";
    cardProduct.style.display = "none";
  }

  if (idPath === "#projects") {
    // console.log("path - ", idPath);
    cardProduct.style.display = "block";
    // hide other cards
    cardResume.style.display = "none";
    cardWorks.style.display = "none";
    cardContact.style.display = "none";
    cardAbout.style.display = "none";
  }

  if (idPath === "#mobileKartRestApi") {
    // console.log("path - ", idPath);
    cardResume.style.display = "block";
    cardResume.style.opacity = "0.5";
    // hide other cards
    cardAbout.style.display = "none";
    cardWorks.style.display = "none";
    cardContact.style.display = "none";
    cardProduct.style.display = "none";
  }

  if (idPath === "#mobileKartWebApp") {
    // console.log("path - ", idPath);
    cardContact.style.display = "block";
    // hide other cards
    cardResume.style.display = "none";
    cardWorks.style.display = "none";
    cardAbout.style.display = "none";
    cardProduct.style.display = "none";
  }

  if (idPath === "#mobileKartAndroidApp") {
    // console.log("path - ", idPath);
    cardWorks.style.display = "block";
    // hide other cards
    cardAbout.style.display = "none";
    cardResume.style.display = "none";
    cardContact.style.display = "none";
    cardProduct.style.display = "none";
  }

  return (
    // DiJqueryLogo
    <>
      <div className="stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>

      <div className="firstBgSection  row">
        {/* ------------- leftSection ------------------------ */}
        <div className="col-xs-1 col-sm-1 col-md-1  " style={{ zIndex: "1" }}>
          <div className="leftSection">
            <ul>
              <li id="sideSectionLinks" title="About" >
                {" "}
                <a href="#aboutMe">
                  {" "}
                  <span>
                    <AiOutlineUser />
                  </span>{" "}
                  About{" "}
                </a>{" "}
              </li>

              <li id="sideSectionLinks" title="Projects" >
                {" "}
                <a href="#projects">
                  {" "}
                  <span>
                    <FaLaptopCode />
                  </span>{" "}
                  Projects{" "}
                </a>{" "}
              </li>

              <li id="sideSectionLinks" title="Mobile Kart Rest APIS" >
                {" "}
                <a href="#mobileKartRestApi">
                  {" "}
                  <span>
                    <TbApi />
                  </span>{" "}
                  Mobile Kart Rest APIS{" "}
                </a>{" "}
              </li>

              <li id="sideSectionLinks" title="Mobile Kart WebApp"  >
                {" "}
                <a href="#mobileKartWebApp">
                  {" "}
                  <span>
                    <AiOutlineFundProjectionScreen />
                  </span>{" "}
                  Mobile Kart WebApp{" "}
                </a>{" "}
              </li>

              <li id="sideSectionLinks" title="Mobile Kart Android App"  >
                {" "}
                <a href="#mobileKartAndroidApp">
                  {" "}
                  <span>
                    <BsAndroid2 />
                  </span>{" "}
                  Mobile Kart Android APP{" "}
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>

        {/* ------------- midSection ------------------------ */}

        <div className="col-xs-5 col-sm-5 col-md-5" id="dsfsafavf">
          <div className="midSection">
            <div className="bgImage ">
              {/* <img src="https://ryancv.bslthemes.com/developer/wp-content/uploads/sites/3/2022/07/dev-bg-3-1200x812.jpg" /> */}

              <video muted loop autoPlay={""} playsInline id="myVideo" alt="Backgroud" >
                {" "}
                <source
                  src="https://ryancv.bslthemes.com/system/wp-content/uploads/sites/5/2022/07/pexels-mikhail-nilov-6963744.mp4"
                  type="video/mp4"
                />{" "}
              </video>
            </div>

            <div className="bottomPart">
              <div className="profileImage">
                <img
                  src="https://sintechworks.com/wp-content/uploads/2023/05/fotor_2023-5-25_13_23_31.png"
                  alt="Admin Image"
                  title="Developer Photo"
                />
              </div>

              <div className="insideContent">
                <h1 className="adminName mt-3"> Ajay Pratap Singh </h1>
                <h6 className="text-center mt-1" id="typingHeadingDomain">
                  Full Stack Developer
                </h6>

                <div className="socialIcons mt-1">
                  <span>
                    <Link to="https://github.com/apsingh03" target="_blank" style={{ color:"#fff" , fontSize: "30px"  }} title="Github" >
                    <BsGithub />
                    </Link>
                   
                  </span>
                  <span>

                  <Link to="https://www.linkedin.com/in/apsingh03/"  target="_blank" style={{ color:"#fff" , fontSize: "30px" }} title="LinkedIn"  > 
                  <BsLinkedin />
                  </Link>
                    
                  
                  </span>
              
                </div>
              </div>
            </div>

            <div className="row py-4 footer ">
              <div className="col-6 text-center footer-firstElement ">
                <h6>
                  <Link style={{ color:"#fff" , textDecoration: "none" }} target="_blank" to="../public/files/AjayPratapSinghResume.pdf"  download title="Download CV" >
                  DOWNLOAD CV {"  "}

                  <span>
                    
                    <BsFillCloudDownloadFill />
                  </span>

                  </Link>
                 
                 
                </h6>
              </div>

              <div className="col-6 text-center">
                <h6 >
                  CONTACT ME
                  <span>
                    
                    <FaTelegramPlane />
                  </span>
                </h6>
              </div>
            </div>
          </div>
        </div>



        {/* ------------- right section  ------------------------ */}

        <div
          className="col-xs-6 col-sm-6 col-md-6 "
          id="ldskfaoijfsdmlkmflaskdf"
        >
          <About />

          <RestApis />

          <AndroidApp />

          <WebApp />

          <Projects />
        </div>
      </div>
    </>
  );
}

export default App;
