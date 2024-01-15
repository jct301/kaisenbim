interface Link {
  name: string;
  path: string;
}

export const LINKS: Array<Link> = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Servicios",
    path: "/#services",
  },
  {
    name: "Proyectos",
    path: "/#projects",
  },
];

interface Service {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
}

export const SERVICES: Array<Service> = [
  {
    id: 0,
    title: "Modelado de estructuras",
    description: "Modelado de estructuras",
    thumbnail: "/images/services/image-0001.webp",
  },
  {
    id: 1,
    title: "Modelado de instalaciones",
    description: "Modelado de estructuras",
    thumbnail: "/images/services/image-0002.webp",
  },
  {
    id: 2,
    title: "Modelado de estructuras",
    description: "Modelado de estructuras",
    thumbnail: "/images/services/image-0003.webp",
  },
  {
    id: 3,
    title: "Modelado de estructuras",
    description: "Modelado de estructuras",
    thumbnail: "/images/services/image-0004.webp",
  },
  {
    id: 4,
    title: "Modelado de estructuras",
    description: "Modelado de estructuras",
    thumbnail: "/images/services/image-0005.webp",
  },
  {
    id: 5,
    title: "Modelado de estructuras",
    description: "Modelado de estructuras",
    thumbnail: "/images/services/image-0007.webp",
  },
];
