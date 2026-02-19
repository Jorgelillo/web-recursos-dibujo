import { defineCollection, z } from 'astro:content';

// Colección para las Asignaturas (ej: Plástica I, Cultura Audiovisual)
const asignaturasCollection = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    curso: z.string(), // Ej: "1º ESO", "1º Bachillerato"
    icono: z.string().optional(), // Podrías usar un emoji o ruta de icono
    descripcion: z.string(),
  }),
});

// Colección para los Recursos/Tareas
const tareasCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    titulo: z.string(),
    asignatura: z.string(), // Debe coincidir con el slug de la asignatura (ej: 'plastica-i')
    fecha: z.date(),
    tecnica: z.string().optional(), // Ej: "Acuarela", "Grafito"
    imagenPortada: image(), // Astro optimizará esta imagen automáticamente
    ejemplosAlumnos: z.array(image()).optional(), // Array de imágenes de trabajos finales
  }),
});

export const collections = {
  'asignaturas': asignaturasCollection,
  'tareas': tareasCollection,
};