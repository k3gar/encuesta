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
    setSeccionActualIndex(-1);
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
          <h2>Bienvenido a la autoevaluación de administración de conocimientos</h2>
          <p>Por favor, responda las siguientes preguntas de los instrumentos de autoevaluación.</p>
          <div className="quiz__welcome__form">
            <div className="quiz__welcome__form--container">
              <div>
                <label for="area-funcional">Área Funcional</label>
                <input type="text" id="area-funcional" name="area-funcional" size="30" />
              </div>

              <div>
                <label for="area-funcional-codigo">Código</label>
                <input type="text" id="area-funcional-codigo" name="area-funcional-codigo" size="10" />
              </div>
            </div>

            <div className="quiz__welcome__form--container">
              <div>
                <label for="puesto-de-trabajo">Puesto de Trabajo:</label>
                <input type="text" id="puesto-de-trabajo" name="puesto-de-trabajo" size="30" />
              </div>
              <div>
                <label for="puesto-de-trabajo-codigo">Código</label>
                <input type="text" id="puesto-de-trabajo-codigo" name="puesto-de-trabajo-codigo" size="10" />
              </div>
            </div>
            <div className="quiz__welcome__form--container">
              <div>
                <label for="unidad-responsable">Unidad Responsable de Estudio:</label>
                <input type="text" id="unidad-responsable" name="unidad-responsable" size="30" />
              </div>
              <div>
                <label for="unidad-responsable-codigo">Código</label>
                <input type="text" id="unidad-responsable-codigo" name="unidad-responsable-codigo" size="10" />
              </div>
            </div>
            <div className="quiz__welcome__form--container">
              <div>
                <label for="fecha-autoevaluación">Fecha Autoevaluación</label>
                <input type="date" id="fecha-autoevaluación" name="fecha-autoevaluación" size="40" />
              </div>
              <div>
                <label for="fecha-actualizacion">Fecha de Actualización</label>
                <input type="date" id="fecha-actualizacion" name="fecha-actualizacion" size="40" />
              </div>
            </div>

          </div>

          <div className="quiz__welcome__block">
            <h4>Indicaciones</h4>
            <p>El presente instrumento de autoevaluación deberá ser completado por los gerentes o directores de las áreas
              funcionales, chequear la opción seleccionada en el sistema de calificación.
            </p>
          </div>

          <div className="quiz__welcome__block">
            <h4>Sistema de Calificación</h4>
            <p>
              <strong>Excelente:</strong> Sobresale por sus óptimas habilidades y competencias en el desarrollo de las diferentes áreas <br />
              <strong>Muy Bueno:</strong> Responde con eficiencia a las actividades que desarrolla <br />
              <strong>Bueno:</strong> Posee un desempeño normal <br />
              <strong>Regular:</strong> Se le dificulta responder de forma eficiente ante la habilidad y competencia presentada <br />
              <strong>Deficiente:</strong> Un bajo rendimiento en sus capacidades o habilidades <br />
            </p>
          </div>
          
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
                  {/* <p>Valor de respuesta: {respuestas[seccionActualIndex]?.[componenteIndex]?.[preguntaIndex]}</p> */}
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
          <h4>Puntuación Total por Instrumento</h4>
          <ul>
            {puntuacionTotalSecciones.map((seccion) => (
              <li key={seccion.id}>
                <strong>{seccion.nombre}:</strong> {seccion.puntuacionTotal}
              </li>
            ))}
          </ul>
          <h4>Puntuación Total</h4>
          <p>{calcularPuntuacionGlobal()}</p>
          <button className="button-9" onClick={reiniciarEncuesta}>Reiniciar Encuesta</button>
        </div>
      )}
    </div>
  );
}

export default Encuesta;
