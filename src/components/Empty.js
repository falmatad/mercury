import React from 'react'
import styles from './Empty.module.scss'

const Empty = () => (
  <div className={styles.root}>
    <div className={styles.icon}>
      <span className="fas fa-exclamation-triangle"></span>
    </div>
    <div className={styles.content}>
      <div className={styles.message}>We couldn&#39;t find the droids you were looking for.</div>
      <div className={styles.submessage}>Please try a different search query.</div>
    </div>
  </div>
)

export default Empty
