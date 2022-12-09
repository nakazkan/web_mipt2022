import { ajaxAuthService } from '../../services/ajaxService'

export function useRegistration({
    login,
    password,
    firstName,
    lastName,
    setError,
    email,
    handleLogin,
}) {
    const handleRegister = () => {
        if (!login) {
            setError('Введите логин')
            return
        }
        if (!password) {
            setError('Введите пароль')
            return
        }
        if (!email) {
            setError('Введите почту')
            return
        }
        if (!firstName) {
            setError('Введите имя')
            return
        }
        if (!lastName) {
            setError('Введите фамилию')
            return
        }

        ajaxAuthService(`/customers/`, {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    username: login,
                    email: email,
                    password: password,
                    first_name: firstName,
                    last_name: lastName,
                }
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        setTimeout(() => {
            handleLogin()
        }, 1000)
    }

    return { handleRegister }
}
