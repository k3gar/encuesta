import Encuesta from './components/Preguntas/index'
import './App.css';

function App() {
  const datos = {
    secciones: [
      {
        titulo: 'HERRAMIENTA GERENCIAL ADMINISTRACIÓN DEL CONOCIMIENTO - ADMINISTRAR',
        preguntas: [
          {
            componentes: 'Previsión',
            preguntas: [
              { texto: '¿Cómo califica su habilidad para identificar problemáticas antes de que se generen?', respuesta: 0 },
              { texto: 'Presenta alternativas para la resolución de conflictos de manera:', respuesta: 0 },
              { texto: '¿Cómo califica su habilidad para prever las actividades que ejecuta? ', respuesta: 0 },
              { texto: '¿Cómo considera la efectividad en la toma de decisiones?', respuesta: 0 },
              { texto: '¿Cómo considera la efectividad en la toma de decisiones?', respuesta: 0 },
            ]
          },
          {
            componentes: 'Planeación',
            preguntas: [
              { texto: '¿Cómo califica su habilidad para identificar problemáticas antes de que se generen?', respuesta: 0 },
              { texto: 'Presenta alternativas para la resolución de conflictos de manera:', respuesta: 0 },
              { texto: '¿Cómo califica su habilidad para prever las actividades que ejecuta? ', respuesta: 0 },
              { texto: '¿Cómo considera la efectividad en la toma de decisiones?', respuesta: 0 },
              { texto: '¿Cómo considera la efectividad en la toma de decisiones?', respuesta: 0 },
            ]
          },
          {
            componentes: 'Organización',
            preguntas: [
              { texto: 'Su capacidad para priorizar tareas de forma eficiente es:', respuesta: 0 },
              { texto: 'La eficiencia en la asignación de recursos es:', respuesta: 0 },
              { texto: '¿Cómo considera la coordinación entre los recursos?', respuesta: 0 },
              { texto: 'Cumple con los compromisos en tiempo y forma de manera:', respuesta: 0 },
            ]
          },
          {
            componentes: 'Integración',
            preguntas: [
              { texto: 'Coordina los recursos de la organización de forma:', respuesta: 0, },
              { texto: 'Fomenta una cultura de inclusión de forma:', respuesta: 0 },
              { texto: 'Considera que la comunicación entre el equipo es:', respuesta: 0 },
            ]
          },
          {
            componentes: 'Dirección',
            preguntas: [
              { texto: 'Su habilidad para tomar decisiones estratégicas es:', respuesta: 0 },
              { texto: 'Su habilidad para liderar al equipo es:', respuesta: 0 },
            ]
          },
          {
            componentes: 'Control',
            preguntas: [
              { texto: 'Realiza seguimientos para verificar el cumplimiento del manual de procedimientos de forma:', respuesta: 0 },
              { texto: '¿Su conocimiento del manual de procedimientos es?', respuesta: 0 },
              { texto: '¿Cómo calificaría la efectividad de las actividades de control que implementa?', respuesta: 0 },
            ]
          },
        ],
      },
      {
        titulo: 'HERRAMIENTA GERENCIAL ADMINISTRACIÓN DEL CONOCIMIENTO - GERENCIAR',
        preguntas: [
          {
            componentes: 'Formulación de planes',
            preguntas: [
              { texto: 'La efectividad en el cumplimiento de los cronogramas establecidos es:', respuesta: 0 },
              { texto: '¿Cómo considera la asignación de recursos destinados a los planes?', respuesta: 0 },
              { texto: 'Los planes se orientan al logro de los objetivos estratégicos de forma: ', respuesta: 0 },
              { texto: 'La habilidad que tiene para organizar es:', respuesta: 0 },
              { texto: '¿Cómo califica los resultados de los planes que ha propuesto?', respuesta: 0 },
              { texto: '¿Cómo considera las estrategias que ha propuesto en la formulación de planes?', respuesta: 0 },
              { texto: '¿De qué manera se planifican las directrices que permiten a la organización lograr las metas?', respuesta: 0 },
              { texto: '¿Cómo considera la efectividad de los indicadores establecidos para evaluar el progreso de los planes?', respuesta: 0 },

            ]
          },
          {
            componentes: 'Implementación de planes',
            preguntas: [
              { texto: '¿De qué manera influyen los planes de acción establecidos en el logro de los objetivos?', respuesta: 0 },
              { texto: '¿Qué tan eficientes son los planes preparados para alcanzar las metas específicas?', respuesta: 0 },
              { texto: 'Según los planes que ha diseñado, ¿cómo considera que se alinean a las necesidades de la organización?', respuesta: 0 },
              { texto: 'La organización con el equipo de trabajo al momento de poner un plan en marcha ha sido:', respuesta: 0 },
              { texto: '¿Cómo calificaría la efectividad de los planes que ha diseñado para la organización?', respuesta: 0 },
              { texto: '¿Cómo califica su habilidad para cumplir con la programación de las actividades?', respuesta: 0 },

            ]
          },
          {
            componentes: 'Control administrativo ejercido',
            preguntas: [
              { texto: '¿Cómo considera el monitoreo de información que es relevante para proyectos?', respuesta: 0 },
              { texto: 'La efectividad de los mecanismos de control que aplica en el área funcional es:', respuesta: 0 },
              { texto: '¿De qué manera ejerce sus funciones cumpliendo con los procedimientos establecidos por la empresa?', respuesta: 0 },
              { texto: '¿Cómo califica su habilidad para ejercer el control de manera estratégica?', respuesta: 0 },
              { texto: '¿Cómo considera la eficiencia de la supervisión que ejerce hacia su equipo de trabajo?', respuesta: 0 },
              { texto: '¿Qué tan efectivo es el seguimiento constante de los resultados?', respuesta: 0 },
            ]
          }
        ],
      },
      {
        titulo: 'HERRAMIENTA GERENCIAL ADMINISTRACIÓN DEL CONOCIMIENTO - GESTIONAR',
        preguntas: [
          {
            componentes: 'Construcción de redes de apoyo',
            preguntas: [
              { texto: 'Promueve actividades de integración con los colaboradores de forma:', respuesta: 0 },
              { texto: '¿Cómo califica la interacción entre usted y el recurso humano de la organización?', respuesta: 0 },
              { texto: '¿De qué manera se genera la confianza entre usted y los colaboradores?', respuesta: 0 },
              { texto: 'Implementa la escucha activa de forma:', respuesta: 0 },
              { texto: 'La efectividad al transmitir su mensaje en la comunicación es:', respuesta: 0 },
              { texto: 'Identifica las nuevas oportunidades para establecer redes de apoyo en el entorno empresarial de forma:', respuesta: 0 },
              { texto: '¿De qué manera genera redes de apoyo para desarrollar los objetivos estratégicos de la organización?', respuesta: 0 },
            ]
          },
          {
            componentes: 'Fortalecimiento de redes de apoyo',
            preguntas: [
              { texto: 'Mantiene contacto con los colaboradores de forma:', respuesta: 0 },
              { texto: '¿Cómo califica su disposición para ayudar a los demás?', respuesta: 0 },
              { texto: '¿De qué manera fomenta la colaboración con los compañeros de trabajo?', respuesta: 0 },
              { texto: '¿De qué manera refuerza el vínculo con sus colaboradores para construir relaciones saludables?', respuesta: 0 },
            ]
          },
          {
            componentes: 'Conservación de redes de apoyo',
            preguntas: [
              { texto: '¿Cómo califica las relaciones sociales que tiene con su equipo de trabajo en tiempos libres?', respuesta: 0 },
              { texto: '¿Cómo calificaría el apoyo de su equipo de trabajo para realizar actividades en conjunto?', respuesta: 0 },
              { texto: '¿Cómo califica la implementación de las redes de apoyo en la organización?', respuesta: 0 },
              { texto: '¿Qué tan efectivas son las actividades extracurriculares orientadas a fortalecer las relaciones con su equipo de trabajo?', respuesta: 0 },
              { texto: '¿De qué manera asegura los canales de comunicación para la mejor toma de decisiones?', respuesta: 0 },
              { texto: '¿Cómo califica su habilidad para desarrollar relaciones en su entorno laboral?', respuesta: 0 },
              { texto: '¿Cómo califica el cambio colectivo que se genera a través de habilidades de comunicación?', respuesta: 0 },
              { texto: '¿Qué tan efectiva es la información que comparte con el equipo de trabajo para mantener la red de apoyo?', respuesta: 0 },
              { texto: '¿Cómo calificaría su disposición de seguir alimentándose de conocimiento para mejorar su desempeño?', respuesta: 0 },

            ]
          }
        ],
      },
      {
        titulo: 'HERRAMIENTA GERENCIAL ADMINISTRACIÓN DEL CONOCIMIENTO - DIRIGIR',
        preguntas: [
          {
            componentes: 'Manera de dirigir',
            preguntas: [
              { texto: 'Promueve actividades de integración con los colaboradores de forma:', respuesta: 0 },
              { texto: '¿Cómo considera que se realizan las actividades para alcanzar los objetivos fijados?', respuesta: 0 },
              { texto: '¿Cómo califica la integración de los recursos humanos, técnicos y materiales de la empresa?', respuesta: 0 },
              { texto: 'Maneja la responsabilidad brindada de forma:', respuesta: 0 },
              { texto: '¿Cómo califica su habilidad para resolver problemas de forma efectiva?', respuesta: 0 },

            ]
          },
          {
            componentes: 'Comunicación efectiva',
            preguntas: [
              { texto: 'Promueve activamente una cultura de comunicación clara de forma:', respuesta: 0 },
              { texto: '¿Cómo considera el uso de diferentes plataformas para tener una comunicación fluida?', respuesta: 0 },
              { texto: 'Su flexibilidad al adaptar su estilo de comunicación según la situación que se presente es:', respuesta: 0 },
              { texto: '¿Cómo considera que realiza la comunicación asertiva al momento de resolver conflictos?', respuesta: 0 },
              { texto: '¿Cómo califica su habilidad para comunicarse de forma efectiva?', respuesta: 0 },

            ]
          },
          {
            componentes: 'Forma de motivar',
            preguntas: [
              { texto: 'Mantiene una actitud positiva incluso frente a situaciones adversas de forma:', respuesta: 0 },
              { texto: 'Su capacidad para inspirar a los demás es:', respuesta: 0 },
              { texto: '¿Cómo califica su habilidad para motivar a los colaboradores?', respuesta: 0 },
              { texto: 'Su capacidad para crear un ambiente positivo es:', respuesta: 0 },
            ]
          },
          {
            componentes: 'Liderazgos establecidos',
            preguntas: [
              { texto: 'Hace uso de su tiempo para liderar eficazmente de forma:', respuesta: 0 },
              { texto: '¿Cómo calificaría sus capacidades creativas?', respuesta: 0 },
              { texto: 'Su capacidad para brindar las directrices necesarias para alcanzar los resultados deseados es:', respuesta: 0 }
            ]
          },
          {
            componentes: 'Supervisión ejercida',
            preguntas: [
              { texto: '¿De qué manera entiende adecuadamente los procedimientos de la empresa?', respuesta: 0 },
              { texto: '¿Cómo califica la habilidad para gestionar equipos profesionales de trabajo?', respuesta: 0 },
              { texto: 'Inspira a otros a tener ideas para buscar soluciones colaboradoras de los problemas de forma:', respuesta: 0 }
            ]
          }
        ],
      },
      {
        titulo: 'HERRAMIENTA GERENCIAL ADMINISTRACIÓN DEL CONOCIMIENTO - LIDERAR',
        preguntas: [
          {
            componentes: 'Visión y dirección',
            preguntas: [
              { texto: 'Su habilidad para diseñar estrategias es:', respuesta: 0 },
              { texto: 'Su capacidad para resolver conflictos de forma creativa es:', respuesta: 0 },
              { texto: '¿Cómo considera los esfuerzos orientados al cumplimiento de la visión establecida?', respuesta: 0 },
              { texto: 'La claridad en el proceso para contribuir a los objetivos de la empresa es:', respuesta: 0 }
            ]
          },
          {
            componentes: 'Trabajo en equipo',
            preguntas: [
              { texto: 'Impulsa el trabajo colaborativo de forma:', respuesta: 0 },
              { texto: 'Se adapta a las necesidades específicas de su equipo de forma:', respuesta: 0 },
              { texto: '¿Cómo considera que fomenta un entorno de comunicación abierta?', respuesta: 0 },
              { texto: '¿Con qué eficacia recibe respuesta de sus solicitudes por parte de sus equipos?', respuesta: 0 }
            ]
          },
          {
            componentes: 'Resolución de problemas',
            preguntas: [
              { texto: '¿Cómo califica la efectividad de las soluciones que brinda a los problemas?', respuesta: 0 },
              { texto: '¿Cómo es su desempeño cuando se trabaja bajo presión?', respuesta: 0 },
              { texto: '¿Cómo se considera desarrollando estrategias de contingencia por posibles afectaciones a la organización?', respuesta: 0 },
              { texto: '¿Cómo considera la claridad en el proceso para solicitar cambios o mejoras?', respuesta: 0 },
            ]
          },
          {
            componentes: 'Motivación',
            preguntas: [
              { texto: '¿Cómo califica su habilidad para motivar?', respuesta: 0 },
              { texto: 'Brinda retroalimentación positiva de forma', respuesta: 0 },
              { texto: '¿De qué manera fomenta el sentido de pertenencia en el equipo?', respuesta: 0 },
              { texto: 'Motiva al recurso humano ofreciendo oportunidades de crecimiento de forma:', respuesta: 0 }
            ]
          },
          {
            componentes: 'Desarrollo de personal',
            preguntas: [
              { texto: '¿Su influencia en el desarrollo personal utilizando las herramientas de conocimiento es?', respuesta: 0 },
              { texto: 'Resuelve problemas relacionados a diferencias entre empleados de forma:', respuesta: 0 },
              { texto: '¿Cómo considera su capacidad para potenciar el talento de los colaboradores?', respuesta: 0 },
              { texto: 'Estimula la responsabilidad de su equipo de trabajo de forma:', respuesta: 0 }
            ]
          }
        ],
      },
    ],
    opciones: [
      { valor: 5, texto: 'Excelente' },
      { valor: 4, texto: 'Muy bueno' },
      { valor: 3, texto: 'Bueno' },
      { valor: 2, texto: 'Regular' },
      { valor: 1, texto: 'Deficiente' }
    ]
  };
  return (
    <div className="App">
      <Encuesta datos={datos}/>
    </div>
  );
}

export default App;
