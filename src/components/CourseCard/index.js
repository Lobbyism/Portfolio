import styles from "./CourseCard.module.css";
function CourseCard({ title, code, description }) {
  return (
    <div className={styles.courseCard}>
      <h3 className={styles.courseTitle}>
        {title} - {code}
      </h3>
      <p className={styles.courseDescription}>{description}</p>
    </div>
  );
}
export default CourseCard;
