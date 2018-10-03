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
    const searchDelay = 500
    this.searchTimeout = setTimeout(() => {
      this.props.onSearchChange(this.state.search)
    }, searchDelay)
  }

  handleSelectChange = (event) => {
    this.props.onSortChange(event.value)
  }

  componentWillUnmount() {
    clearTimeout(this.searchTimeout)
  }

  render() {
    const { disabled, sort } = this.props
    const { search } = this.state
    const options = [
      { value: 'asc', label: 'A-Z' },
      { value: 'desc', label: 'Z-A' },
    ]
    const selectValue = options.find(x => x.value === sort)
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
          options={options}
          onChange={this.handleSelectChange}
          value={selectValue}
        />
      </div>
    )
  }
}

ListControls.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
  sort: PropTypes.string,
}

export default ListControls
