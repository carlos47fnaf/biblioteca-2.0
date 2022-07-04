<script></script>
<template>
  <aside id="sidenav">
    <section>
      <article>
        <div class="usuario">
          <div class="nome">
            <div class="use">
              <h2>Usuário</h2>
            </div>
            <div class="id_use">ID:01020304</div>
          </div>
        </div>
      </article>
      <ul>
        <RouterLink to="/todos">
          <li>todos os livros</li>
        </RouterLink>
        <RouterLink to="/categorias">
          <li>categorias</li>
        </RouterLink>
        <RouterLink to="/editora">
          <li>Editora</li>
        </RouterLink>
        <RouterLink to="/estatisticas">
          <li>estatisticas</li>
        </RouterLink>
        <RouterLink to="/Autor">
          <li>autores</li>
        </RouterLink>
      </ul>
    </section>
  </aside>
</template>
<style scoped>
h2 {
  color: black;
  margin-left: 10px;
}
.usuario {
  display: flex;
  flex-direction: column;
  border: black solid 1px;
  width: 20rem;
  border-right: none;
  border-top: none;
}

ul a {
  color: black;
}

#sidenav {
  border: black solid 1px;
  display: flex;
  flex-direction: column;
  width: 20rem;
  border-top: none;
}
.id_use {
  margin-left: 10px;
}
</style>
