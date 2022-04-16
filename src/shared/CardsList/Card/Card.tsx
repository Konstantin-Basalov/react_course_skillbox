import React from 'react';
import styles from './card.css';
import {TextContent} from "./TextContent";
import {ImageContent} from "./ImageContent";
import {CardProps} from "./CardProps";
import {DropMenu} from "./DropMenu";
import {AdmBlock} from "./AdmBlock";

export function Card() {
  return (
      <li className={styles.card}>
          <AdmBlock/>
          <TextContent/>
          <ImageContent/>
          <CardProps/>
          <DropMenu/>
      </li>
  );
}