import React from 'react'
import PropTypes from 'prop-types'
import styles from './ListControls.module.scss'
import Select from 'react-select'

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
      <div className={styles.root}>
        <input
          type="text"
          value={search}
          placeholder="Search..."
          disabled={disabled}
          onChange={this.handleInputChange}
          className={styles.input}
        />
        <Select
          className={styles.select}
          isDisabled={disabled}
          isSearchable={false}
          placeholder="Sort results..."
          options={[
            { value: 'A-Z', label: 'A-Z' },
            { value: 'Z-A', label: 'Z-A' },
          ]}
        />
      </div>
    )
  }
}

ListControls.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onSearchChange: PropTypes.func.isRequired,
}

export default ListControls
