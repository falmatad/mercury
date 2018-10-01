import React from 'react'
import PropTypes from 'prop-types'
import ListControls from './ListControls'
import List from './List'

const SearchableList = (props) => (
  <div className="SearchableList">
    <ListControls
      disabled={!props.loaded}
      onSearchChange={props.onSearchChange}
    />
    {
      props.loaded
      ? <List items={props.items} />
      : <div>loading...</div>
    }
  </div>
)

SearchableList.propTypes = {
  loaded: PropTypes.bool.isRequired,
  onSearchChange: PropTypes.func.isRequired,
}

export default SearchableList
