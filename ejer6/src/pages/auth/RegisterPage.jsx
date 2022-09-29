import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterFormik from '../../components/pure/forms/registerFormik';

const RegisterPage = () => {
    //Para obtener el historico de rutas
    const history = useNavigate();

    const navigate = (path) => {
        history(path);
    }

    return (
        <div style={{ backgroundColor: 'pink' }}>
            <div style={{ display: 'flex', backgroundColor: 'pink' }} >
                <button onClick={() => navigate('/')} style={{ marginLeft: 'auto', padding: '5px 10px 5px 10px', backgroundColor: 'white', borderRadius: '5px' }}>
                    Home
                </button>

                <button onClick={() => navigate('/Login')} style={{ padding: '5px 10px 5px 10px', backgroundColor: 'white', borderRadius: '5px' }}>
                    Login
                </button>
            </div>
            <div >
                <h1 style={{ textAlign: 'center', fontFamily: 'monospace', backgroundColor: 'pink' }}>Register Page</h1>
            </div>
            <div style={{ backgroundColor: '#BBA1E3', textAlign: 'center', fontFamily: 'monospace', height: '700px' }}>
                <RegisterFormik></RegisterFormik>
            </div>

        </div>
    );
}

export default RegisterPage;
