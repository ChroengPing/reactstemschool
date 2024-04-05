import React from "react";
import "./Footer.css";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook, FaTelegram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
function Footer() {
  return (
    <div>
      <div className="controller_footer">
        <div className="footerBox">
          <h3 className="center">អាស័យដ្ឋាន​ ៖ </h3>
          <h4>
            <span>
              <IoLocationOutline />
            </span>
            សាខាទី១ ៖ ភូមិឈូក សង្កាត់សំរោង ក្រុងសំរោង ខេត្តឧត្ដរមានជ័យ
          </h4>
          <h4>
            <span>
              <IoLocationOutline />
            </span>
            សាខាទី២ ៖ ភូមិសឹង្ក ឃុំគោកមន ស្រុកបន្ទាយអំពិល ខេត្តឧត្ដរមានជ័យ
          </h4>
        </div>
        <div className="footerBox">
          <h3 className="center">ទំនាក់ទំនងបណ្ដាណសង្គម ៖ </h3>
          <a href="https://www.facebook.com/STEMCreatesFutureLeaders?mibextid=ZbWKwL">
            <h5>
              <span className="colorblue">
                <FaFacebook />
              </span>
              <span>
                <p className="colorgreen">S</p>
                <p className="colororange">T</p>
                <p className="colorred">E</p>
                <p className="colortelegram">M</p> and Innovation Academy
              </span>
            </h5>
          </a>
          <a href="https://t.me/+6J3ut2h4q9E0NDQ9">
            <h5>
              <span className="colortelegram">
                <FaTelegram />
              </span>
              <span className="fonts_bayon">
                សាលាស្ទែម
                <p className="colorgreen"> S</p>
                <p className="colororange">T</p>
                <p className="colorred">E</p>
                <p className="colortelegram">M</p> ព័ត៍មានទូទៅសាធារណៈជន
              </span>
            </h5>
          </a>
          <a href="mailto:stemcambodia.academy@gmail.com">
            <h5>
              <span className="colorsky">
                <MdOutlineMail />
              </span>
              <span>
                <p className="colorgreen"> s</p>
                <p className="colororange">t</p>
                <p className="colorred">e</p>
                <p className="colortelegram">m</p>cambodia.academy@gmail.com
              </span>
            </h5>
          </a>
          <h5>
            <span className="colorgreen">
              <LiaPhoneVolumeSolid />
            </span>
            <span>
              <p className="colorblue">097 5474 316 </p>,
              <p className="colorred"> 097 5474 316</p>,
              <p className="colororange">097 5474 316</p>
            </span>
          </h5>
        </div>
      </div>
    </div>
  );
}
export default Footer;
