import React from 'react'
import {Formik,Form} from 'formik'
const MForm=(props)=>{
    return(
        <Formik  
        initialValues={props.initialValues}
        onSubmit={(values) => {
          console.log(values)
        }}>
            <Form>
            {props.children} 
            </Form>
        </Formik>
    )
}
export default MForm;