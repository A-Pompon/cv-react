import React, { useState } from "react";
import "../../../styles/diplomes.css";

import dataDiplomes from "../../../data/dataDiplomes.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import Swiper core and required modules
import { Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Diplomes = () => {
  const [diplomes, setDiplomes] = useState(dataDiplomes);

  return (
    <section>
      <h5>Parcours scolaire</h5>
      <h2>Diplômes</h2>

      <Swiper
        className="container diplomes_container"
        // install Swiper modules
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
      >
        {diplomes.map(({ image, annee, diplome }, index) => {
          return (
            <SwiperSlide key={index} className="diplome">
              <div className="diplome__avatar">
                <div className="diplome__avatar-img">
                  <FontAwesomeIcon icon={image} />
                </div>
              </div>
              <div className="diplome__content">
                <h5 className="diplome__annee">{annee}</h5>
                <small className="diplome__name">{diplome}</small>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Diplomes;
