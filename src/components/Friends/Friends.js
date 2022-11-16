import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ajaxService } from '../../services/ajaxService'
import './Friends.css'

export function Friends() {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        ajaxService('/friends').then((data) => {
            setFriends(data)
        })
    }, [])

    return (
        <aside className="friends_aside">
            {friends.map((friends) => (
                <div className="friends_aside">
                    <Link to={`/user/${friends.id}`} className="friend">
                        {friends.name} {friends.lastname}
                    </Link>
                </div>
            ))}
        </aside>
    )
}
