import React from "react";
import "./Home.css";
import { useEffect, useState } from "react";

import stem from "../../../src/Picture/stem.jpg";
import ba from "../../../src/Picture/ba.jpg";
import contact from "../../../src/Picture/contact.jpg";
import word from "../../../src/Picture/word2019.jpg";
import excel from "../../../src/Picture/excel2019.jpg";
import powerpoint from "../../../src/Picture/powerpoint2019.jpg";
import access from "../../../src/Picture/access2019.jpg";
import acrobat from "../../../src/Picture/acrobat.jpg";
import allust from "../../../src/Picture/allustrator2020.jpg";
import photoshop from "../../../src/Picture/Photoshop2020.jpg";
import primeirpro from "../../../src/Picture/primeipro2020.jpg";
import facbook from "../../../src/Picture/facebook.jpg";
import capcut from "../../../src/Picture/capcut2020.jpg";
import youtube from "../../../src/Picture/youtub.jpg";
import software from "../../../src/Picture/software.webp";
import ba1 from "../../../src/Picture/ba1.jpg";
import ba2 from "../../../src/Picture/ba2.jpg";
import ping from "../../../src/Picture/ping.jpg";
import { MdOutlineScience } from "react-icons/md";
import { CiSatellite1 } from "react-icons/ci";
import { GoGear } from "react-icons/go";
import { IoCalculatorSharp } from "react-icons/io5";
function Home() {
  const img = [stem, ba, contact];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (index >= img.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 5000);
  });
  return (
    <div>
      {/* Slide Show  */}
      <section>
        <div className="slideShow">
          <img src={img[index]} />
        </div>
      </section>
      {/* STEM  */}
      <section className="controllfullword">
        <div className="fullwordStem">
          <div className="wordBox">
            <div className="ShowIcon center">
              <MdOutlineScience className="IconsScient ColorGreen" />
            </div>
            <div className="ShowText">
              <h3>វិទ្យាសាស្រ្ត</h3>
              <h4>
                <span className="ColorGreen">S</span>cience
              </h4>
            </div>
          </div>
          <div className="wordBox">
            <div className="ShowIcon center">
              <CiSatellite1 className="IconsScient ColorOrange" />
            </div>
            <div className="ShowText">
              <h3>បច្ចេកវិទ្យា</h3>
              <h4>
                <span class="ColorOrange">T</span>echnology
              </h4>
            </div>
          </div>
          <div className="wordBox">
            <div className="ShowIcon center">
              <GoGear className="IconsScient ColorRed" />
            </div>
            <div className="ShowText">
              <h3>វិស្វកម្ម</h3>
              <h4>
                <span class="ColorRed">E</span>ngineering
              </h4>
            </div>
          </div>
          <div className="wordBox">
            <div className="ShowIcon center">
              <IoCalculatorSharp className="IconsScient ColorBlue" />
            </div>
            <div className="ShowText">
              <h3>គណិតវិទ្យា</h3>
              <h4>
                <span class="ColorBlue">M</span>athematic
              </h4>
            </div>
          </div>
        </div>
      </section>
      {/* Course  */}
      <section>
        <div className="Tittle_Center">
          <h3>Our Course</h3>
        </div>
        <div className="controll_course">
          <div className="controll_courseheader">
            <div className="header_course">
              <img src={word} alt="" />
              <h3>Microsoft Word</h3>
            </div>
            <div className="header_course">
              <img src={excel} alt="" />
              <h3>Microsoft Excel</h3>
            </div>
            <div className="header_course">
              <img src={powerpoint} alt="" />
              <h3>Microsoft Power Point</h3>
            </div>
            <div className="header_course">
              <img src={access} alt="" />
              <h3>Microsoft Access</h3>
            </div>
          </div>
          <div className="controll_courseheader">
            <div className="header_course">
              <img src={photoshop} alt="" />
              <h3>Adobe Photoshop</h3>
            </div>
            <div className="header_course">
              <img src={allust} alt="" />
              <h3>Adobe Illustrator</h3>
            </div>
            <div className="header_course">
              <img src={primeirpro} alt="" />
              <h3>Adobe Premiere Pro</h3>
            </div>
            <div className="header_course">
              <img src={acrobat} alt="" />
              <h3>Adobe Acrobat</h3>
            </div>
          </div>
          <div className="controll_courseheader">
            <div className="header_course">
              <img src={facbook} alt="" />
              <h3>Make Facebook page</h3>
            </div>
            <div className="header_course">
              <img src={youtube} alt="" />
              <h3>You Tube</h3>
            </div>
            <div className="header_course">
              <img src={capcut} alt="" />
              <h3>Edit Video Cap Cut</h3>
            </div>
            <div className="header_course">
              <img src={software} alt="" />
              <h3>Software</h3>
            </div>
          </div>
        </div>
      </section>
      {/* Student  */}
      <section>
        <div className="Tittle_Center">
          <h3>Action Our Students</h3>
        </div>
        <div className="control_student">
          <div className="header_student">
            <div className="studentPhoto">
              <img src={ba1} alt="file" />
            </div>
            <div className="studentTittle">
              <h3 className="center">Information Technology</h3>
              <h4 className="center">
                is the use of any computers, storage, networking and other
                physical devices, infrastructure and processes to create,
                process, store, ...
              </h4>
            </div>
          </div>
          <div className="header_student">
            <div className="studentPhoto">
              <img src={ba2} alt="file" />
            </div>
            <div className="studentTittle">
              <h3 className="center">Information Technology</h3>
              <h4 className="center">
                is the use of any computers, storage, networking and other
                physical devices, infrastructure and processes to create,
                process, store, ...
              </h4>
            </div>
          </div>
          <div className="header_student">
            <div className="studentPhoto">
              <img src={ba1} alt="file" />
            </div>
            <div className="studentTittle">
              <h3 className="center">Information Technology</h3>
              <h4 className="center">
                is the use of any computers, storage, networking and other
                physical devices, infrastructure and processes to create,
                process, store, ...
              </h4>
            </div>
          </div>
          <div className="header_student">
            <div className="studentPhoto">
              <img src={ba1} alt="file" />
            </div>
            <div className="studentTittle">
              <h3 className="center">Information Technology</h3>
              <h4 className="center">
                is the use of any computers, storage, networking and other
                physical devices, infrastructure and processes to create,
                process, store, ...
              </h4>
            </div>
          </div>
        </div>
        <div className="control_student">
          <div className="header_student">
            <div className="studentPhoto">
              <img src={ba1} alt="file" />
            </div>
            <div className="studentTittle">
              <h3 className="center">Information Technology</h3>
              <h4 className="center">
                is the use of any computers, storage, networking and other
                physical devices, infrastructure and processes to create,
                process, store, ...
              </h4>
            </div>
          </div>
          <div className="header_student">
            <div className="studentPhoto">
              <img src={ba2} alt="file" />
            </div>
            <div className="studentTittle">
              <h3 className="center">Information Technology</h3>
              <h4 className="center">
                is the use of any computers, storage, networking and other
                physical devices, infrastructure and processes to create,
                process, store, ...
              </h4>
            </div>
          </div>
          <div className="header_student">
            <div className="studentPhoto">
              <img src={ba1} alt="file" />
            </div>
            <div className="studentTittle">
              <h3 className="center">Information Technology</h3>
              <h4 className="center">
                is the use of any computers, storage, networking and other
                physical devices, infrastructure and processes to create,
                process, store, ...
              </h4>
            </div>
          </div>
          <div className="header_student">
            <div className="studentPhoto">
              <img src={ba1} alt="file" />
            </div>
            <div className="studentTittle">
              <h3 className="center">Information Technology</h3>
              <h4 className="center">
                is the use of any computers, storage, networking and other
                physical devices, infrastructure and processes to create,
                process, store, ...
              </h4>
            </div>
          </div>
        </div>
      </section>
      {/* Teacher  */}
      <section>
        <div className="Tittle_Center">
          <h3>Our Awesome Teacher</h3>
        </div>
        <div className="controll_teacher">
          <div className="header_teacher">
            <div className="teacherPicture">
              <img src={ping} alt="" />
            </div>
            <div className="teacherTittle ">
              <h3 className="center">CHROENG PING</h3>
              <h4>Hello I'm a web developer on Software Design On web page</h4>
            </div>
          </div>
          <div className="header_teacher">
            <div className="teacherPicture">
              <img src={ping} alt="" />
            </div>
            <div className="teacherTittle ">
              <h3 className="center">CHROENG PING</h3>
              <h4>Hello I'm a web developer on Software Design On web page</h4>
            </div>
          </div>        
        </div>
      </section>
      {/* Socail Activities */}
      <section>
        <div className="Tittle_Center">
          <h3>Social Activities</h3>
        </div>
        <div className="controll_social">
          <div className="headerSocialpicture">
            <div className="social_box">
              <img src={ba1} alt="" />
            </div>
            <div className="social_box">
              <img src={ba1} alt="" />
            </div>
            <div className="social_box">
              <img src={ba1} alt="" />
            </div>
            <div className="social_box">
              <img src={ba1} alt="" />
            </div>
          </div>
          <div className="headerSocialparagrap">
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur assumenda dignissimos debitis nostrum ea, quia vel quam libero impedit, odio reiciendis voluptatum incidunt voluptatem dolorem quod quibusdam iusto provident deleniti?</h4>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
