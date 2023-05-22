import React from "react";
import "./feedback.css";

import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/swiper-bundle.min.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import data from "../../data/data.js";

const allFeedback = data.feedback;

function Feedback() {
  const [t] = useTranslation();

  return (
    <Swiper
      className="feedback-container"
      // install Swiper modules
      modules={[Navigation, Scrollbar, Pagination]}
      autoplay={{ delay: 5000 }}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {allFeedback.map((feedbackStatus) => {
        return (
          <SwiperSlide className="single-feedback" key={feedbackStatus.id}>
            <div>
              <img src={feedbackStatus.image} alt={feedbackStatus.altImg} />
            </div>
            <h3>{feedbackStatus.name}</h3>
            <p>"{t(feedbackStatus.feedback)}"</p>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Feedback;
