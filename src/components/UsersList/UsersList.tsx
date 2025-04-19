import React, { useState } from "react";
import { User } from '../../types';
import styles from './UsersList.module.css'; // Import CSS module
import UpdateUser from '../UpdateUser';

interface Props {
    users: User[];
    onUserUpdate: (updatedUser: User) => void;
}

const UsersList: React.FC<Props> = ({ users, onUserUpdate }) => {
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const handleUserClick = (user: User) => {
        setSelectedUser(user);
    };

    const handleUpdate = (updatedUser: User) => {
        onUserUpdate(updatedUser);
        setSelectedUser(null);
    };
    const renderList = (): React.ReactNode[] => {
        return users.map((user) => (
            <li key={user._id} className={styles.listItem} onClick={() => handleUserClick(user)}>
                <div className={styles.userInfo}>
                    <h2 className={styles.user}>{user.name}</h2>
                    <h3 className={styles.age}>Age: {user.age}</h3>
                    <p className={styles.email}>{user.email}</p>
                </div>
            </li>
        ));
    };

    return (
        <>
        <ul className={styles.list}>
            {renderList()}
        </ul>
        {selectedUser && (
            <UpdateUser
                user={selectedUser}
                onUpdate={handleUpdate}
                onClose={() => setSelectedUser(null)}
            />
        )}
        </>
    );
};

export default UsersList;