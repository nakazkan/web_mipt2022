import { ajaxService } from '../services/ajaxService'
import { BlogForm } from './BlogForm/BlogForm'

export function WriteBlog() {
    return (
        <BlogForm
            defaultTitle=''
            defaultDescription=''
            submitTitle='Опубликовать пост'
            onSubmitForm={({ title, description }) => {
                ajaxService(`/blogs`, {
                    method: 'POST',
                    body: JSON.stringify({ title, description }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
            }}
        />
    )
}
