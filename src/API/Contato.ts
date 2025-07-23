export class ContatoClass {

    id: number;
    nome: string;
    endereco: string;
    email: string;
    telefone: number;

    constructor(id: number, nome: string, endereco: string, email: string, telefone: number){
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
        this.email = email;
        this.telefone = telefone;
    }
}


