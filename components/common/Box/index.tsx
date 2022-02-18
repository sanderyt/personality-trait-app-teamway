import React, { FC, ReactNode } from "react";

import styles from "./Box.module.css";

interface BoxProps {
  children: ReactNode;
}

const Box: FC<BoxProps> = ({ children }) => {
  return <div className={styles.box}>{children}</div>;
};

export default Box;
