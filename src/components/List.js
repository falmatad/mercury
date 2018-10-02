import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'

const List = (props) => (
  <div>
    { props.items.map(item => (
      <ListItem
        key={item.name}
        item={item}
      />
    )) }
  </div>
)

List.propTypes = {
  items: PropTypes.array.isRequired,
}

export default List
