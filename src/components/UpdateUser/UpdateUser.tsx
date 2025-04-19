import React, { useState } from 'react';
import styles from './UpdateUser.module.css';
import { User } from '../../types';

interface Props {
  user: User;
  onUpdate: (updatedUser: User) => void;
  onClose: () => void;
}

const UpdateUser: React.FC<Props> = ({ user, onUpdate, onClose }) => {
  const [formData, setFormData] = useState<User>(user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: name === 'age' ? Number(value) : value,
      });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(formData);
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Editar Usuario</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            Edad:
            <input
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input name="email" value={formData.email} disabled />
          </label>
          <button type="submit">Actualizar</button>
          <button type="button" onClick={onClose}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;