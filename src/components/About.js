// react icons
import { AiOutlineUser, AiFillHtml5 ,AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiLogoCss3, BiLogoReact } from "react-icons/bi";
import {SiRedux , SiCypress ,SiSentry , SiPython , SiDjango , SiMysql , SiSwagger } from "react-icons/si"
import { DiBootstrap , DiReact } from "react-icons/di"
import { FaCss3 } from "react-icons/fa";
import { TbBrandJavascript , TbApi } from "react-icons/tb";
import { BsCardList ,BsAndroid2 } from "react-icons/bs";

import { FaTelegramPlane, FaLaptopCode } from "react-icons/fa";
import {
  BsFillEyeFill,
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsFillCloudDownloadFill,
} from "react-icons/bs";


function About() {
  return (
    <>  

<div
            className="rightSection animate__animated animate__fadeInUp   animate__fast"
            id="cardAbout"
            style={{ display: "block" }}
          >
            <div id="about">
              <div className="title">
                <p> About Me</p>
              </div>

              <div className="user-bio mt-3">
              
                <p>
                I'm a highly skilled Full Stack Developer with expertise in HTML, CSS, Bootstrap, JavaScript, React.js, React Native ,Cypress ,Swagger and Sentry. I am proficient in crafting responsive web designs and on the backend, I have expertise in Django and Django Rest Framework for building robust Rest APIs, while also being adept in Flask for lightweight applications. My knowledge extends Hybrid mobile app development using React Native, and I efficiently handle MySQL databases for seamless data management. With a passion for problem-solving and a keen eye for detail .
                </p>
              </div>

              <div className="row mb-4 user-info ">
                <div className="col-6">
                  {" "}
                  <strong>Freelance - </strong> Yes{" "}
                </div>
                <div className="col-6">
                  {" "}
                  <strong>Residence - </strong> Hathras U.P India{" "}
                </div>
              </div>

              <div className="row mb-4 user-info ">
                <div className="col-6">
                  {" "}
                  <strong>Email - </strong> apsinghjobs@gmail.com{" "}
                </div>
                <div className="col-6">
                  {" "}
                  <strong>Contact - </strong> +91 7742219565{" "}
                </div>
              </div>

              <div className="title mt-5 myServices">
                <p> My Technologies </p>
              </div>

              <div className="serviceContainer mt-3">
                <div className="row ">

                      
                <div className="col-3 ">
                    <div className="icon text-center">
                      <AiFillHtml5 />
                    </div>

                    <h6 className="techName">HTML</h6>
                  </div>

                  <div className="col-3 ">
                    <div className="icon text-center">
                      <FaCss3 />
                    </div>

                    <h6 className="techName">CSS</h6>
                  </div>

                  <div className="col-3 ">
                    <div className="icon text-center">
                      <TbBrandJavascript />
                    </div>

                    <h6 className="techName">Javascript</h6>
                  </div>

                  <div className="col-3 ">
                    <div className="icon text-center">
                      <DiBootstrap />
                    </div>

                    <h6 className="techName">Bootstrap</h6>
                  </div>

                  <div className="col-3 ">
                    <div className="icon text-center">
                      <DiReact />
                    </div>

                    <h6 className="techName"> React JS </h6>
                  </div>

                  <div className="col-3 ">
                    <div className="icon text-center">
                      <DiReact />
                    </div>

                    <h6 className="techName"> React Native </h6>
                  </div>

                  <div className="col-3 ">
                    <div className="icon text-center">
                      <SiRedux />
                    </div>

                    <h6 className="techName">Redux Toolkit</h6>
                  </div>

                  <div className="col-3 ">
                    <div className="icon text-center">
                      <SiCypress />
                    </div>

                    <h6 className="techName">Cypress</h6>
                  </div>

                  <div className="col-3 ">
                    <div className="icon text-center">
                      <SiSentry />
                    </div>

                    <h6 className="techName">Sentry</h6>
                  </div>

                  <div className="col-3 ">
                    <div className="icon text-center">
                      <SiPython />
                    </div>

                    <h6 className="techName">Python</h6>
                  </div>

                  <div className="col-3 ">
                    <div className="icon text-center">
                      <SiDjango />
                    </div>

                    <h6 className="techName">Django</h6>
                  </div>

                  <div className="col-3 ">
                    <div className="icon text-center">
                      <TbApi />
                    </div>

                    <h6 className="techName">Django Rest Framework </h6>
                  </div>

                  <div className="col-3 ">
                    <div className="icon text-center">
                      <SiMysql />
                    </div>

                    <h6 className="techName">MySql</h6>
                  </div>

                  <div className="col-3 ">
                    <div className="icon text-center">
                      <SiSwagger />
                    </div>

                    <h6 className="techName">Swagger API</h6>
                  </div>

                </div>
              </div>

           

              <div className="title mt-5 myServices">
                <p> My Services </p>
              </div>

              <br />
              <br />
              <br />

              <br />
              <br />

              <br />
              <br />

              <br />
            </div>
          </div>
    
    </>
  )
}

export default About