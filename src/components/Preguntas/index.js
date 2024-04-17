import React, { useState, useEffect } from 'react';

function Encuesta({ datos }) {
  const [seccionActualIndex, setSeccionActualIndex] = useState(-1);
  const [respuestas, setRespuestas] = useState(Array.from({ length: datos.secciones.length }, () => ({})));
  const [puntuacionTotalSecciones, setPuntuacionTotalSecciones] = useState([]);
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [areaFuncional, setAreaFuncional] = useState('');
  const [areaFuncionalCodigo, setAreaFuncionalCodigo] = useState('');
  const [puestoDeTrabajo, setPuestoDeTrabajo] = useState('');
  const [puestoDeTrabajoCodigo, setPuestoDeTrabajoCodigo] = useState('');
  const [unidadResponsable, setUnidadResponsable] = useState('');
  const [unidadResponsableCodigo, setUnidadResponsableCodigo] = useState('');
  const [fechaAutoevaluacion, setFechaAutoevaluacion] = useState('');
  const [fechaActualizacion, setFechaActualizacion] = useState('');
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
    setAreaFuncional('');
    setAreaFuncionalCodigo('');
    setPuestoDeTrabajo('');
    setPuestoDeTrabajoCodigo('');
    setUnidadResponsable('');
    setUnidadResponsableCodigo('');
    setFechaAutoevaluacion('');
    setFechaActualizacion('');
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
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
                <label htmlFor="area-funcional">Área Funcional</label>
                <input
                  type="text"
                  id="area-funcional"
                  name="area-funcional"
                  size="30"
                  value={areaFuncional}
                  onChange={(e) => setAreaFuncional(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="area-funcional-codigo">Código</label>
                <input
                  type="text"
                  id="area-funcional-codigo"
                  name="area-funcional-codigo"
                  size="10"
                  value={areaFuncionalCodigo}
                  onChange={(e) => setAreaFuncionalCodigo(e.target.value)}
                />
              </div>
            </div>
            <div className="quiz__welcome__form--container">
              <div>
                <label htmlFor="puesto-de-trabajo">Puesto de Trabajo</label>
                <input
                  type="text"
                  id="puesto-de-trabajo"
                  name="puesto-de-trabajo"
                  size="30"
                  value={puestoDeTrabajo}
                  onChange={(e) => setPuestoDeTrabajo(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="puesto-de-trabajo-codigo">Código</label>
                <input
                  type="text"
                  id="puesto-de-trabajo-codigo"
                  name="puesto-de-trabajo-codigo"
                  size="10"
                  value={puestoDeTrabajoCodigo}
                  onChange={(e) => setPuestoDeTrabajoCodigo(e.target.value)}
                />
              </div>
            </div>
            <div className="quiz__welcome__form--container">
              <div>
                <label htmlFor="unidad-responsable">Unidad Responsable de Estudio</label>
                <input
                  type="text"
                  id="unidad-responsable"
                  name="unidad-responsable"
                  size="30"
                  value={unidadResponsable}
                  onChange={(e) => setUnidadResponsable(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="unidad-responsable-codigo">Código</label>
                <input
                  type="text"
                  id="unidad-responsable-codigo"
                  name="unidad-responsable-codigo"
                  size="10"
                  value={unidadResponsableCodigo}
                  onChange={(e) => setUnidadResponsableCodigo(e.target.value)}
                />
              </div>
            </div>
            <div className="quiz__welcome__form--container">
              <div>
                <label htmlFor="fecha-autoevaluacion">Fecha Autoevaluación</label>
                <input
                  type="date"
                  id="fecha-autoevaluacion"
                  name="fecha-autoevaluacion"
                  size="40"
                  value={fechaAutoevaluacion}
                  onChange={(e) => setFechaAutoevaluacion(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="fecha-actualizacion">Fecha de Actualización</label>
                <input
                  type="date"
                  id="fecha-actualizacion"
                  name="fecha-actualizacion"
                  size="40"
                  value={fechaActualizacion}
                  onChange={(e) => setFechaActualizacion(e.target.value)}
                />
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
              <strong>Excelente:</strong> Sobresale por sus óptimas habilidades y competencias en el desarrollo de las diferentes áreas <br /><br />
              <strong>Muy Bueno:</strong> Responde con eficiencia a las actividades que desarrolla <br /><br />
              <strong>Bueno:</strong> Posee un desempeño normal <br /><br />
              <strong>Regular:</strong> Se le dificulta responder de forma eficiente ante la habilidad y competencia presentada <br /><br />
              <strong>Deficiente:</strong> Un bajo rendimiento en sus capacidades o habilidades <br /><br />
            </p>
          </div>

          <button className="button-9" onClick={() => {
            setSeccionActualIndex(0)
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            })
            }}>Comenzar autoevaluación</button>
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
        <section className="quiz__container">
          <h1>Resultados</h1>
          <div>
            <h4>Información Ingresada</h4>
            <div className="quiz__container--informacion-ingresada">
              {areaFuncional !== "" && <p> <strong>Área Funcional:</strong>  {areaFuncional}</p>}
              {areaFuncionalCodigo !== "" && <p> <strong>Código Área Funcional:</strong>  {areaFuncionalCodigo}</p>}
              {puestoDeTrabajo !== "" && <p> <strong>Puesto de Trabajo:</strong>  {puestoDeTrabajo}</p>}
              {puestoDeTrabajoCodigo !== "" && <p> <strong>Código Puesto de Trabajo:</strong>  {puestoDeTrabajoCodigo}</p>}
              {unidadResponsable !== "" && <p> <strong>Unidad Responsable de Estudio:</strong>  {unidadResponsable}</p>}
              {unidadResponsableCodigo !== "" && <p> <strong>Código Unidad Responsable:</strong>  {unidadResponsableCodigo}</p>}
              {fechaAutoevaluacion !== "" && <p> <strong>Fecha Autoevaluación:</strong>  {fechaAutoevaluacion}</p>}
              {fechaActualizacion !== "" && <p> <strong>Fecha de Actualización:</strong>  {fechaActualizacion}</p>}
            </div>
          </div>
          <div>

            <div className="quiz__container--global-score-container">
              <h2>Puntuación Total</h2>
              <p className="quiz__container--global-score">{calcularPuntuacionGlobal()}</p>
            </div>
            <div className="quiz__container--global-items-container">
              <h2>Puntuación Total por Instrumento</h2>
              <ul className="quiz__container--items-container">
                {puntuacionTotalSecciones.map((seccion) => (
                  <li className="quiz__container--items-section" key={seccion.id}>
                    <p className="quiz__container--items-text">{seccion.nombre}</p> <p className="quiz__container--items-text-score">{seccion.puntuacionTotal}</p>
                  </li>
                ))}
              </ul>
          <button className="button-9" onClick={reiniciarEncuesta}>Reiniciar Encuesta</button>
            </div>
          </div>

        </section>
      )}
    </div>
  );
}

export default Encuesta;
