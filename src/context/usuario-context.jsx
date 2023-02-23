import React, {useState, useEffect } from "react";

const UsuarioContext = React.createContext();

export function UsuarioProvider(props){
    const [usuario, setUsuario] = useState(null);
    const [cargandoUsuario, setcargandoUsuario] = useState(true)

    useEffect(()) => {
        async function cargarUsuario(){
            if(!getToken()){
                setcargandoUsuario(false);
                return;
            }

            try {
                const {data: usuario} = await Axios.get()
            }
        }
    }


}