import { useEffect, useState } from 'react'
import { ajaxService } from '../services/ajaxService'
import { BlogForm } from './BlogForm/BlogForm'
import { Link, useParams } from 'react-router-dom'
export function EditBlog(props) {
    const params = useParams()
    const [blog, setBlog] = useState(null)

    useEffect(() => {
        ajaxService(`/blogs/${params.id}`).then((data) => {
            setBlog(data)
        })
    }, [])

    return (
        blog && 
        <BlogForm
            blogId={blog.id}
            defaultTitle={blog.title}
            defaultDescription={blog.description}
            submitTitle="Сохранить изменения"
            onSubmitForm={({ title, description }) => {
                ajaxService(`/blogs/${blog.id}`, {
                    method: 'PUT',
                    body: JSON.stringify({ title, description }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
            }}
        />
    )
}
