import React from 'react'

function Pagination({handleNext, handlePrev, page}) {
    return (
      <div>
          <button onClick={handlePrev}>Prev</button>
          <p>{page}</p>
          <button onClick={handleNext}>Next</button>
      </div>
    )
  }

export default Pagination