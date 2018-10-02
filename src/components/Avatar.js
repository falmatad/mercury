import React from 'react'
import PropTypes from 'prop-types'
import styles from './Avatar.module.scss'

const icon = {
  droid: 'fab fa-android',
  human: 'fas fa-user-circle',
}

const Avatar = (props) => {
  const className = icon[props.type] || 'fas fa-question'
  return (
    <div className={styles.root}>
      <span className={className} />
    </div>
  )
}

Avatar.propTypes = {
  type: PropTypes.oneOf([
    'droid',
    'human',
  ]),
}

export default Avatar
