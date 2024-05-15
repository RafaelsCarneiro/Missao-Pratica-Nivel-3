import React, { useState, useEffect } from "react";
import { ControleLivros } from "../src/controle/ControleLivros";
import { ControleEditora } from "../src/controle/ControleEditora";

const controleLivro = new ControleLivros();
const controleEditora = new ControleEditora();

const LinhaLivro = ({ livro, excluir }) => {
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    const handleExcluir = () => {
        excluir(livro.codigo);
    };

    return (
        <tr>
            <td>
                <button onClick={handleExcluir} style={{ backgroundColor: "red",color:"white", borderRadius: "10px" }}>Excluir</button>
            </td>
            <td>{livro.codigo}</td>
            <td>{livro.titulo}</td>
            <td>{livro.resumo}</td>
            <td>{nomeEditora}</td>
            <td>
                <ul>
                    {livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
        </tr>
    );
};

const LivroLista = () => {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        setLivros(controleLivro.obterLivros());
        setCarregado(true);
    }, [carregado]);

    const handleExcluir = (codigoLivro) => {
        controleLivro.excluir(codigoLivro);
        setCarregado(false);
    };

    return (
        <main>
            <div style={{ backgroundColor: "#f2f2f2", padding: "20px", margin: "auto", maxWidth: "900px", borderRadius: "10px" }}>
                <h1 style={{ textAlign: "center" }}>Lista de Livros</h1>
                <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px" }}>
                    <table style={{ width: "100%" }}>
                        <thead>
                            <tr>
                                <th style={{ width: "10%" }}></th>
                                <th style={{ width: "20%" }}>Título</th>
                                <th style={{ width: "20%" }}>Resumo</th>
                                <th style={{ width: "30%" }}>Editora</th>
                                <th style={{ width: "30%" }}>Autores</th>
                            </tr>
                        </thead>
                        <tbody>
                            {livros.map(livro => (
                                <LinhaLivro
                                    key={livro.codigo}
                                    livro={livro}
                                    excluir={handleExcluir}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
};


export default LivroLista;
