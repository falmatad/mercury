import React from 'react'
import PropTypes from 'prop-types'
import styles from './ListItem.module.scss'
import Avatar from './Avatar'

const ListItem = (props) => {
  const {
    item: {
      name,
      height,
      mass,
      gender,
      species,
    },
  } = props
  return (
    <div className={styles.root}>
      <Avatar type={species} />
      <div className={styles.info}>
        <div className={styles.name}>
          { name }
        </div>
        <div className={styles.stats}>
          <span>
            { height }
          </span>
          <span>
            { mass }
          </span>
          <span>
            { gender }
          </span>
        </div>
      </div>
    </div>
  )
}

ListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    mass: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    species: PropTypes.oneOf([
      'droid',
      'human',
    ]),
  }).isRequired,
}

export default ListItem
