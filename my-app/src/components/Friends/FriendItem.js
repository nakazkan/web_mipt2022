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
                <div className="friend">
                    {user.user.username}
                    <img className="image" src={user.image} alt="user_photo" />
                </div>
            </> 
        )
    )
}
