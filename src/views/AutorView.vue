<script>
import { v4 as uuid } from "uuid"; export default {
    data() {
        return {
            novo_autor: "",
            autores: [
                { id: "e1e888b8-da5a-47f2-9587-756941736758", nome: "autor 1", },
                { id: "c63c3202-167c-42ba-9376-25154db6938f", nome: "autor 2", },
                { id: "1299338b-ac89-439f-a60e-fa66aa3ef68d", nome: "autor 3", },
            ],

        };
    },
    methods: {
        salvar() {
            if (this.novo_autor !== "") {
                const novo_id = uuid();
                this.autores.push({
                    id: novo_id,
                    nome: this.novo_autor,
                });
                this.novo_autor = "";
            };
        },
        excluir(autor) {
            const indice = this.autores.indexOf(autor);
            this.autores.splice(indice, 1);
        },
    },
};
</script>
<template>
    <div class="container">
        <div class="title">
            <h2>Gerenciamentos de autors</h2>
        </div>
        <div class="form-input">
            <input type="text" placeholder="adicionar autor..." v-model="novo_autor" @keyup.enter="salvar" />
            <button @click="salvar">salvar</button>
        </div>
        <div class="list-autores">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>AUTOR</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="autor in autores" :key="autor.id">
                        <td>{{ autor.id }}</td>
                        <td>{{ autor.nome }}</td>
                        <td>
                            <button @click="excluir(autor)">🗑️</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<style scoped>
.form-input input {
  width: 50%;
  border: 1px solid black;
  border-radius: 10px;
  padding: 0 0.5rem;
  height: 40px;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.form-input button {
  height: 40px;
  margin-bottom: 1rem;
  background-color: #000000;
  font-weight: bold;
  color: white;
  border: 1px solid black;
  border-radius: 10px;
  width: 15%;
  font-size: 20px;
}
</style>