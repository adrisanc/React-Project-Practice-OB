export class User {
    nombre = '';
    apellido = '';
    email = '';
    conectado = false;

    constructor(name, lastName, email, conected){
        this.nombre = name;
        this.apellido = lastName;
        this.email = email;
        this.conectado = conected;
    }
}
