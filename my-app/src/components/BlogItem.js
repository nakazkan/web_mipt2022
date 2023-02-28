import { Link } from 'react-router-dom'
import { ajaxService } from '../services/ajaxService'
import { isLogin } from '../utils/isLogin'
import { useEffect, useState } from 'react'

export function BlogItem(props) {
    const { id, title, description, user_id } = props

    const deletePost = () => {
        window.location.reload()
        ajaxService(`/blogs/${id}/`, {
            method: 'DELETE',
        })
    }

    const [user, setUser] = useState(null)
    useEffect(() => {
        if (isLogin()) {
            ajaxService('/user/current').then((data) => {
                setUser(data)
            })
        }
    }, [])

    return [
        <div className="blog_item_aside">
            {user && user_id === user.id && (
                <div className="deleteOrEditBlog">
                    <Link to={`/edit-blog/${id}`} className="edit_blog">
                        Редактировать пост
                    </Link>
                    <div className="dropdown">
                        <div className="dropdown-content">
                            <button
                                className="edit_blog delete_confirm"
                                id="delete"
                                onClick={deletePost}
                            >
                                Да
                            </button>
                        </div>
                        <div className="edit_blog" id="delete">
                            Удалить Пост
                        </div>
                    </div>
                </div>
            )}
            <section className="blog">
                <h1>{title}</h1>
                <p>{description}</p>
            </section>
        </div>,
    ]
}
