import React from 'react';
import { LEVELS } from '../../../models/levels.enum';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Task } from '../../../models/task.class';


const TaskFormik = ({ add }) => {

    /**
     * Campos iniciales del formulario para añadir tareas
     */
    const initialValues = {
        name: '',
        description: '',
        completed: false,
        level: LEVELS.NORMAL
    }

    const taskSchema = Yup.object().shape(
        {
            name: Yup.string().min(5, 'Name to short').required('Task name is required'),
            description: Yup.string().min(10, 'Description too short').max(100, 'Description too long').required('Description is requires')
        }
    )

    return (
        <div>
            <h4 style={{backgroundColor:"#E3A1CE", borderRadius:"50px"}}>Task Formik</h4>
            <Formik
                initialValues={initialValues}
                // *** Yup Validation Schema ***
                validationSchema={taskSchema}
                // ** onSubmit Event
                onSubmit={(values) => {
                    console.log("It is working!");
                    const newTask = new Task(
                        values.name,
                        values.description,
                        values.completed,
                        values.level
                    );
                    //Llamamos al padre a traves de la funcion para que añada la nueva funcion
                    add(newTask);
                }}
            >
                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                    <Form>
                        <Field  className='form-control form-control-lg' style={{marginBottom:"10px"}} id="name" type="text" name="name" placeholder="Name task" />
                        {errors.name && touched.name &&
                            (<ErrorMessage name="name" component='div'></ErrorMessage>)
                        }
                        <Field className='form-control form-control-lg'style={{marginBottom:"10px"}} id="desccription" name="description" placeholder="Task description" />
                        {
                            errors &&
                            (<ErrorMessage name="description" component='div'></ErrorMessage>)
                        }
                        <Field
                            as="select"
                            name="level"
                            className='form-control form-control-lg'
                            style={{marginBottom:"10px", textAlign:"center"}}
                        >
                            <option value={LEVELS.NORMAL}>Normal</option>
                            <option value={LEVELS.URGENT}>Urgent</option>
                            <option value={LEVELS.BLOCKING}>Blocking</option>
                        </Field>

                        <button className='btn btn-success btn-lg ms-2' style={{marginBottom:"10px"}} type="submit">Submit</button>

                    </Form>
                )
                }

            </Formik>
        </div>
    );
}

export default TaskFormik;
