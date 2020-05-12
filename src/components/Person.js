import React from 'react';
import styles from './Person.module.css';
import position from './App.module.css';

import { gedcomService } from "../services/gedcom-parse.service";
import { PersonConfig } from "../utils/PersonConfig";

const Person = ({id, top, left}) => {
    const {
        firstName,
        middleName,
        lastName, maidenName,
        dateOfBirth,
        dateOfDeath
    } = new PersonConfig(gedcomService.results[id]);

    return (
        <div className={`${styles.personBox} ${styles.disableSelection} ${position['left' + left]} ${position['top' + top]}`}>
            <div className={styles.personLine}>{firstName}</div>
            <div className={`${styles.personLine} ${styles.hidded}`}>{middleName}</div>
            <div className={styles.personLine}>{lastName}</div>
            {maidenName && maidenName !== lastName && <div className={`${styles.personLine} ${styles.hidded}`}>({maidenName})</div>}
            <div className={`${styles.personLine} ${styles.hidded}`}>{dateOfBirth}</div>
            <div className={`${styles.personLine} ${styles.hidded}`}>{dateOfDeath}</div>
        </div>
    );
};

export default Person;
