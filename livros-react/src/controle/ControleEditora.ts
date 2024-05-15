import { Editora } from "../modelo/Editora";


const editoras: Array<Editora> = [
    new Editora(1, "Editora A"),
    new Editora(2, "Editora B"),
    new Editora(3, "Editora C")
];

class ControleEditora {
    constructor() {}

    // c) Criar a classe ControleEditora com os métodos getNomeEditora e getEditoras
    // d) Implementar o método getEditoras, com o retorno do vetor editoras
    getEditoras(): Array<Editora> {
        return editoras;
    }

    // e) Implementar o método getNomeEditora, recebendo codEditora e retornando o nome da editora
    getNomeEditora(codEditora: number): string | undefined {
        const editora = editoras.find(e => e.codEditora === codEditora);
        return editora ? editora.nome : undefined;
    }
}

export { ControleEditora };