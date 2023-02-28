import { useState } from 'react'

export function BlogForm(props) {
    const { onSubmitForm, submitTitle, defaultTitle, defaultDescription } =
        props
    const [title, setTitle] = useState(defaultTitle)
    const [description, setDescription] = useState(defaultDescription)
    const [titleError, setTitleError] = useState('')
    const [descriptionError, setDescriptionError] = useState('')

    const onSubmit = (event) => {
        if (title === '') {
            setTitleError('Название не должно быть пустым')
            event.preventDefault()
        } else if (description === '') {
            setDescriptionError('Содержание не должно быть пустым')
            event.preventDefault()
        } else {
            onSubmitForm({ title, description })
        }
    }

    const handleChangeTitle = (event) => {
        if (event.target.value.length <= 100) {
            setTitle(event.target.value)
            setTitleError('')
        } else {
            setTitleError('Название не должно быть длиннее 100 символов')
        }
    }

    const handleChangeDescription = (event) => {
        setDescription(event.target.value)
    }

    return (
        <aside className="create_blog_aside">
            <form>
                <div>
                    <input
                        value={title}
                        className="title"
                        placeholder="Заголовок"
                        onChange={handleChangeTitle}
                    ></input>
                    <div className="titleError">
                        {titleError || descriptionError}
                    </div>
                    <textarea
                        value={description}
                        type="textarea"
                        className="description"
                        placeholder="Текст"
                        onChange={handleChangeDescription}
                    ></textarea>
                </div>
                <button
                    className="create_blog"
                    type="submit"
                    onClick={onSubmit}
                >
                    {submitTitle}
                </button>
            </form>
        </aside>
    )
}
