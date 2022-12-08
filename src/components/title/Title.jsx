import React from 'react'

export const Title = ({title , subtitle}) => {
  return (
    <>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>{subtitle}</span>
    </>
  )
}
