<script>
import { v4 as uuid } from "uuid";
export default {
  data() {
    return {
      novo_livro: "",
      livros: [
        {
          id: "1299338b-ac89-439f-a60e-fa66aa3ef68d",
          nome: "livro 3",
          autor: "autor3",
          categoria: "categoria3",

          sinopse: "vuoasogosafgafigaougao",
        },
      ],
      novo_autor: "",
      novo_categoria: "",
      novo_sinopse: "",
    };
  },
  methods: {
    salvar() {
      if (this.novo_livro !== "") {
        const novo_id = uuid();
        this.livros.push({
          id: novo_id,
          nome: this.novo_livro,
          sinopse: this.novo_sinopse,
          autor: this.novo_autor,
          categoria: this.novo_categoria,
        });
        this.novo_livro = "";
      }
    },
    excluir(livro) {
      const indice = this.livros.indexOf(livro);
      this.livros.splice(indice, 1);
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamentos de livros</h2>
    </div>
    <div class="form-input">
      <input
        type="text"
        placeholder="procurar livro"
        v-model="novo_livro"
        @keyup.enter="salvar"
      />
      <input type="text" placeholder="autor" v-model="novo_autor" />
      <select>
        <option value="valor1">aventura</option>
        <option value="valor2">ação</option>
        <option value="valor3">terror</option>
      </select>
      <textarea
        name="sinopse"
        placeholder="Escreva a sinopse..."
        v-model="novo_sinopse"
      ></textarea>
      <button @click="salvar">salvar</button>
    </div>

    <div class="list-livros">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>AUTOR</th>
            <th>CATEGORIA</th>
            <th>SINOPSE</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="livro in livros" :key="livro.id">
            <td>{{ livro.id }}</td>
            <td>{{ livro.nome }}</td>
            <td>{{ livro.categoria }}</td>
            <td>{{ livro.autor }}</td>
            <td>
              {{ livro.sinopse }}
              <button @click="excluir(livro)">🗑️</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped>
textarea {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: #000000 1px solid;
  border-radius: 10px;
}

.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.main-block {
  border: black 7px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  height: 400px;
  padding: 12px;
  background-color: #f3f0f0;
  text-align: center;
  align-items: center;
  margin-left: 37%;
}

.ne {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.btn-block button {
  background-color: black;
  font-weight: bold;
  color: white;
  border: black 1px solid;
  border-radius: 5px;
  height: 2rem;
  width: 4rem;
  font-size: 17px;
}

input {
  margin-bottom: 1%;
  height: 3rem;
  width: 26rem;
  font-size: 17px;
}

h2 {
  font-weight: bold;
}
.container {
  align-items: center;
  text-align: center;
}
h1 {
  font-size: 30px;
}
</style>
