import React from 'react'
import PropTypes from 'prop-types'
import './ListItem.css'

const icon = {
  droid: 'fab fa-android',
  human: 'fas fa-user-circle',
}

const Avatar = (props) => {
  const className = icon[props.type] || 'fas fa-question'
  return (
    <div className="Avatar">
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
    <div className="ListItem">
      <Avatar type={species} />
      <div className="Info">
        <div className="name">
          { name }
        </div>
        <div className="stats">
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

const List = (props) => (
  <div className="List">
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
