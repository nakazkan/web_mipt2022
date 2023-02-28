import './Settings.css'
import { useEffect, useState } from 'react'
import { ajaxService } from '../../services/ajaxService'
import { isLogin } from '../../utils/isLogin'

export function Settings() {
    const [user, setUser] = useState(null)
    useEffect(() => {
        if (isLogin()) {
            ajaxService('/user/current').then((data) => {
                setUser(data)
            })
        }
    }, [])

    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const [nameError, setNameError] = useState('')
    const [lastnameError, setLastNameError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [emailError, setEmailError] = useState('')

    const handleChangeName = (event) => {
        if (event.target.value.length <= 30) {
            setFirstName(event.target.value)
            setNameError('')
        } else {
            setNameError('Имя не должно быть длиннее 30 символов')
        }
    }

    const handleChangeLastName = (event) => {
        if (event.target.value.length <= 30) {
            setLastName(event.target.value)
            setLastNameError('')
        } else {
            setLastNameError('Фамилия не должно быть длиннее 30 символов')
        }
    }
    const handleChangePassword = () => {}
    const handleChangeEmail = () => {}

    const onSubmitName = (event) => {
        if (first_name === '') {
            setNameError('Имя не должно быть пустым')
            event.preventDefault()
        } else if (event.target.value.length > 30) {
            event.preventDefault()
        } else {
            ajaxService(`/customers/${user && user.id}/`, {
                method: 'PATCH',
                body: JSON.stringify({
                    user: {
                        first_name: first_name,
                    },
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        }
        event.preventDefault()
    }
    const onSubmitLastName = (event) => {
        if (last_name === '') {
            setLastNameError('Фамилия не должно быть пустой')
            event.preventDefault()
        } else if (event.target.value.length > 30) {
            event.preventDefault()
        } else {
            // onSubmitForm({ name })
        }
    }
    const onSubmitPassword = (event) => {}
    const onSubmitEmail = (event) => {}

    const onSubmit = (event) => {
        ajaxService(`/customers/${user && user.id}/`, {
            method: 'PUT',
            body: JSON.stringify({
                user: {
                    first_name: first_name,
                },
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }

    return (
        <aside className="settings-aside">
            <form id="upload-container">
                <div>
                    <input id="file-input" type="file" name="file" multiple />
                    <label for="file-input">Выберите файл </label>
                    <button className="" type="submit" onClick={onSubmit}>
                        Сохранить фото
                    </button>
                </div>
            </form>
        </aside>

        // <aside className="settings-aside">
        //     <div>Изменить имя</div>

        //     <form>
        //         <input
        //             value={first_name}
        //             className="settings_input"
        //             placeholder="Ваше имя"
        //             onChange={handleChangeName}
        //         ></input>
        //         <button className="settings_button" onClick={onSubmitName}>
        //             Сохранить
        //         </button>
        //         <div className="settings_error">{nameError}</div>
        //     </form>

        //     <div>Изменить фамилию</div>
        //     <form>
        //         <input
        //             value={last_name}
        //             className="settings_input"
        //             placeholder="Ваша новая фамилия"
        //             onChange={handleChangeLastName}
        //         ></input>
        //         <button className="settings_button" onClick={onSubmitLastName}>
        //             Сохранить
        //         </button>
        //         <div className="settings_error">{lastnameError}</div>
        //     </form>

        //     <div>Изменить пароль</div>
        //     <form>
        //         <input
        //             // value={''}
        //             className="settings_input"
        //             placeholder="Ваше новый пароль"
        //             // onChange={handleChangeTitle}
        //         ></input>
        //         <button className="settings_button" onClick={onSubmitPassword}>
        //             Сохранить
        //         </button>
        //         <div className="settings_error">{passwordError}</div>
        //     </form>

        //     <div>Изменить почту</div>
        //     <form>
        //         <input
        //             // value={''}
        //             className="settings_input"
        //             placeholder="Ваше новую почту"
        //             // onChange={handleChangeTitle}
        //         ></input>
        //         <button className="settings_button" onClick={onSubmitEmail}>
        //             Сохранить
        //         </button>
        //         <div className="settings_error">{emailError}</div>
        //     </form>
        // </aside>
    )
}
