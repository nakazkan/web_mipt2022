import './App.css'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Friends } from './components/Friends/Friends'
import { User } from './components/User/User'
import { WriteBlog } from './components/WriteBlog'
import { Settings } from './components/Settings/Settings'
import { Profile } from './components/Profile'
import { EditBlog } from './components/EditBlog'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="" element={<Main />}></Route>
                <Route path="/friends" element={<Friends />}></Route>
                <Route path="/user/:id" element={<User />}></Route>
                <Route path="/write-blog" element={<WriteBlog />}></Route>
                <Route path="/settings" element={<Settings />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/edit-blog/:id" element={<EditBlog />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
