import React from 'react'
import PropTypes from 'prop-types'

const ListItem = (props) => (
  <div className="ListItem">
    {JSON.stringify(props.item)}
  </div>
)

const List = (props) => (
  <div className="List">
    LIST
    { props.items.map(item => (
      <ListItem
        key={item.name}
        item={item}
      />
    )) }
    <div>
      Name
       Height
       Mass
       Gender
       Species
    </div>
  </div>
)

List.propTypes = {
  items: PropTypes.array.isRequired,
}

export default List
