import { Link } from 'react-router-dom'
import { ajaxService } from '../services/ajaxService'


export function BlogItem(props) {
    const { id, title, description } = props

    const deletePost = () => {
        window.location.reload()
        ajaxService(`/blogs/${id}`, {
            method: 'DELETE',
        })
    }

    return [
        <div className="blog_item_aside">
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

            <section className="blog">
                <h1>{title}</h1>
                <p>{description}</p>
            </section>
        </div>,
    ]
}
