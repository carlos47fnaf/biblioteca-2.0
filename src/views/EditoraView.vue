<script>
import { v4 as uuid } from "uuid"; export default {
    data() {
        return {
            novo_editora: "",
            editoras: [
                { id: "e1e888b8-da5a-47f2-9587-756941736758", nome: "editora 1", },
                { id: "c63c3202-167c-42ba-9376-25154db6938f", nome: "editora 2", },
                { id: "1299338b-ac89-439f-a60e-fa66aa3ef68d", nome: "editora 3", },
            ],

        };
    },
    methods: {
        salvar() {
            if (this.novo_editora !== "") {
                const novo_id = uuid();
                this.editoras.push({
                    id: novo_id,
                    nome: this.novo_editora,
                    sinopse: this.novo_sinopse,
                });
                this.novo_editora = "";
            }
        },
        excluir(editora) {
            const indice = this.editoras.indexOf(editora);
            this.editoras.splice(indice, 1);
        },
    },
};
</script>
<template>
    <div class="container">
        <div class="title">
            <h2>Gerenciamentos de editoras</h2>
        </div>
        <div class="form-input">
            <input type="text" placeholder="adicionar editora..." v-model="novo_editora" @keyup.enter="salvar" />
            <button @click="salvar">salvar</button>
        </div>
        <div class="list-editoras">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="editora in editoras" :key="editora.id">
                        <td>{{ editora.id }}</td>
                        <td>{{ editora.nome }}</td>
                        <td>
                            <button @click="excluir(editora)">🗑️</button>
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