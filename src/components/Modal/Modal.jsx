import buttonStyles from '../Button/Button.module.css';
import styles from './Modal.module.css';
import Button from '../Button/Button';

const Modal = ({ message, onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <p>{message}</p>
        <Button onClick={onClose}>Fechar</Button>
      </div>
    </div>
  );
}

export default Modal;