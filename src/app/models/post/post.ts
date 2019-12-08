export class Post {
    _id?: string;
    autorPublicacion?: string;
    createdAt?: string;
    tipoPublicacion?: boolean;
    contenido?: string;
    tags?: [{
        tag?:string
    }];
    comentarios?: [{
        texto?: string;
        createdAt?: String;
        autor?: string;
    }];
}
