import HomeCarousel from "../components/HomeCarousel";
import HomeGrid from "../components/HomeGrid";
import styles from "./Home.module.css";
import { getPublicAssetPath } from "../utils";
function Home() {
  return (
    <div className={styles.homePage}>
      <div className={styles.projectSection}>
        <div className={styles.projectSectionInfo}>
          <h2>Service</h2>
          <p>
            Service is a fast-paced multiplayer game on Roblox where players
            come together to run a lively restaurant. Customers arrive with
            specific food orders, and it's up to the players to prepare and
            deliver the meals before the customers lose patience and leave.
          </p>
          <p>
            Work together with friends across different themed maps featuring
            all kinds of dishes.
          </p>
        </div>
        <div className={styles.projectSectionImage}>
          <img src={getPublicAssetPath("serviceLogo.png")} alt="Service Logo" />
        </div>
      </div>
      <div className={styles.projectSection}>
        <div
          className={`${styles.projectSectionCarousel} ${styles.projectSectionRestaurantCarousel}`}
        >
          <HomeCarousel />
        </div>
        <div
          className={`${styles.projectSectionInfo} ${styles.projectSectionRestaurantInfo}`}
        >
          <h2>Restaurant Maps</h2>
          <p>
            Service offers a range of themed maps where players collaborate to
            prepare and serve various dishes. Each map introduces a unique
            kitchen layout and menu, encouraging teamwork, time management, and
            adaptability across different culinary environments.
          </p>
        </div>
      </div>
      <hr className="my-4" />
      <h2 className={styles.projectGameplayFeaturesSectionTitle}>
        Gameplay Features
      </h2>
      <HomeGrid />
      <hr className="my-4" />
      <div
        className={`${styles.projectSection} ${styles.projectGameplayShowcaseSection}`}
      >
        <h2>Gameplay Showcase</h2>
        <div className={styles.videoWrapper}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/h3zQ_o3Sn_8" // Replace with the desired YouTube video
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <footer className="footer">
        <p>© 2025 Lobbyism. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default Home;
