/* import React from "react";
import {useEffect, useState} from "react";


function Preguntas() {
  const url = 'https://the-trivia-api.com/api/questions?categories=music&limit=5&difficulty=medium'
  const [trivia, setTrivia] = useState()
  const fetchApi = async () => {
    const response = await fetch (url)
    console.log(response.statusText)
    const responseJSON = await response.json()
    setTrivia(responseJSON)
    console.log(responseJSON)
  }
  useEffect(() =>{
    fetchApi()
  },[])

  return (
    <div className="h2">
      Hola Mundo
      <ul>
      {!trivia ? "Cargando..." :
        trivia.map((trivia,index)=>{
          return <li>{trivia.id}  ------ {trivia.question} ---- 
          {trivia.correctAnswer} "✅" ------- {trivia.incorrectAnswers} "❌"</li>
        })
      }
      </ul>
    </div>
  );
}

export default Preguntas; */

import React, {useState,useEffect} from "react";
//funciona con preguntas designadas
 const preguntas = [
  {titulo: "¿Cual es el mejor lenguaje de programacion?",
  opciones: [
      {textoRespuesta:"Javascript", isCorrect:true},
      {textoRespuesta:"PHP", isCorrect:false},
      {textoRespuesta:"C++", isCorrect:false},
      {textoRespuesta:"KOTLIN", isCorrect:false},

  ], 
  },
  {titulo: "¿donde aprendes tutoriales?",
  opciones: [
      {textoRespuesta:"sin contenido", isCorrect:false},
      {textoRespuesta:"sin relleno", isCorrect:true},
      {textoRespuesta:"sin gracia", isCorrect:false},
      {textoRespuesta:"sin codigo", isCorrect:false},

  ], 
  },
  {titulo: "¿Cuanto es '11 + 1 en Javascript?",
  opciones: [
      {textoRespuesta:"111", isCorrect:true},
      {textoRespuesta:"12", isCorrect:false},
      {textoRespuesta:"Syntax Error", isCorrect:false},
      {textoRespuesta:"11 1", isCorrect:false},

  ], 
  },
  {titulo: "¿En que año fue creado Javascript?",
  opciones: [
      {textoRespuesta:"1997", isCorrect:false},
      {textoRespuesta:"2001", isCorrect:false},
      {textoRespuesta:"1987", isCorrect:false},
      {textoRespuesta:"1995", isCorrect:true},

  ], 
  },
]

export default preguntas; 

