<script>
import { v4 as uuid } from "uuid";
</script>
<template>
    <h1>hello

    </h1>
    <article>
        <div class="main-block">
            <h1>Cadastro de novo Livro</h1>
            <form action="/">
                <div class="ne">
                    <label id="icon" for="name"><i class="fas fa-user"></i></label>
                    <input type="text" name="name" id="name" placeholder="Nome do livro.." required />
                    <label id="icon" for="name"><i class="fas fa-unlock-alt"></i></label>
                    <textarea name="sinopse" id="" cols="30" rows="10" placeholder="Sinopse..." required></textarea>
                </div>
                <div class="btn-block">
                    <button type="submit" href="/todos">Cadastrar</button>
                </div>
            </form>
        </div>
    </article>
</template>
<style scoped>
article {
    border: black 3px solid;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 20px;
    height: 20rem;
    width: 40rem;
    align-items: center;
}

textarea {
    height: 3rem;
    width: 400px;
}

input {
    height: 2rem;
    width: 400px;
    margin-bottom: 1rem;
}
</style>