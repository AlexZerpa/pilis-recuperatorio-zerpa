import React from 'react'
import { useForm } from 'react-hook-form'
//import { useEffect } from "react";
import Swal from "sweetalert2";
import '../assets/css/App.css';

import { NavLink, useNavigate } from 'react-router-dom';


const Nuevo = () =>{
    const { register, handleSubmit, formState:{errors}} = useForm()

    const customSubmit = (data,e) => {
        console.log(data)
        //alert("Validacion exitosa!")
       Swal.fire({
        icon:'success',
        title:'Registro exitoso'
       })
       e.target.reset()
    }

    const Navigate = useNavigate();

    function handleDashboardClick(){
        Navigate('..')
    }

    return (
        <>
            <h2 className='h2'>Registro de Nuevo Usuario</h2>
            <form onSubmit={handleSubmit(customSubmit)} className='form-react'>
                <div className='form-group'>
                    <div className='form-control'>
                        <label>Apellido y Nombre</label>
                        <input type="text" {...register('ApellidoyNombre',{
                            required:true, maxLength:40})}/>
                        {errors.ApellidoyNombre?.type === 'required' && <small className='fail'>El campo no puede estar vacio</small>}
                        {errors.ApellidoyNombre?.type === 'maxLength' && <small className='fail'>El maximo de caracteres es 40</small>}    
                    </div>
                
                    <div className='form-control'>
                        <label>Edad</label>
                        <input type="number" {...register('edad',{
                            required:true,min:10, max:100})}/>
                        {errors.edad?.type === 'required' && <small className='fail'>El campo no puede estar vacio</small>}
                        {errors.edad?.type === 'min' && <small className='fail'>La edad minima es de 10 años</small>}
                        {errors.edad?.type === 'max' && <small className='fail'>La edad maxima es de 100 años</small>}
                    </div>
                    <div className='form-control'>
                        <label>Telefono</label>
                        <input type="number"
                        placeholder='3888-123456' 
                        {...register('telefono',{
                            required:true, maxLength:10})}/>
                            {errors.telefono?.type === 'required' && <small className='fail'>El campo "numero de telefono" no puede estar vacio</small>}
                            {errors.telefono?.type === 'maxLength' && <small className='fail'>El telefono no puede ser mayor a 10 caracteres</small>}
                    </div>

                    <div className='form-control'>
                        <label>Correo</label>
                        
                        <input type="text" 
                        placeholder="ejemplo@gmail.com"
                        {...register('correo',
                        {required:{value:true,
                            message:"El correo es Obligatorio"},
                        pattern:{
                            value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "El formato no es correcto"
                        }                  
                        })}/>
                        {errors.correo && <small className='fail'>{errors.correo.message}</small>}

                    </div>
                    <div className='form-control'>
                        <label>Contraseña</label>
                        <input type="password" 
                        placeholder='Contraseña'
                        {...register('password',{
                            required:{
                                value: true,
                                message: "El campo es requerido"
                            },
                            minLength:{
                                value: 8,
                                message: "La contraseña debe tener al menos 8 caracteres"
                            }
                        })}/>
                        {errors.password && <small className='fail'>{errors.password.message}</small>}
                    </div>
                    <button type='submit'>Enviar</button>
                    <button type='button' onClick={handleDashboardClick} >Pagina Principal</button>

                </div>
                
            </form>

        </>
    );
};
export default Nuevo;


/* class Nuevo extends React.Component{
    render(){
        return(
            <div className='h1'>
                Hola desde Nuevo
            </div>
        );
    }
}

export default Nuevo */

/*
const Nuevo = () => {
    
   // useEffect(()=>{
      //  mostrarAlerta();
  //  },[]);
   // const mostrarAlerta=()=>{
   //     Swal.fire(
  //          "REGISTRO", "Usuario registrado con Exito",'success'
 //       )
 //   }
   


    const { register, handleSubmit, formState:{errors}} = useForm()

    const customSubmit = (data,e) => {
        console.log(data)
        //alert("Validacion exitosa!")
       Swal.fire({
        icon:'success',
        title:'Registro exitoso'
       })
       e.target.reset()
    }
    return (
        <>
            <h2>Registro de Nuevo Usuario</h2>
            <form onSubmit={handleSubmit(customSubmit)} className='form-react'>
                <div className='form-control'>
                    <label>Apellido y Nombre</label>
                    <input type="text" {...register('ApellidoyNombre',{
                        required:true, maxLength:40})}/>
                    {errors.ApellidoyNombre?.type === 'required' && <small className='fail'>El campo no puede estar vacio</small>}
                    {errors.ApellidoyNombre?.type === 'maxLength' && <small className='fail'>El maximo de caracteres es 40</small>}    
                </div>
                
                <div className='form-control'>
                    <label>Edad</label>
                    <input type="number" {...register('edad',{
                        required:true,min:10, max:100})}/>
                    {errors.edad?.type === 'required' && <small className='fail'>El campo no puede estar vacio</small>}
                    {errors.edad?.type === 'min' && <small className='fail'>La edad minima es de 10 años</small>}
                    {errors.edad?.type === 'max' && <small className='fail'>La edad maxima es de 100 años</small>}
                </div>
                <div className='form-control'>
                    <label>Telefono</label>
                    <input type="number"
                    placeholder='3888-123456' 
                    {...register('telefono',{
                        required:true, maxLength:10})}/>
                        {errors.telefono?.type === 'required' && <small className='fail'>El campo "numero de telefono" no puede estar vacio</small>}
                        {errors.telefono?.type === 'maxLength' && <small className='fail'>El telefono no puede ser mayor a 10 caracteres</small>}
                </div>

                <div className='form-control'>
                    <label>Correo</label>
                    
                    <input type="text" 
                    placeholder="ejemplo@gmail.com"
                    {...register('correo',
                    {required:{value:true,
                        message:"El correo es Obligatorio"},
                    pattern:{
                        value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "El formato no es correcto"
                    }                  
                    })}/>
                    {errors.correo && <small className='fail'>{errors.correo.message}</small>}

                </div>
                <div className='form-control'>
                    <label>Contraseña</label>
                    <input type="password" 
                    placeholder='Contraseña'
                    {...register('password',{
                        required:{
                            value: true,
                            message: "El campo es requerido"
                        },
                        minLength:{
                            value: 8,
                            message: "La contraseña debe tener al menos 8 caracteres"
                        }
                    })}/>
                    {errors.password && <small className='fail'>{errors.password.message}</small>}
                </div>
                <button type='submit'>Enviar</button>
            </form>

        </>
        
    )
}

export default Nuevo

*/

