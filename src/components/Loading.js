import React from 'react'
import styles from './Loading.module.scss'

const Loading = () => (
  <div className={styles.root}>
    <span className="fas fa-spinner" />
    <div className={styles.text}>
      Loading...
    </div>
  </div>
)

export default Loading
