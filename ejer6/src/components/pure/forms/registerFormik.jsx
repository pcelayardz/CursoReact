import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Models
import { ROLES } from '../../../models/roles.enum';
import { User } from '../../../models/user.class';


const RegisterFormik = () => {

    let user = new User();

    //Campos iniciales que tendra el formulario, obviamente tienen que ser todo lo que tenga la clase usuario
    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '', // to confirm password
        role: ROLES.USER
    }

    //Lo que se requiere en cada campo del formulario.
    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, 'Username too short')
                .max(12, 'Username too long')
                .required('Username is required'),
            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
            role: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User / Admin')
                .required('Role is required'),
            password: Yup.string()
                .min(8, 'Password too short')
                .required('Password is required'),
            confirm: Yup.string()
                //When: Lo que recibe entre parentesis es la opcion o condicion
                .when("password", {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")],
                        '¡Passwords must match!'
                    )
                }).required('You must confirm the password')
        }
    )


    const submit = (values) => {
        alert('Register user')
    }


    return (
        <div>
            <h4 style={{fontSize:'30px', paddingTop:'50px'}}>Register Formik</h4>
            <Formik
                initialValues={initialValues}
                // *** Yup Validation Schema ***
                validationSchema={registerSchema}
                // ** onSubmit Event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2))
                }}
            >

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                    <Form>
                        <label htmlFor="username" style={{fontSize:'15px'}}>Username</label>
                        <Field id="username" type="text" name="username" placeholder="Your username" 
                            style={{padding:'10px', borderRadius:'5px', marginRight:'50px', marginLeft:'10px'}}
                        />
                        {errors.username && touched.username &&(<ErrorMessage name="username" component='div'></ErrorMessage>)}

                        <label htmlFor="email" style={{fontSize:'15px'}}>Email</label>
                        <Field id="email" type="email" name="email" placeholder="example@email.com" 
                             style={{padding:'10px', borderRadius:'5px', marginRight:'10px', marginLeft:'10px'}}
                        />

                        {/* Email Errors */}
                        {
                            errors.email && touched.email &&
                            (<ErrorMessage name="email" component='div'></ErrorMessage>)
                        }
                        <br></br>
                        <label htmlFor="password" style={{fontSize:'15px'}}>Password</label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="password"
                            type='password'
                            style={{padding:'10px', borderRadius:'5px', marginRight:'95px', marginLeft:'10px', marginTop:'10px'}}
                        />
                        {/* Password Errors */}
                        {
                            errors.password && touched.password &&
                            (<ErrorMessage name="password" component='div'></ErrorMessage>)
                        }

                        <Field
                            id="confirm"
                            name="Level"
                            placeholder="confirm passsword"
                            type='password'
                            style={{padding:'10px', borderRadius:'5px', marginRight:'10px', marginLeft:'10px'}}
                        />
                        {/* Confirm Password Errors */}
                        {
                            errors.confirm && touched.confirm &&
                            (<ErrorMessage name="confirm" component='div'></ErrorMessage>)
                        }
                        <br></br>
                        <button type="submit" style={{ padding: '5px 10px 5px 10px', backgroundColor: 'white', borderRadius: '5px', marginTop:'10px' }}>Register Account</button>
                        {isSubmitting ? (<p>Sending your credentials...</p>) : null}

                    </Form>
                )
                }

            </Formik>

        </div>
    );
}

export default RegisterFormik;
