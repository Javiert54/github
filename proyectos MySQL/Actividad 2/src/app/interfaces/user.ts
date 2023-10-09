export interface User {
    email: string,
    password: string,
    name?: string,
    lastName?: string,
    isProfessor?: boolean,
    cursosAsignados?: string
}