import React, {useState,useEffect} from "react";
//import { useNavigate } from "react-router-dom";
import '../assets/css/App.css';
import Preguntas from "../preguntas";

//import "../assets/css/global.css"; 
import preguntas from "../preguntas";

/* const Dashboard = () => {
    
    return (
        <>
            <h2 className="h2">Bienvenidos a la Pagina Principal</h2>
                

        </>
    )

    
};
export default Dashboard; */

function Dashboard(){
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [puntuacion, setPuntuacion] = useState(0);
    const [isFinished, setFinished] = useState(false);
    const [tiempoRestante, setTiempoRestante] = useState(10);
    const [areDisabled, setAreDisabled] = useState(false);
    const [answerShown, setAnswerShown] = useState(false);

    function handleAnswerSubmit(isCorrect,e){
            //añadir puntuacion
            if (isCorrect) setPuntuacion(puntuacion + 1)
            //añadir estilos de pregunta
            e.target.classList.add(isCorrect ? "correct": "incorrect")
            
            
            setTimeout(() => {
                //cambiar a la siguiente pregunta
            if(preguntaActual === preguntas.length-1 ){
            
                setFinished(true);
            }else{
                setPreguntaActual(preguntaActual + 1);
            }
            }, 1500);
            
    }

    useEffect(()=>{
        const intervalo = setInterval(()=>{
            if(tiempoRestante>0) setTiempoRestante((prev)=> prev - 1);
            if(tiempoRestante === 0) setAreDisabled(true);
        },1000);
        return ()=> clearInterval(intervalo);
    },[tiempoRestante]);


    if (isFinished)
        return(
            <main className="h2">
                <div className="juego-terminado">
                    <span>
                        {" "}
                        Obtuviste {puntuacion} de {preguntas.length}{" "}
                    </span>
                    <button onClick={()=> (window.location.href = "./Dashboard")}>
                        {" "}
                        Volver a Jugar
                    </button>
                </div>
            </main>
        );

    if(answerShown) return <main className="app">Respuestas</main>
    
    return <main className="h2">
    <div className="lado-izquierdo">
        <div className="numero-pregunta">
            <span>Pregunta {preguntaActual + 1} de </span> {preguntas.length}
        </div>
        <div className="titulo-pregunta">{preguntas[preguntaActual].titulo}
        </div>
        <div>
            {!areDisabled ? (
                 <span className ="tiempo-restante">
                 Tiempo Restante: {tiempoRestante}{" "}
                 </span>

            ) : ( 
                <button className="h3" onClick={() =>{
                    setTiempoRestante(10);
                    setAreDisabled(false);
                    setPreguntaActual(preguntaActual + 1);
                }}
                >
                Continuar 
                </button>
            )}

           
        </div>
    </div>

    <div className="lado-derecho">
        {preguntas[preguntaActual].opciones.map((respuesta) =>(
            
            <button 
            disabled={areDisabled}
            key={respuesta.textoRespuesta} 
            onClick={(e)=> handleAnswerSubmit(respuesta.isCorrect,e)} 
            >{respuesta.textoRespuesta}
            </button>
        ))} 
        

    </div>
    
    </main>
}
export default Dashboard;



/*
class Dashboard extends React.Component{
    render(){
        return(
            <div>
                Hola desde Dashboard
            </div>
        );
    }
}

export default Dashboard */