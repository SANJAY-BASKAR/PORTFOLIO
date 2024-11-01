import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { duration } from "@mui/material";

const ImgSlider = (props) => {
    let settings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500, // Autoplay duration set to 2000ms (2 seconds)
    };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img src="/S.png" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="/S.png" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="S.png" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="S.png" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/S.png" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="/S.png" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="S.png" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="S.png" alt="" />
        </a>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
    
    background-color: rgb(16, 17, 18);
  
  // height: 300px;
    margin: 20px;
    margin-top: 100px;
    margin-botton: 40px;
    border-radius: 100px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    // margin-top: 50px;
    // padding: 50px;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }



  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 100px;
  cursor: pointer;
  position: relative;
  // height:100%;


  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 5px;
    // height:100%;



    &:hover {
      padding: 0px;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
      border-radius: 100px;
    }
  }
`;

export default ImgSlider;