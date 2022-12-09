import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ajaxService } from '../../services/ajaxService'
import { FriendItem } from './FriendItem'
import { isLogin } from '../../utils/isLogin'
import './Friends.css'

export function Friends() {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        ajaxService('/friends/').then((data) => {
            setFriends(data)
        })
    }, [])

    const [user, setUser] = useState(null)
    useEffect(() => {
        if (isLogin()) {
            ajaxService('/user/current').then((data) => {
                setUser(data)
            })
        }
    }, [])

    const [users, setUsers] = useState()
    const [username, setUserName] = useState('')
    const [usernameError, setUserNameError] = useState('')

    const handleFriend = (event) => {
        if (event.target.value.length <= 30) {
            setUserName(event.target.value)
            setUserNameError('')
        } else {
            setUserNameError('Логин не должен быть длиннее 20 символов')
        }
    }
    const onSubmitFriend = (event) => {
        event.preventDefault()
        if (username === '') {
            setUserNameError('Логин не может быть пустым')
            event.preventDefault()
        } else if (event.target.value.length > 30) {
            event.preventDefault()
        } else {
            ajaxService('/customers/').then((data) => {
                setUsers(data)
            })
            var friend = users.filter((user) => username == user.user.username)
            if (friend.length == 0) {
                setUserNameError('Пользователь не найден')
                event.preventDefault()
            } else {
                ajaxService(`/friends/`, {
                    method: 'POST',
                    body: JSON.stringify({
                        userId: user.id,
                        friendId: friend[0].id,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                window.location.reload()
            }
        }
    }

    return (
        <aside className="friends_aside">
            <form>
                <input
                    value={username}
                    className="settings_input"
                    placeholder="Введите имя пользователя"
                    onChange={handleFriend}
                ></input>
                <button className="settings_button" onClick={onSubmitFriend}>
                    Добавить в друзья
                </button>
                <div className="settings_error">{usernameError}</div>
            </form>
            {user && (
                <div>
                    {friends
                        .filter((friend) => friend.userId == user.id)
                        .map((friend) => (
                            <div>
                                <Link
                                    to={`/user/${friend.friendId}`}
                                    className="friend"
                                >
                                    <FriendItem
                                        key={friend.id}
                                        id={friend.friendId}
                                    />
                                </Link>
                            </div>
                        ))}
                </div>
            )}
        </aside>
    )
}
