const profesionales = [
  {
    id: 1,
    nombre: "Carlos Perez",
    localidad: "Ciudad de Buenos Aires, Argentina",
    rate: 3,
    especialidad: "Médico Clinico",
    categoria: "clinica",
    cantidad: 1,
    precio: 1000,
  },
  {
    id: 2,
    nombre: "Ana Juarez",
    localidad: "Santa Fe, Argentina",
    rate: 4.5,
    especialidad: "Médica Clinica",
    categoria: "clinica",
    cantidad: 1,
    precio: 1200,
  },
  {
    id: 3,
    nombre: "Carlos Perez",
    localidad: "Ciudad de Buenos Aires, Argentina",
    rate: 3,
    especialidad: "Médico Clinico",
    categoria: "clinica",
    cantidad: 1,
    precio: 1000,
  },
  {
    id: 4,
    nombre: "Jose Gonzalez",
    localidad: "Cordoba, Argentina",
    rate: 4.5,
    especialidad: "Médico Clinico",
    categoria: "clinica",
    cantidad: 1,
    precio: 1200,
  },
  {
    id: 5,
    nombre: "Pedro Lopez",
    localidad: "Mendoza, Argentina",
    rate: 4.5,
    especialidad: "Médico Clinico",
    categoria: "clinica",
    cantidad: 1,
    precio: 1200,
  },
  {
    id: 6,
    nombre: "Mariana Gimenez",
    localidad: "Ciudad de Buenos Aires, Argentina",
    rate: 4.5,
    especialidad: "Médica Clinica",
    categoria: "clinica",
    cantidad: 1,
    precio: 1200,
  },
  {
    id: 7,
    nombre: "Juan Castro",
    localidad: "Santa Fe, Argentina",
    rate: 3,
    especialidad: "Especialista en Otorrino",
    categoria: "otorrino",
    cantidad: 1,
    precio: 1000,
  },
  {
    id: 8,
    nombre: "Ana Casco",
    localidad: "Rosario, Argentina",
    rate: 4.5,
    especialidad: "Especilista en Otorrino",
    categoria: "otorrino",
    cantidad: 1,
    precio: 1200,
  },
  {
    id: 9,
    nombre: "Luciano Alvarez",
    localidad: "Pcia de Buenos Aires, Argentina",
    rate: 3,
    especialidad: "Cardiologo",
    categoria: "cardiologia",
    cantidad: 1,
    precio: 1000,
  },
  {
    id: 10,
    nombre: "Pablo Hernandez",
    localidad: "Bahia Blanca, Argentina",
    rate: 4.5,
    especialidad: "Oftalmologo",
    categoria: "oftalmologia",
    cantidad: 1,
    precio: 1200,
  },
  {
    id: 11,
    nombre: "Instituto Allende",
    localidad: "MDQ, Argentina",
    rate: 4.5,
    especialidad: "Imagenes",
    categoria: "resonancia",
    cantidad: 1,
    precio: 1200,
  },
  {
    id: 12,
    nombre: "Mariana Gimenez",
    localidad: "Ciudad de Buenos Aires, Argentina",
    rate: 4.5,
    especialidad: "Médica Clinica",
    categoria: "laboratorio",
    cantidad: 1,
    precio: 1200,
  },
  {
    id: 12,
    nombre: "Claudia Costa",
    localidad: "Cordoba, Argentina",
    rate: 4.5,
    especialidad: "Médica Clinica",
    categoria: "sesionesPsico",
    cantidad: 1,
    precio: 1200,
  },
  {
    id: 13,
    nombre: "Esteban Reyes",
    localidad: "Rosario, Argentina",
    rate: 4,
    especialidad: "Médica Clinica",
    categoria: "sesionesFkt",
    cantidad: 1,
    precio: 1200,
  },
  {
    id: 14,
    nombre: "Laboratorio Avenida",
    localidad: "Rosario, Argentina",
    rate: 4,
    especialidad: "Médica Clinica",
    categoria: "laboratorio",
    cantidad: 1,
    precio: 4200,
  },
];
export const gFetchProfesional = new Promise((res, rej) => {
  let condition = true;
  setTimeout(() => {
    if (condition) {
      res(profesionales);
    } else {
      rej("Error");
    }
  }, 3000);
});
