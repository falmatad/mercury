import React from 'react'
import PropTypes from 'prop-types'

const Paging = (props) => {
  const {
    count,
    total,
    page,
    onNextPage,
    onPrevPage,
    hasNext,
    hasPrev,
  } = props
  const pageTotal = Math.ceil(total / 10)
  return (
    <div>
      items: {count} / {total}<br />
      pages: {page} / {pageTotal}
      { hasPrev && <button onClick={onPrevPage}>prev</button> }
      { hasNext && <button onClick={onNextPage}>next</button> }
    </div>
  )
}

Paging.propTypes = {
  count: PropTypes.number.isRequired,
  hasNext: PropTypes.bool,
  hasPrev: PropTypes.bool,
  onNextPage: PropTypes.func.isRequired,
  onPrevPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
}

export default Paging
