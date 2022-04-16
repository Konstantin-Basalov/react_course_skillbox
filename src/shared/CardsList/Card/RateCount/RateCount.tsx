import React from 'react';
import styles from './ratecount.css';

export function RateCount() {
  return (
        <div className={styles.rate}>
            <button className={styles.rate_button_up}>
                <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
                </svg>
            </button>
            <span className={styles.rate_counter}>123</span>
            <button className={styles.rate_button_down}>
                <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
                </svg>
            </button>
        </div>

  );
}
