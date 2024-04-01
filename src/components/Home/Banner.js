import Carousel from "react-multi-carousel";
import bannersContext from "../../context/banners.context";
import { useContext, useEffect,useState} from "react";
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
function Banner() {
const { banners } = useContext(bannersContext);
const [bigBanner, setBigBanner] = useState([]);

useEffect(() => {
    if (banners && banners[1] && banners[1].bigBanners) {
        setBigBanner(banners[1].bigBanners);
    }
}, [banners]);
  return (
    <div style={{ marginTop: 110 }}>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        slidesToSlide={1}

      >
        {
          bigBanner?.map(data => (
            <img key={data.id} style={{ width: "100%" }} src={data.url} alt="banner" />
          ))
        }
      </Carousel>
    </div>
  )
}

export default Banner;