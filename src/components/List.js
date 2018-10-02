import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'
import Empty from './Empty'

const List = (props) => (
  <div>
    {
      props.items.length
        ? props.items.map(item => (
          <ListItem
            key={item.name}
            item={item}
          />
        ))
        : <Empty />
    }
  </div>
)

List.propTypes = {
  items: PropTypes.array.isRequired,
}

export default List
