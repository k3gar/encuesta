import React, { useState, useEffect } from 'react';

function Encuesta({ datos }) {
  const [seccionActualIndex, setSeccionActualIndex] = useState(-1);
  const [respuestas, setRespuestas] = useState(Array.from({ length: datos.secciones.length }, () => ({})));
  const [puntuacionTotalSecciones, setPuntuacionTotalSecciones] = useState([]);
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const cantidadSecciones = datos.secciones.length;

  const handleChange = (seccionIndex, componenteIndex, preguntaIndex, valor) => {
    const nuevasRespuestas = [...respuestas];
    nuevasRespuestas[seccionIndex] = {
      ...nuevasRespuestas[seccionIndex],
      [componenteIndex]: {
        ...nuevasRespuestas[seccionIndex][componenteIndex],
        [preguntaIndex]: valor
      }
    };
    setRespuestas(nuevasRespuestas);
  };

  useEffect(() => {
    const calcularPuntuacionSeccion = (respuestasSeccion) => {
      let puntuacionTotal = 0;
      let pesoTotal = 0;
    
      // Iterar sobre las respuestas de la sección
      Object.values(respuestasSeccion).forEach(respuestas => {
        Object.values(respuestas).forEach(respuesta => {
          if (respuesta !== undefined && respuesta !== null) {
            puntuacionTotal += respuesta; // Sumar la puntuación de la respuesta
            pesoTotal += 5; // Sumar el peso de la pregunta (asumimos que cada pregunta tiene un peso de 5)
          }
        });
      });
    
      // Calcular la puntuación ajustada considerando el peso total
      return pesoTotal === 0 ? 0 : Math.round((puntuacionTotal / pesoTotal) * 10);
    };
      

    const puntuacionesSecciones = respuestas.map((respuestasSeccion, seccionIndex) => ({
      id: seccionIndex,
      nombre: datos.secciones[seccionIndex].titulo,
      puntuacionTotal: calcularPuntuacionSeccion(respuestasSeccion)
    }));
    setPuntuacionTotalSecciones(puntuacionesSecciones);
  }, [respuestas, datos.secciones]);

  const avanzarSeccion = () => {
    if (seccionActualIndex < cantidadSecciones - 1) {
      setSeccionActualIndex(seccionActualIndex + 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      setMostrarResultados(true);
    }
  };

  const reiniciarEncuesta = () => {
    setSeccionActualIndex(0);
    setRespuestas(Array.from({ length: cantidadSecciones }, () => ({})));
    setPuntuacionTotalSecciones([]);
    setMostrarResultados(false);
  };

  const calcularPuntuacionGlobal = () => {
    if (puntuacionTotalSecciones.length === 0) {
      return 0; // Manejar el caso cuando no hay secciones respondidas
    }
    const puntuacionTotal = puntuacionTotalSecciones.reduce((total, seccion) => total + seccion.puntuacionTotal, 0);
    return Math.round(puntuacionTotal / cantidadSecciones);
  };

  return (
    <div className="quiz">
      {seccionActualIndex === -1 && (
        <div className="quiz__welcome">
          <h3>Bienvenido a la autoevaluación de administración de conocimientos</h3>
          <p>Por favor, responda las siguientes preguntas de los instrumentos de autoevaluación.</p>
          <button className="button-9" onClick={() => setSeccionActualIndex(0)}>Comenzar autoevaluación</button>
        </div>
      )}
      {seccionActualIndex !== -1 && !mostrarResultados && (
        <div className="quiz__container">
          <h2>{datos.secciones[seccionActualIndex].titulo}</h2>
          {datos.secciones[seccionActualIndex].preguntas.map((componente, componenteIndex) => (
            <div key={componenteIndex}>
              <h4>{componente.componentes}</h4>
              {componente.preguntas.map((pregunta, preguntaIndex) => (
                <div className="quiz__container--question-container" key={preguntaIndex}>
                  <p>{pregunta.texto}</p>
                  <div>
                    {datos.opciones.map((opcion, opcionIndex) => (
                      <label key={opcion.valor}>
                        <input
                          type="radio"
                          value={opcion.valor}
                          onChange={(e) => handleChange(seccionActualIndex, componenteIndex, preguntaIndex, opcion.valor)}
                          checked={respuestas[seccionActualIndex]?.[componenteIndex]?.[preguntaIndex] === opcion.valor}
                        />
                        {opcion.texto}
                      </label>
                    ))}
                  </div>
                  <p>Valor de respuesta: {respuestas[seccionActualIndex]?.[componenteIndex]?.[preguntaIndex]}</p>
                </div>
              ))}
              <hr />
            </div>
          ))}
          <div>
            {seccionActualIndex < cantidadSecciones - 1 && (
              <button className="button-9" onClick={avanzarSeccion}>Siguiente Sección</button>
            )}
            {seccionActualIndex === cantidadSecciones - 1 && (
              <button className="button-9" onClick={() => setMostrarResultados(true)}>Ver Resultados</button>
            )}
          </div>
        </div>
      )}
      {mostrarResultados && (
        <div>
          <h3>Resultados</h3>
          <h4>Puntuación Total por Sección</h4>
          <ul>
            {puntuacionTotalSecciones.map((seccion) => (
              <li key={seccion.id}>
                <strong>{seccion.nombre}:</strong> {seccion.puntuacionTotal}
              </li>
            ))}
          </ul>
          <h4>Puntuación Global</h4>
          <p>{calcularPuntuacionGlobal()}</p>
          <button onClick={reiniciarEncuesta}>Reiniciar Encuesta</button>
        </div>
      )}
    </div>
  );
}

export default Encuesta;
