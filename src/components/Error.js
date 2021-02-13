import React from 'react'

const Error = () => {
  console.log('Hello')
  return (
    <div className="error-wrapper">
      <h1 className="error">Oops! Something went wrong! Please try again later.</h1>
      <img className="error-image" src="https://media.giphy.com/media/wSSooF0fJM97W/giphy.gif"/>
    </div>
  )
}

export default Error;
