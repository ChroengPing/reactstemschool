import React from "react";
import "./Staff.css";
import photoshop from "../../../src/Picture/Photoshop2020.jpg";
import ping from "../../../src/Picture/ping.jpg";

function Staff() {
  return (
    <div>
      <div className="tittle_about center">
        <h4>Our Staff</h4>
      </div>
      <div className="controll_staff">
        <div className="header_staff">
          <div className="staff_box">
            <img src={photoshop} alt="" />
          </div>
          <div className="staff_paragrap">
            <h4>Chroeng Ping</h4>
            <h5>Director</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis labore nemo minima corporis ullam provident vitae cum
              earum commodi pariatur. Iure voluptatem tenetur ea nesciunt
              perferendis cumque placeat consequatur inventore! Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Non laborum, id
              reiciendis accusamus velit rerum, provident nulla atque ipsum
              dolores sapiente impedit maiores commodi eveniet debitis
              laudantium eos quas incidunt?
            </p>
          </div>
        </div>
        <div className="header_staff">
        <div className="staff_box">
            <img src={photoshop} alt="" />
          </div>
          <div className="staff_paragrap">
            <h4>Chroeng Ping</h4>
            <h5>Director</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis labore nemo minima corporis ullam provident vitae cum
              earum commodi pariatur. Iure voluptatem tenetur ea nesciunt
              perferendis cumque placeat consequatur inventore! Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Non laborum, id
              reiciendis accusamus velit rerum, provident nulla atque ipsum
              dolores sapiente impedit maiores commodi eveniet debitis
              laudantium eos quas incidunt?
            </p>
          </div>
         
        </div>
        <div className="header_staff">
          <div className="staff_box">
            <img src={ping} alt="" />
          </div>
          <div className="staff_paragrap">
            <h4>Chroeng Ping</h4>
            <h5>Director</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis labore nemo minima corporis ullam provident vitae cum
              earum commodi pariatur. Iure voluptatem tenetur ea nesciunt
              perferendis cumque placeat consequatur inventore! Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Non laborum, id
              reiciendis accusamus velit rerum, provident nulla atque ipsum
              dolores sapiente impedit maiores commodi eveniet debitis
              laudantium eos quas incidunt?
            </p>
          </div>
        </div>
        <div className="header_staff">
        <div className="staff_box">
            <img src={photoshop} alt="" />
          </div>
          <div className="staff_paragrap">
            <h4>Chroeng Ping</h4>
            <h5>Director</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis labore nemo minima corporis ullam provident vitae cum
              earum commodi pariatur. Iure voluptatem tenetur ea nesciunt
              perferendis cumque placeat consequatur inventore! Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Non laborum, id
              reiciendis accusamus velit rerum, provident nulla atque ipsum
              dolores sapiente impedit maiores commodi eveniet debitis
              laudantium eos quas incidunt?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staff;
