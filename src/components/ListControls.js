import React from 'react'
import PropTypes from 'prop-types'

class ListControls extends React.Component {
  state = {
    search: '',
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value })
    clearTimeout(this.searchTimeout)
    this.searchTimeout = setTimeout(() => {
      this.props.onSearchChange(this.state.search)
    }, 500)
  }

  componentWillUnmount() {
    clearTimeout(this.searchTimeout)
  }

  render() {
    const { disabled } = this.props
    const { search } = this.state
    return (
      <div className="ListControls">
        <input
          type="text"
          value={search}
          placeholder="Search..."
          disabled={disabled}
          onChange={this.handleInputChange}
        />
        <select
          disabled={disabled}
        >
          <option default>Sort results...</option>
        </select>
      </div>
    )
  }
}

ListControls.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onSearchChange: PropTypes.func.isRequired,
}

export default ListControls
