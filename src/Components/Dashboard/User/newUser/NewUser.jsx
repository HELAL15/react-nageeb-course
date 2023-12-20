import React from 'react'
import Form from '../../../Website/Form/Form'

export default function NewUser() {
  return (
    <div className='container'>
      <Form
        button='create'
        endPoint='user/create'
        navigate='dashboard/users'
        />
    </div>
  )
}
