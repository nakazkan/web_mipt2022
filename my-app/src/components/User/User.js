import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ajaxService } from '../../services/ajaxService'
import { UserItem } from './UserItem'

export function User() {
    const params = useParams()
    const [user, setUser] = useState(null)

    useEffect(() => {
        ajaxService(`/customers/${params.id}/`).then((data) => {
            setUser(data)
        })
    }, [])

    return (
        user && (
            <UserItem
                key={user.id}
                id={user.id}
                name={user.user.first_name}
                lastname={user.user.last_name}
                username={user.user.username}
                image={user.image}
            />
        )
    )
}
