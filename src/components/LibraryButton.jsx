import React from 'react'

function LibraryButton({ buttonLabel, onClickButton }) {
  return (
    <span>
      <button onClick={onClickButton}>{buttonLabel}</button>
    </span>
  )
}

export default LibraryButton