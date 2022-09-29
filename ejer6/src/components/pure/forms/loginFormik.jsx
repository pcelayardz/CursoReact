import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form , ErrorMessage } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
    {
        //Esto es para que sea si o si ese tipo de datos, un email de tipo email y es obligatorio
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().required('Password is required')
    }
);


const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    const history = useNavigate();

    return (
        <div>
            <h4 style={{fontSize:'30px', paddingTop:'50px'}}>Login Formik</h4>
            <Formik
                // *** Initial values that the form will take
                initialValues={initialCredentials}
                // *** Yup Validation Schema ***
                validationSchema={loginSchema}
                // ** onSubmit Event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                     // We save the data in the localstorage
                     await localStorage.setItem('credentials', values);
                    history('/tasks');
                }}
            >
                {/* We obtain props from Formik */}
                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                    <Form>
                        <label htmlFor="email" style={{fontSize:'15px'}}>Email</label>
                        <Field id="email" type="email" name="email" placeholder="example@email.com" style={{padding:'10px', borderRadius:'5px', marginRight:'50px', marginLeft:'10px'}}/>

                        {/* Email Errors */}
                        {
                            errors.email && touched.email &&
                            (
                                <ErrorMessage name="email" component='div'></ErrorMessage>
                            )
                        }

                        <label htmlFor="password" style={{fontSize:'15px'}}>Password</label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="password"
                            type='password'
                            style={{padding:'10px', borderRadius:'5px', marginRight:'10px', marginLeft:'10px'}}
                        />
                        {/* Password Errors */}
                        {
                            errors.password && touched.password &&
                            (
                                <ErrorMessage name="password" component='div'></ErrorMessage>
                            )
                        }
                        <button type="submit" style={{padding:'5px 10px 5px 10px', backgroundColor:'white', borderRadius:'5px'}}>Login</button>
                        {isSubmitting ? (<p>Login your credentials...</p>) : null}
                    </Form>
                )}

            </Formik>

        </div>
    );
}

export default LoginFormik;
