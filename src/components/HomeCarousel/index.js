import styles from "./HomeCarousel.module.css";
import Carousel from "react-bootstrap/Carousel";
import HomeCarouselImage from "./HomeCarouselImage";
import { getPublicAssetPath } from "../../utils";
function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <HomeCarouselImage
          src={getPublicAssetPath("pizzaRound.png")}
          alt="Player holding a pizza plate"
        />
        <Carousel.Caption className={styles.projectCarouselCaption}>
          <p>Pizza</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <HomeCarouselImage
          src={getPublicAssetPath("hamburgerRound.png")}
          alt="Player holding a hamburger plate"
        />
        <Carousel.Caption className={styles.projectCarouselCaption}>
          <p>Burger</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <HomeCarouselImage
          src={getPublicAssetPath("noodlesRound.png")}
          alt="Player holding noodles bowl"
        />
        <Carousel.Caption className={styles.projectCarouselCaption}>
          <p>Noodles</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <HomeCarouselImage
          src={getPublicAssetPath("spaghettiRound.png")}
          alt="Player holding a spaghetti plate"
        />
        <Carousel.Caption className={styles.projectCarouselCaption}>
          <p>Spaghetti</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <HomeCarouselImage
          src={getPublicAssetPath("iceCreamRound.png")}
          alt="Player holding an ice cream cone"
        />
        <Carousel.Caption className={styles.projectCarouselCaption}>
          <p>Ice Cream</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <HomeCarouselImage
          src={getPublicAssetPath("hotDogsRound.png")}
          alt="Player cutting fries"
        />
        <Carousel.Caption className={styles.projectCarouselCaption}>
          <p>Hot Dogs & Fries</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default HomeCarousel;
