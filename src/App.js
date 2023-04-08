import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main'
import { Friends } from './components/Friends'
import { User } from './components/User'
import { WriteBlog } from './components/WriteBlog'
import { Blog } from './components/Blog';
import { Settings } from './components/Settings';
import { Profile } from './components/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path='' element={<Main/>}></Route>
        <Route path='/friends' element={<Friends/>}></Route>
        <Route path='/user' element={<User/>}></Route>
        <Route path='/write-blog' element={<WriteBlog/>}></Route>
        <Route path='/settings' element={<Settings/>}></Route>
        <Route path='/Profile' element={<Profile/>}></Route>
        <Route path='/blog/:id' element={<Blog />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;