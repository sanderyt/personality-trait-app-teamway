import React, { FC } from "react";

import styles from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => (
  <p className={styles.errorMessage}>{message}</p>
);

export default ErrorMessage;
