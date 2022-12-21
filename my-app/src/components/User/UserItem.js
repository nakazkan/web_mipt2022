import './User.css'
import { Link } from 'react-router-dom'

export function UserItem(props) {
    const { id, name, username, lastname, image } = props

    return (
        <aside className="user" key={id}>
            <img className="user_item photo" src={image} alt="user_photo" />
            <div className="user_item">Ник : {username}</div>
            <div className="user_item">Имя : {name}</div>
            <div className="user_item">Фамилия : {lastname}</div>
            <div className="user_item">id пользователя : {id}</div>
            <hr className="line"></hr>
            <Link to={`/blog/${id}`} className="to_blog">
                Перейти к блогам
            </Link>
        </aside>
    )
}
