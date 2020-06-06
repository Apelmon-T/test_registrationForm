import React from "react";
import styles from "./FormsControl.module.css";

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <input {...input} {...props} />
      {hasError && <span>{"error"}</span>}
    </div>
  );
};
