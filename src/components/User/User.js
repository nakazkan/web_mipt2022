import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ajaxService } from '../../services/ajaxService'
import { UserItem } from './UserItem'

export function User() {
    const params = useParams()
    const [user, setUser] = useState(null)

    useEffect(() => {
        ajaxService(`/users/${params.id}`).then((data) => {
            setUser(data)
        })
    }, [])

    return (
        user && (
            <UserItem id={user.id} name={user.name} lastname={user.lastname} />
        )
    )
}
