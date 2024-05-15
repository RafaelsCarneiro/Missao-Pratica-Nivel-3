import { Livro } from "../modelo/Livros";

// a) Importar a classe Livro
// b) Definir a variável livros como Array<Livro> com pelo menos três elementos
const livros: Array<Livro> = [
    new Livro(1, 1, "Livro 1", "Resumo do Livro 1", ["Autor 1", "Autor 2"]),
    new Livro(2, 2, "Livro 2", "Resumo do Livro 2", ["Autor 3", "Autor 4"]),
    new Livro(3, 3, "Livro 3", "Resumo do Livro 3", ["Autor 5", "Autor 6"])
];

class ControleLivros {
    constructor() {}

    // c) Criar a classe ControleLivros com os métodos obterLivros, incluir e excluir
    // d) Implementar o método obterLivros, com o retorno do vetor livros
    obterLivros(): Array<Livro> {
        return livros;
    }

    // e) Implementar o método incluir, recebendo um objeto do tipo Livro
    incluir(livro: Livro): void {
        const codigo = livros.length > 0 ? livros[livros.length - 1].codigo + 1 : 1;
        livro.codigo = codigo;
        livros.push(livro);
    }

    // f) Implementar o método excluir, recebendo um código numérico
    excluir(codigoLivro: number): void {
        const index = livros.findIndex(livro => livro.codigo === codigoLivro);
        if (index !== -1) {
            livros.splice(index, 1);
        }
    }
}

export { ControleLivros };
