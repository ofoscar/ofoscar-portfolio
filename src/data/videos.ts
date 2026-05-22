import aiThumbnail from '../assets/shorts/ai.png';
import awsServicesThumbnail from '../assets/shorts/aws_services.png';

export type Video = {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
};

export const videos: Video[] = [
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
