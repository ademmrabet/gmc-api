import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../App.css'

const UserCard = ({ user }) => {
    return (
        <div className='card'>
            <Card className='cardd' bg='light' border='primary'>
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>
                        {user.email}
                    </Card.Text>
                    <Card.Text>
                        {user.phone}
                    </Card.Text>
                    <Link className='link' to={`/user/${user.id}`} >
                        <Button variant="primary">Infos</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default UserCard