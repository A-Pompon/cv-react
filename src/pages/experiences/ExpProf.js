import React, { useState } from "react";
import "../../styles/expProf.css";

import dataExperiences from "../../../src/data/dataExperiences.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const ExpProf = () => {
  const [experiences, setExperiences] = useState(dataExperiences);

  return (
    <section>
      <Swiper
        className="container professionnelles_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {experiences.map(({ title, employer, description }, index) => {
          return (
            <SwiperSlide key={index} className="profess">
              <div className="profess__content">
                <h5 className="profess__title">{title}</h5>
                {employer.map((item, index) => (
                  <small key={index} className="profess__employer">
                    {item}
                  </small>
                ))}
                <div className="profess__description">{description}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default ExpProf;
