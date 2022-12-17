import { useEffect, useState } from 'react'
import { ajaxService } from '../../services/ajaxService'
import './Friends'

export function FriendItem(props) {
    const { id } = props
    const [user, setUser] = useState([])

    useEffect(() => {
        ajaxService(`/customers/${id}/`).then((data) => {
            setUser(data)
        })
    }, [])

    return (
        user.user && (
            <>
                <img className="image" src={user.image} alt="user_photo" />
                <div className="text">
                    {user.user.username +
                        ' ' +
                        user.user.first_name +
                        ' ' +
                        user.user.last_name}
                </div>
            </>
        )
    )
}
