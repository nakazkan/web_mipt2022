import { useEffect, useState } from 'react'
import { BlogItem } from './BlogItem'
import { ajaxService } from '../services/ajaxService'

export function Main() {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        ajaxService('/blogs').then((data) => {
            setBlogs(data)
        })
    }, [])

    return (
        <aside className="blog_aside">
            {blogs.map((blog) => (
                <BlogItem
                    key={blog.id}
                    id={blog.id}
                    title={blog.title}
                    description={blog.description}
                />
            ))}
        </aside>
    )
}
