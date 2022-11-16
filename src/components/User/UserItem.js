import { useState } from 'react'
import './User.css'
export function UserItem(props) {
    const { id, name, lastname } = props

    return (
        <div className="user" key={id}>
            <div className="user_item">Уникальный id:{id}</div>
            <div className="user_item">Имя: {name}</div>
            <div className="user_item"> Фамилия: {lastname}</div>
        </div>
    )
}
