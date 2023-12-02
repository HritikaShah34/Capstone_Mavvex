import React from 'react'
import { Link, redirect } from 'react-router-dom'

export default function Thankyou(props) {
  return (
    <div className='text-center'>
        <h1>Thank You </h1>
        <Link className='btn btn-primary' to="/">Go Back</Link>
    </div>
  )
}
