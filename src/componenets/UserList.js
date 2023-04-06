import React from 'react'
import UserCard from './UserCard'
import '../App.css'

const UserList = ({ data}) => {
    return (
        <div className='list'>
         {
          data && React.Children.toArray(data.map(user => <UserCard user={user} />))
         }
           
        </div>
    )
}

export default UserList