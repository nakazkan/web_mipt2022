import { useEffect, useState } from 'react'
import { ajaxService } from '../services/ajaxService'
import { BlogForm } from './BlogForm/BlogForm'
import { useParams } from 'react-router-dom'
import { isLogin } from '../utils/isLogin'

export function EditBlog(props) {
    const params = useParams()
    const [blog, setBlog] = useState(null)

    useEffect(() => {
        ajaxService(`/blogs/${params.id}/`).then((data) => {
            setBlog(data)
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

    return (
        <>
            {isLogin() && user && blog && user.id == blog.user && (
                <BlogForm
                    submitTitle="Сохранить изменения"
                    blogId={blog.id}
                    defaultTitle={blog.title}
                    defaultDescription={blog.description}
                    onSubmitForm={({ title, description }) => {
                        ajaxService(`/blogs/${blog.id}/`, {
                            method: 'PUT',
                            body: JSON.stringify({ title, description }),
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        })
                    }}
                />
            )}
        </>
    )
}
