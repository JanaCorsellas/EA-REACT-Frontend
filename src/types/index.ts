export interface User {
    _id?: string;
    name: string;
    age: number;
    email?: string;
    password?: string;
    phone?: number;
}

export interface UpdateResponse {
    acknowledged: boolean;
    modifiedCount: number;
    upsertedCount: number;
    matchedCount: number;
    upsertedId: null | string;
}


/*
// EXEMPLE SI LA API ENS RETORNES ATRIBUTS AMB DIF NOM DEL NOSTRE
export type UsersResponseFromApi = Array<{
    nombre: string;
    edad: number;
    correo?: string;
}>;
*/
