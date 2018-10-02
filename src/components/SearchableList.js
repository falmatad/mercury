import React from 'react'
import PropTypes from 'prop-types'
import ListControls from './ListControls'
import List from './List'
import styles from './SearchableList.module.scss'

const SearchableList = (props) => (
  <div className={styles.root}>
    <ListControls
      disabled={!props.loaded}
      onSearchChange={props.onSearchChange}
    />
    {
      props.loaded
      ? <List items={props.items} />
      : <div>
          <span className="fas fa-spinner" />
        </div>
    }
  </div>
)

SearchableList.propTypes = {
  loaded: PropTypes.bool.isRequired,
  onSearchChange: PropTypes.func.isRequired,
}

export default SearchableList
