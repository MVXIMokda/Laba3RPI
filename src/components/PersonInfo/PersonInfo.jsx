import styles from './PersonInfo.module.css';
const PersonInfo = ({ lecturer }) => (
  <div className={styles.personInfo}>
    <img src={lecturer.photo} alt={lecturer.name} className={styles.photo} />
    <div>
      <h2>{lecturer.name}</h2>
      <p><strong>Образование:</strong> {lecturer.education}</p>
      <p><strong>Стаж:</strong> {lecturer.experience}</p>
      <p><strong>Степень:</strong> {lecturer.degree}</p>
    </div>
  </div>
);
export default PersonInfo;