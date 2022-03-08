import React from 'react';
import styles from './card.css';
import {TextContent} from "./TextContent";
import {ImageContent} from "./ImageContent";
import {CardProps} from "./CardProps";
import {DropButton} from "./DropButton";

export function Card() {
  return (
      <li className={styles.card}>
          <TextContent/>
          <ImageContent/>
          <CardProps/>
          <DropButton/>
      </li>
  );
}