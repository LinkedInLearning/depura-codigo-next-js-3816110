export type Usuario = {
    idUnico: number,
    nombreCompleto: string,
    nombreUsuario: string,
    ciudad: string
};

export type Post = {
    idPost: number,
    usuario: Usuario,
    imagenUrl: string,
    descripcion: string,
    comentarios: string[],
    totalMeGusta: number
};
