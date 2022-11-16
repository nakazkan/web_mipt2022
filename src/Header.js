export function Header() {
    return (
        <header>
            <a href="index.html" class="logo"></a>
            <div className="main_header">
                <a href="index.html" className="header_element">
                    <button> Главная</button>
                </a>
                <a href="friends.html" className="header_element">
                    <button>Друзья</button>
                </a>
                <a href="" className="header_element">
                    <button>Написать в блог</button>
                </a>
                <a href="" className="header_element" id="user">
                    <button>Имя пользоваеля</button>
                </a>
            </div>
        </header>
    )
}
