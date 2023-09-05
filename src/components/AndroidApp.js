// react icons
import {
  AiOutlineUser,
  AiFillHtml5,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { BiLogoCss3, BiLogoReact } from "react-icons/bi";
import {
  SiRedux,
  SiCypress,
  SiSentry,
  SiPython,
  SiDjango,
  SiMysql,
  SiSwagger,
} from "react-icons/si";
import { DiBootstrap, DiReact } from "react-icons/di";
import { FaCss3 } from "react-icons/fa";
import { TbBrandJavascript, TbApi } from "react-icons/tb";
import { BsCardList, BsAndroid2 ,BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaTelegramPlane, FaLaptopCode } from "react-icons/fa";
import {
  BsFillEyeFill,
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsFillCloudDownloadFill,
} from "react-icons/bs";

function AndroidApp() {
  return (
    <>
      <div
        className="rightSection animate__animated animate__fadeInUp animate__fast "
        id="cardWorks"
      >
        <div id="about">
          <div className="title d-flex flex-row  justify-content-between align-items-baseline ">
            <p> Mobile Kart Android App </p>

            <div className="socialIcons" style={{ marginLeft: "20px" }}>
              <span>
                <Link
                    title="Github"
                  to="https://github.com/apsingh03/MobileKart_AndroidApp"
                  target="_blank"
                  style={{ color: "#fff", fontSize: "20px" }}
                >
                  <BsGithub /> Github Link
                </Link>
              </span>
            </div>

          </div>

          <div
            className="list-group mt-3"
            style={{ backgroundColor: "transparent" }}
          >
            <button
              type="button"
              className="list-group-item list-group-item-action active"
              aria-current="true"
            >
              Features for Users
            </button>
            <button
              type="button"
              style={{ backgroundColor: "#222222", color: "#fff" }}
              className="list-group-item list-group-item-action"
            >
              User Registration, Dashboard, JWT Authentication, Products Filter
              page{" "}
            </button>
            <button
              type="button"
              style={{ backgroundColor: "#222222", color: "#fff" }}
              className="list-group-item list-group-item-action"
            >
              User can add multiple Shipping Addresses, Add products in
              Wishlist, Cart and user can Checkout{" "}
            </button>
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
        </div>
      </div>
    </>
  );
}

export default AndroidApp;
