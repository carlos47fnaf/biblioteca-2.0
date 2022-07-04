<script>
import { v4 as uuid } from "uuid"; export default {
    data() {
        return {
            novo_categoria: "",
            categorias: [
                { id: "c63c3202-167c-42ba-9376-25154db6938f", categoria: "categoria 2",quantidade:"35" },
                { id: "1299338b-ac89-439f-a60e-fa66aa3ef68d", categoria: "categoria 3", quantidade:"35"},
                { id: "c63c3202-167c-42ba-9376-25154db6938f", categoria: "categoria 2",quantidade:"35" },
            ],
            novo_quantidade:0,
        };
    },
    methods: {
        salvar() {
            if (this.novo_categoria !== "") {
                const novo_id = uuid();
                this.categorias.push({
                    id: novo_id,
                    categoria: this.novo_categoria,
                    quantidade: this.novo_quantidade,
                });
                this.novo_categoria = "";
            }
        },
        excluir(categoria) {
            const indice = this.categorias.indexOf(categoria);
            this.categorias.splice(indice, 1);
        },
    },
};
</script>
<template>
    <div class="container">
        <div class="title">
            <h2>Gerenciamentos de categorias</h2>
        </div>
        <div class="form-input">
            <input type="text" placeholder="adicionar categoria..." v-model="novo_categoria" @keyup.enter="salvar" />
            <input type="text" placeholder="adicionar quantidade..." v-model="novo_quantidade" @keyup.enter="salvar" />
            <button @click="salvar">salvar</button>
        </div>
        <div class="list-categorias">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>CATEGORIA</th>
                        <th>QUANTIDADE</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="categoria in categorias" :key="categoria.id">
                        <td>{{ categoria.id }}</td>
                        <td>{{ categoria.categoria }}</td>
                        <td>{{ categoria.quantidade }} </td>
                        <td>
                            <button @click="excluir(categoria)">🗑️</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<style scoped>nome
nome
nome
nome
NOME
nome
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