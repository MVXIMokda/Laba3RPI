import styles from './LecturerCard.module.css';
const LecturerCard = ({ lecturer, onClick }) => (
  <div className={styles.card} onClick={onClick}>
    <img src={lecturer.photo} alt={lecturer.name} className={styles.photo} />
    <h3>{lecturer.name}</h3>
    <p>{lecturer.degree}</p>
    <button className={styles.btn}>Подробнее</button>
  </div>
);
export default LecturerCard;