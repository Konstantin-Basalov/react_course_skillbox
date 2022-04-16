import React from 'react';
import styles from './admblock.css';
import {DropMenu} from "../DropMenu";

export function AdmBlock() {
  return (

      <div className={styles.container}>
        <div className={styles.user}>
          <img className={styles.user_avatar}
               src="https://yt3.ggpht.com/ytc/AAUvwnjxYBiH_OZ7nN6ZzbUE0nrGxeWGSY0qlRCjY1q6=s900-c-k-c0x00ffffff-no-rj"
               alt="avatar"
          />
          <a href={'#user_profile'} className={styles.user_name}>Константин Басалов</a>
          <span className={styles.user_timePost}><span className={styles.user_timePost_tablet_pc}>опубликовано</span> 5 часов назад</span>
        </div>
          <DropMenu/>
      </div>

  );
}