import { useEffect, useState } from 'react'
import { BlogItem } from './BlogItem'
import { ajaxService } from '../services/ajaxService'
import { useParams } from 'react-router-dom'
export function Main() {
    const params = useParams()
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        ajaxService('/blogs/').then((data) => {
            setBlogs(data)
        })
    }, [])
    return (
        <aside className="blog_aside">
            {blogs
                .filter((blog) => blog.user == params.id)
                .map((blog) => (
                    <BlogItem
                        key={blog.id}
                        id={blog.id}
                        title={blog.title}
                        description={blog.description}
                        user_id={blog.user}
                    />
                ))}
        </aside>
    )
}
