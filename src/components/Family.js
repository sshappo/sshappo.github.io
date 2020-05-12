import React from 'react';
import Person from "./Person";
import { PersonConfig } from "../utils/PersonConfig";
import style from './Family.module.css';

export const Family = ({familyAsChild, familyAsSpouse, id, data, ...rest}) => {
    const asChild = data[familyAsChild];
    const asSpouse = data[familyAsSpouse];
    const children = asChild.CHIL.map(child => new PersonConfig(data[child]));
    const wife = new PersonConfig(data[asSpouse.WIFE]);

    return (
        <>
            <div className={style.generation}>
                <Person {...rest}/>
                <Person {...wife}/>
            </div>
            <div className={style.generation}>
                {children.map((child, index) => <Person key={index} {...child}/>)}
            </div>
        </>
    );
};