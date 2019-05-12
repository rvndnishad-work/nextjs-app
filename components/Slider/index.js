import React, { Component } from "react";
import Slider from "react-slick";
import "./index.scss";

export default class VerticalMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderHeader: [
        {
          title: "SBI Clerk Apply Online",
          moreId: "1",
          applyId: "1"
        },
        {
          title: "RRC Group D Apply Online",
          moreId: "1",
          applyId: "1"
        },
        {
          title: "CCC Online Form Result Admit Card",
          moreId: "1",
          applyId: "1"
        },
        {
          title: "Allahabad University Apply Online",
          moreId: "1",
          applyId: "1"
        },
        {
          title: "UP Computer Operator Apply Online",
          moreId: "1",
          applyId: "1"
        },
        {
          title: "Railway Group D Result 2019",
          moreId: "1",
          applyId: "1"
        },
        {
          title: "Bihar Board Class 10<",
          moreId: "1",
          applyId: "1"
        },
        {
          title: "SSC Stenographer Result 2019",
          moreId: "1",
          applyId: "1"
        },
        {
          title: "UPHESC Principal Online Form",
          moreId: "1",
          applyId: "1"
        }
      ]
    };
  }

  render() {
    let settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      lazyLoading: true,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      autoplay: true,
      speed: 2000,
      swipeToSlide: true,
      autoplaySpeed: 0,
      pauseOnHover: true,
      cssEase: "linear",
      easing: "linear",
      swipe: true,
      touchMove: true
    };
    let { sliderHeader } = this.state;
    return (
      <div className="latest-news">
        <div className="news-header">
          Latest News
          <div className="down-arrow" />
        </div>
        <Slider {...settings}>
          {sliderHeader.map((data, index) => (
            <div key={index}>
              <h3>
                {data.title}
                <div
                  style={{
                    display: "none"
                  }}
                >
                  <button>More</button>
                  <button>Apply</button>
                </div>
              </h3>
            </div>
          ))}
        </Slider>
        <style jsx>{`
          :global(body) {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
              Helvetica, sans-serif;
          }
        `}</style>
      </div>
    );
  }
}
