import { useState } from 'react'
import { useLogin } from './useLogin'
import { useRegistration } from './useRegistration'
import './Login.css'

export function Login() {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [error, setError] = useState('')
    const [isLoginForm, setIsLoginForm] = useState(true)
    const { handleLogin } = useLogin({ login, password, setError })
    const { handleRegister } = useRegistration({
        login,
        password,
        firstName,
        lastName,
        email,
        setError,
        handleLogin,
    })

    const handleChangePassword = (event) => {
        setError('')
        setPassword(event.target.value)
    }

    const handleChangeLogin = (event) => {
        setError('')
        setLogin(event.target.value)
    }

    const handleChangeEmail = (event) => {
        setError('')
        setEmail(event.target.value)
    }

    const handleChangeFirstName = (event) => {
        setError('')
        setFirstName(event.target.value)
    }

    const handleChangeLastName = (event) => {
        setError('')
        setLastName(event.target.value)
    }

    const handleChangeLoginType = () => {
        setIsLoginForm(!isLoginForm)
    }

    return (
        <aside className="login_aside">
            <h2>{isLoginForm ? 'Войти' : 'Зарегистрироваться'}</h2>
            <div className="login_field">
                <label>Логин</label>
                <input
                    value={login}
                    onChange={handleChangeLogin}
                    className="login_input"
                />
            </div>
            <div className="login_field">
                <label>Пароль</label>
                <input
                    value={password}
                    type="password"
                    onChange={handleChangePassword}
                    className="login_input"
                />
            </div>

            {!isLoginForm && (
                <>
                    <div className="login_field">
                        <label>Email</label>
                        <input
                            value={email}
                            onChange={handleChangeEmail}
                            className="login_input"
                        />
                    </div>

                    <div className="login_field">
                        <label>Имя</label>
                        <input
                            value={firstName}
                            onChange={handleChangeFirstName}
                            className="login_input"
                        />
                    </div>

                    <div className="login_field">
                        <label>Фамилия</label>
                        <input
                            value={lastName}
                            onChange={handleChangeLastName}
                            className="login_input"
                        />
                    </div>
                </>
            )}
            <div className="login-error">{error}</div>
            <button
                className="auth_button"
                onClick={isLoginForm ? handleLogin : handleRegister}
            >
                {isLoginForm ? 'Войти' : 'Зарегистрироваться'}
            </button>
            <button className="auth_button" onClick={handleChangeLoginType}>
                {isLoginForm ? 'Регистрация' : 'Авторизация'}
            </button>
        </aside>
    )
}
