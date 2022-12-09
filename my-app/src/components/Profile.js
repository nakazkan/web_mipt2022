import { useEffect, useState } from 'react'
import { ajaxService } from '../services/ajaxService'
import { UserItem } from './User/UserItem'

export function Profile() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        ajaxService(`/customers/1/`).then((data) => {
            setUser(data)
        })
    }, [])

    return (
        user && (
            <UserItem
                id={user.id}
                name={user.user.first_name}
                lastname={user.user.last_name}
            />
        )
    )
}
