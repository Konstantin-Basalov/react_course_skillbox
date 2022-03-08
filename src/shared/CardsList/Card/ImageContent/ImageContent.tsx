import React from 'react';
import styles from './imagecontent.css';

export function ImageContent() {
  return (
      <div className={styles.preview}>
          <img className={styles.picture} src="https://cdn.dribbble.com/users/1063262/screenshots/14960716/media/6c93a592973fe4280245fa9f48f8766a.png?compress=1&resize=1200x900" alt="background"/>
      </div>
  );
}
