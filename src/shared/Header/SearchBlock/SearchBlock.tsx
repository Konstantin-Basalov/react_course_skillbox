import React from 'react';
import styles from './searchblock.css';

export function SearchBlock() {
  return (

      <div className={styles.searchBlock}>
          <a href={'#user_profile'} className={styles.user}>
            <img className={styles.user_avatar}
                 src="https://yt3.ggpht.com/ytc/AAUvwnjxYBiH_OZ7nN6ZzbUE0nrGxeWGSY0qlRCjY1q6=s900-c-k-c0x00ffffff-no-rj"
                 alt='user profile'
            />
          </a>
          <div className={styles.search_container}>
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.86164 6.91824H7.36478L7.18868 6.74843C7.80503 6.03145 8.1761 5.10063 8.1761 4.08805C8.1761 1.83019 6.34591 0 4.08805 0C1.83019 0 0 1.83019 0 4.08805C0 6.34591 1.83019 8.1761 4.08805 8.1761C5.10063 8.1761 6.03145 7.80503 6.74843 7.18868L6.91824 7.36478V7.86164L10.0629 11L11 10.0629L7.86164 6.91824ZM4.08805 6.91824C2.52201 6.91824 1.25786 5.65409 1.25786 4.08805C1.25786 2.52201 2.52201 1.25786 4.08805 1.25786C5.65409 1.25786 6.91824 2.52201 6.91824 4.08805C6.91824 5.65409 5.65409 6.91824 4.08805 6.91824Z" fill="#C4C4C4"/>
              </svg>
              <input className={styles.search}
                     type='text'
                     placeholder="Поиск"
              />
          </div>

          <a className={styles.messages}>
              <span className={styles.messages_counter}>5</span>
              <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.7235 0.276367H1.51072C0.808598 0.276367 0.240514 0.850834 0.240514 1.55296L0.234131 9.21252C0.234131 9.91465 0.808598 10.4891 1.51072 10.4891H11.7235C12.4256 10.4891 13.0001 9.91465 13.0001 9.21252V1.55296C13.0001 0.850834 12.4256 0.276367 11.7235 0.276367ZM11.7235 2.82955L6.6171 6.02104L1.51072 2.82955V1.55296L6.6171 4.74444L11.7235 1.55296V2.82955Z" fill="#D9D9D9"/>
              </svg>
          </a>

      </div>

  );
}
