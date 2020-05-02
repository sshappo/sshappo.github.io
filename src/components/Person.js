import React from 'react';
import styles from './Person.module.css';

const Person = ({firstName, middleName, lastName, dateOfBirth, dateOfDeath}) => {
    return (
        <div className={styles.personBox}>
            <div>
                <div className={styles.personLine}>{firstName}</div>
                <div className={`${styles.personLine} ${styles.hidded}`}>{middleName}</div>
                <div className={styles.personLine}>{lastName}</div>
                <div className={`${styles.personLine} ${styles.hidded}`}>{dateOfBirth}</div>
                <div className={`${styles.personLine} ${styles.hidded}`}>{dateOfDeath}</div>
            </div>
        </div>
    );
};

export default Person;
