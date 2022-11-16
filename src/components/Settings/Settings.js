import './Settings.css'
import { useState } from 'react'


// Тут непонятно куда это записывать(авторизации же нет), поэтому она пока выглядит вот так
export function Settings() {
    const [name, setName] = useState('')
    const [lastname, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const [nameError, setNameError] = useState('')
    const [lastnameError, setLastNameError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [emailError, setEmailError] = useState('')

    const handleChangeName = (event) => {
        if (event.target.value.length <= 30) {
            setName(event.target.value)
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
        if (name === '') {
            setNameError('Имя не должно быть пустым')
            event.preventDefault()
        } else {
            // onSubmitForm({ name })
        }
    }
    const onSubmitLastName = (event) => {
        if (name === '') {
            setLastNameError('Фамилия не должно быть пустой')
            event.preventDefault()
        } else {
            // onSubmitForm({ name })
        }
    }
    const onSubmitPassword = (event) => {}
    const onSubmitEmail = (event) => {}

    return (
        <aside className="settings-aside">
            <div>Изменить имя</div>

            <form>
                <input
                    // value={''}
                    className="settings_input"
                    placeholder="Ваше имя"
                     onChange={handleChangeName}
                ></input>
                <button className="settings_button" onClick={onSubmitName}>
                    Сохранить
                </button>
                <div className="settings_error">{nameError}</div>
            </form>

            <div>Изменить фамилию</div>
            <form>
                <input
                    // value={''}
                    className="settings_input"
                    placeholder="Ваша новая фамилия"
                     onChange={handleChangeLastName}
                ></input>
                <button className="settings_button" onClick={onSubmitLastName}>
                    Сохранить
                </button>
                <div className="settings_error">{lastnameError}</div>
            </form>

            <div>Изменить пароль</div>
            <form>
                <input
                    // value={''}
                    className="settings_input"
                    placeholder="Ваше новый пароль"
                    // onChange={handleChangeTitle}
                ></input>
                <button className="settings_button" onClick={onSubmitPassword}>
                    Сохранить
                </button>
                <div className="settings_error">{passwordError}</div>
            </form>

            <div>Изменить почту</div>
            <form>
                <input
                    // value={''}
                    className="settings_input"
                    placeholder="Ваше новую почту"
                    // onChange={handleChangeTitle}
                ></input>
                <button className="settings_button" onClick={onSubmitEmail}>
                    Сохранить
                </button>
                <div className="settings_error">{emailError}</div>
            </form>
        </aside>
    )
}
