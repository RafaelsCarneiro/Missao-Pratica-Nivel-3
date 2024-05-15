// LivroDados.js
import React, { useState } from "react";
import { ControleLivros } from "./controle/ControleLivros";
import { ControleEditora } from "./controle/ControleEditora";
import { useNavigate } from "react-router-dom";

const LivroDados = () => {
    const controleLivro = new ControleLivros();
    const controleEditora = new ControleEditora();
    const navigate = useNavigate();

    const opcoes = controleEditora.getEditoras().map(editora => ({
        value: editora.codEditora,
        text: editora.nome
    }));

    const [titulo, setTitulo] = useState("");
    const [resumo, setResumo] = useState("");
    const [autores, setAutores] = useState("");
    const [codEditora, setCodEditora] = useState(opcoes[0].value);

    const tratarCombo = (event) => {
        setCodEditora(Number(event.target.value));
    };

    const incluir = (event) => {
        event.preventDefault();
        const livro = {
            codigo: 0,
            titulo: titulo,
            resumo: resumo,
            autores: autores.split("\n"),
            editora: codEditora
        };
        controleLivro.incluir(livro);
        navigate("/");
    };

    return (
        <main>
    <h1>Adicionar Livro</h1>
    <form onSubmit={incluir} style={{ display: "flex", alignItems: "left", flexDirection:"column" }}>
        <div style={{ marginBottom: "20px" }}>
            <label>Título:</label>
            <br />
            <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} style={{width:"100%", borderRadius:"10px"}}/>
        </div>
        <div style={{ marginBottom: "20px" }}>
            <label>Resumo:</label>
            <br />
            <input type="text" value={resumo} onChange={(e) => setResumo(e.target.value)} style={{width:"100%", height:"100px", borderRadius:"10px"}} />
        </div>
        <div style={{ marginBottom: "20px" }}>
            <label>Autores:</label>
            <br />
            <textarea value={autores} onChange={(e) => setAutores(e.target.value)} style={{width:"100%", height:"90px", borderRadius:"10px"}}/>
        </div>
        <div style={{ marginBottom: "20px" }}>
            <label>Editora:</label>
            <br />
            <select value={codEditora} onChange={tratarCombo} style={{width:"100%", borderRadius:"10px"}}>
                {opcoes.map(opcao => (
                    <option  key={opcao.value} value={opcao.value} >{opcao.text}</option >
                ))}
            </select>
        </div>
        <button type="submit" style={{ backgroundColor: "blue", borderRadius: "10px", color:"white", width:"150px", height:"50px" }}>Adicionar Livro</button>
    </form>
</main>



    );
};

export default LivroDados;
