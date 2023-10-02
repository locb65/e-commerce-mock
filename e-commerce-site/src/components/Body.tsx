import React from 'react'

interface BodyProps {
    name: string
}

const Body: React.FC<BodyProps> = ({name}) => {
  return (
    <div>
        <h1>Hello, {name}</h1>
    </div>
  )
}

export default Body