import React from 'react'
import PropTypes from 'prop-types'
import List from './List'
import ListControls from './ListControls'
import Paging from './Paging'
import styles from './SearchableList.module.scss'

const SearchableList = (props) => (
  <div className={styles.root}>
    <ListControls
      disabled={!props.loaded}
      onSearchChange={props.onSearchChange}
      onSortChange={props.onSortChange}
      sort={props.sort}
    />
    <Paging
      count={props.items.length}
      total={props.count}
      page={props.page}
      hasPrev={props.hasPrev}
      hasNext={props.hasNext}
      onNextPage={props.onNextPage}
      onPrevPage={props.onPrevPage}
    />
    <List
      items={props.items}
      loading={!props.loaded}
    />
  </div>
)

SearchableList.propTypes = {
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  loaded: PropTypes.bool.isRequired,
  hasNext: PropTypes.bool,
  hasPrev: PropTypes.bool,
  onNextPage: PropTypes.func.isRequired,
  onPrevPage: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
  sort: PropTypes.string,
}

export default SearchableList
