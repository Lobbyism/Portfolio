import styles from "./HomeGrid.module.css";
import React from "react";
import { getPublicAssetPath } from "../../utils";
function HomeGrid() {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.gridItem}>
        <img src={getPublicAssetPath("team.png")} alt="Pizza" />
        <h3>Multiplayer</h3>
        <p>
          Collaborate with up to four players in real-time to prepare customer
          orders. Coordinate efficiently with friends or take on tasks
          individually to keep service running smoothly.
        </p>
      </div>

      <div className={styles.gridItem}>
        <img src={getPublicAssetPath("tutorial.png")} alt="Spaghetti" />
        <h3>Tutorial</h3>
        <p>
          Learn the fundamentals of gameplay through an interactive tutorial.
          New players are guided step-by-step in preparing a pizza, covering all
          essential mechanics and controls.
        </p>
      </div>

      <div className={styles.gridItem}>
        <img src={getPublicAssetPath("guide.png")} alt="Ice Cream" />
        <h3>Educational Guidance</h3>
        <p>
          Develop task management skills by following recipe instructions and
          contextual in-game prompts. Players are encouraged to read, interpret,
          and act upon provided guidance to successfully complete food
          preparation.
        </p>
      </div>
    </div>
  );
}

export default HomeGrid;
