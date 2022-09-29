import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import LoginPage from './pages/auth/LoginPage';
import HomePage from './pages/home/HomePage'
import { useEffect } from 'react';
import './App.css';
import RegisterPage from './pages/auth/RegisterPage';
import TaskPage from './pages/tasks/TaskPage';

function App() {
  let logged = false;

  useEffect(() => {
        logged = localStorage.getItem('credentials');
        console.log('User Logged?', logged)
  }, [])
  return (
    <Router>
      <Routes>

        {/* Redirections to protect our routes 
        <Route path='/' element={logged ?<Navigate replace to='/home' />: <Navigate replace to='/login' /> } />*/}
        <Route path='/' element={<HomePage/>} />
        {/* Login Route */}
        <Route path='/login' element={< LoginPage />} >
          {
            logged ?
                  () => {
                    return (<Navigate replace to='/tasks' />)
                  }
                  :
                  () => {
                    return (<Navigate replace to='/login' />)
                  }
          }
        </Route>
        
        {/* Register Route */}
        <Route exact path='/register' element={< RegisterPage/>} />
        {/* Task page*/}
        <Route exact path='/tasks' element={<TaskPage/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
