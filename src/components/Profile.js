import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ajaxService } from '../services/ajaxService'
import { UserItem } from './User/UserItem'

export function Profile() {
 
    const [user, setUser] = useState(null)

    useEffect(() => {
        ajaxService(`/users/1`).then((data) => {
            setUser(data)
        })
    }, [])

    return (
        user && (
            <UserItem id={user.id} name={user.name} lastname={user.lastname} />
        )
    )
}
