import aiThumbnail from '../assets/shorts/ai.png';
import aiTipThumbnail from '../assets/shorts/ai_tip.png';
import awsServicesThumbnail from '../assets/shorts/aws_services.png';

export type Video = {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
};

export const videos: Video[] = [
  {
    id: 'T2YODzqnO9Y',
    title: 'La mayoría usa mal la IA',
    description:
      '¿Te ha pasado que le pides algo a la Inteligencia Artificial y te da una respuesta súper genérica o que de plano no te sirve? 😮‍💨 El problema no es la IA, el problema es que la mayoría la usa mal.\n\nPasar de un resultado mediocre a uno extraordinario depende 100% de cómo estructuras tu instrucción. Aquí tienes el desglose definitivo para dejar de tirar prompts a la basura:\n\n🔹 El error común (Ambigüedad): Pedir cosas como "escribe un artículo de programación". La IA no lee mentes; sin contexto, te dará la respuesta más genérica posible.\n\n🔹 La regla de oro (Contexto): Mientras más detalles, rol, objetivo y restricciones le des a la herramienta, más preciso y útil será el resultado. Trátala como a un asistente senior.\n\n🔹 El Hack Supremo (Prompt Inverso): Si no sabes cómo empezar a estructurar un buen prompt, ¡pídele a otra IA (como Claude) que lo cree por ti! Dile: "Quiero lograr [X objetivo]. Hazme las preguntas necesarias para construir el prompt perfecto". Deja que ella te entreviste.\n\nLa verdadera diferencia en esta era tecnológica no es solo tener acceso a la IA, sino saber cómo comunicarte con ella para potenciar tu flujo de trabajo. 🚀\n\n👇 ¿Cuál es el error más común que cometes cuando le pides algo a ChatGPT o Claude? ¡Te leo en los comentarios!\n\n¡Sígueme para más tips y contenido sobre desarrollo, productividad e Inteligencia Artificial! 💻🤖\n\n#ArtificialIntelligence #PromptEngineering #Programacion #SoftwareEngineer #Productividad #TechTips',
    thumbnail: aiTipThumbnail,
  },
  {
    id: 'O4QJd5FqLP8',
    title: '¿Cómo utilizar la Inteligencia Artificial?',
    description: 'Así puedes crear tu aplicación fácilmente con Claude Code',
    thumbnail: aiThumbnail,
  },
  {
    id: 'R8HeTVCxI3A',
    title: '¿Cómo saber que servicio de AWS necesitas para correr tú aplicación?',
    description:
      '¿Te ha pasado que entras a AWS y te abrumas con tantas opciones para desplegar tu aplicación? 🤯 No te preocupes, aquí te dejo el resumen definitivo para decidir entre EC2, Fargate y Lambda:\n\n🔹 EC2 (Elastic Compute Cloud): Control total. Es tu propio servidor virtual. Tú manejas el sistema operativo, parches y escalabilidad. Ideal para arquitecturas tradicionales o configuraciones muy específicas.\n\n🔹 Fargate: Serverless para contenedores. Si ya usas Docker pero no quieres administrar servidores (instancias de EC2), Fargate lo hace por ti. Te enfocas en tu app, no en la infraestructura.\n\n🔹 Lambda: Serverless puro (Funciones como Servicio). Ideal para microservicios, APIs ligeras o tareas que se ejecutan por eventos. ¿Lo mejor? Solo pagas por el tiempo exacto de ejecución.\n\nLa elección depende de cuánto control quieras delegar en AWS y de la arquitectura de tu software. 🚀\n\n👇 ¿Cuál de estos servicios estás usando actualmente en tus proyectos?\n\n¡Sígueme para más tips y contenido sobre desarrollo y Cloud Computing! 💻☁️',
    thumbnail: awsServicesThumbnail,
  },
];
