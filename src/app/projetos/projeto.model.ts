export interface ProjetoModel{
    foto: string;
    status: boolean;
    data: string;
    cliente: {
        _id: string;
        nome: string;
        email: string;
    };
    tituloProjeto: string;
    descricaoProjeto: string;
    preco: string;
    usuario: string;
    _id: any;
}