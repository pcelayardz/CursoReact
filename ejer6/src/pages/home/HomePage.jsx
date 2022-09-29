import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    //Para obtener el historico de rutas
    const history = useNavigate();

    const navigate = (path) => {
        history(path);
    }


    return (
        <div style={{ backgroundColor: 'pink' }}>
            <div style={{ display: 'flex', backgroundColor: 'pink' }} >
                <button onClick={() => navigate('/Login')} style={{ marginLeft: 'auto', padding: '5px 10px 5px 10px', backgroundColor: 'white', borderRadius: '5px' }}>
                    Login
                </button>

                <button onClick={() => navigate('/Register')} style={{ padding: '5px 10px 5px 10px', backgroundColor: 'white', borderRadius: '5px' }}>
                    Register
                </button>
            </div>
            <div>
                <h1 style={{ textAlign: 'center', fontFamily: 'monospace', backgroundColor: 'pink' }}>Home Page</h1>
            </div>
            <div style={{ backgroundColor: '#BBA1E3', textAlign: 'center', fontFamily: 'monospace', height: '700px' }}>
                <h3 style={{ margin: '20px' }}>Login or Register to see your tasks</h3>
                <img src='https://blog.trello.com/hs-fs/7_Ways_To_Track_Important_Tasks_In_Trello.png' alt=''></img>
            </div>

        </div>

    );
}

export default HomePage;
