import {hot} from 'react-hot-loader/root'
import * as React from 'react';
import styles from './header.css';

function HeaderComponent() {
    return (
        <div>
            <h1 className={styles.example}>Hello React</h1>
            <p className={styles.style__second}>Home Work</p>
        </div>

    )
}

export const Header = hot(HeaderComponent);

