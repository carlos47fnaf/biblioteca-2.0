<script></script>
<template>
  <header class="menu-superior">
    <div class="menu-esquerdo">
      <span>Setor de livros</span>
    </div>

    <div class="menu-direito">
      <span>
        <RouterLink class="botao" to="/">Sair </RouterLink>
      </span>
    </div>
  </header>
</template>

<style>
header.menu-superior {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
header .menu-direito {
  margin-right: 5%;
}
.botao {
  text-decoration: none;
  color: white;
  display: inline-block;

  transition: 0.25s;
}

header span {
  padding: 0 20px;
}

.botao:hover {
  color: rgb(44, 44, 44);
  transform: scale(1.1);
}
</style>
