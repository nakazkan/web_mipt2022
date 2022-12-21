import { Link } from 'react-router-dom'
import { isLogin } from '../utils/isLogin'
import { useEffect, useState } from 'react'
import { ajaxService } from '../services/ajaxService'

export function Header() {
    function onLogout() {
        window.localStorage.setItem('ACCESS', '')
        window.localStorage.setItem('REFRESH', '')
        window.location.href = '/login'
    }

    const [user, setUser] = useState(null)
    useEffect(() => {
        if (isLogin()) {
            ajaxService('/user/current').then((data) => {
                setUser(data)
            })
        }
    }, [])

    return (
        <header>
            {isLogin() ? (
                <Link to={`/blog/${user && user.id}`} className="logo"></Link>
            ) : (
                <Link to="/login" className="logo"></Link>
            )}
            <div className="main_header">
                <Link
                    to={`/blog/${user && user.id}`}
                    className="header_element"
                >
                    <button>Главная</button>
                </Link>
                {isLogin() && (
                    <>
                        <Link to="/friends" className="header_element">
                            <button>Друзья</button>
                        </Link>

                        <Link to="/write-blog" className="header_element">
                            <button>Написать новый блог</button>
                        </Link>
                    </>
                )}
                {isLogin() ? (
                    <div className="dropdown">
                        <Link
                            to={`/user/${user && user.id}`}
                            className="header_element"
                            id="user"
                        >
                            <button>
                                Профиль {user && user.user.username}
                            </button>
                        </Link>
                        <div className="dropdown-content">
                            {/* <Link to="/settings">Настройки</Link>
                            <hr className="line"></hr> */}
                            <Link to="/login" onClick={onLogout}>
                                Выйти
                            </Link>
                        </div>
                    </div>
                ) : (
                    <Link to="/login" className="header_element" id="user">
                        <button>Войти</button>
                    </Link>
                )}
            </div>
        </header>
    )
}
