// react icons
import {
  AiOutlineUser,
  AiFillHtml5,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { BiLogoCss3, BiLogoReact , BiLinkExternal } from "react-icons/bi";
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
import { BsCardList, BsAndroid2, BsGithub } from "react-icons/bs";

import { FaTelegramPlane, FaLaptopCode } from "react-icons/fa";
import {
  BsFillEyeFill,
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsFillCloudDownloadFill,
} from "react-icons/bs";

import { Link } from "react-router-dom";

function RestApis() {
  return (
    <>
      <div
        className="rightSection animate__animated  animate__fadeInUp animate__fast "
        id="cardResume"
      >
        <div id="about">
          <div className="title d-flex flex-row  justify-content-between align-items-baseline ">
            <p className=""> Mobile Kart Rest API  
            <Link title="Website Link"
                  to="http://ajaypratapsingh.pythonanywhere.com/"
                  target="_blank"
                  style={{ color: "#fff", fontSize: "25px" }}
                >
                  <BiLinkExternal /> 
                </Link>
             </p>


            <div className="socialIcons" style={{ marginLeft: "20px" }}>
              <span>
                <Link
                title="Github"
                  to="https://github.com/apsingh03/MobileKart_RestApis"
                  target="_blank"
                  style={{ color: "#fff", fontSize: "20px" }}
                >
                  <BsGithub /> Github Link
                </Link>
              </span>
            </div>
          </div>

          <div className="user-bio mt-3">
            <div
              className="list-group"
              style={{ backgroundColor: "transparent" }}
            >
              <button
                type="button"
                className="list-group-item list-group-item-action active"
                aria-current="true"
              >
                Features for Vendors
              </button>
              <button
                type="button"
                style={{ backgroundColor: "#222222", color: "#fff" }}
                className="list-group-item list-group-item-action"
              >
                Vendor Registration, Dashboard, JWT Authentication, Add
                Category, Sub Category, Tax Classes and can Add Product & Edit
                it Later{" "}
              </button>
              <button
                type="button"
                style={{ backgroundColor: "#222222", color: "#fff" }}
                className="list-group-item list-group-item-action"
              >
                Set products as Featured from Toggle button and Duplicate
                existing products, delete products Temporarily and Permanent
                delete from Recycle Bin{" "}
              </button>
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
                User Registration, Dashboard, JWT Authentication, Products
                Filter page{" "}
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
          </div>

          <div className="title mt-5 myServices">
            <p>Technologies Used </p>
          </div>

          <div className="serviceContainer mt-3">
            <div className="row ">
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
      </div>{" "}
    </>
  );
}

export default RestApis;
