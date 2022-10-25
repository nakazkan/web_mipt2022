import {Link} from 'react-router-dom'

export function Header(){
return(
    
    <header>
        <Link to='' class="logo"></Link>
            <div className="main_header">
                <Link to='' className="header_element"><button > Главная</button></Link>
                <Link to='/friends' className="header_element"><button>Друзья</button></Link>
                <Link to='/write-blog' className="header_element"><button>Написать в блог</button></Link>
                
                <div className="dropdown">
                    <Link to='/user' className="header_element"  id="user"><button>Имя пользоваеля</button></Link>
                    <div class="dropdown-content">
                        <Link to='/settings'>Настройки</Link>
                        <Link to='/profile'>Профиль</Link>
                    </div>
                </div>
            </div>
    </header>
);
}