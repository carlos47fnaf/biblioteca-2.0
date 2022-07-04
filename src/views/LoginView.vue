<template>
  <nav>
    <div class="container">
      <div class="title">
        <h2>Login de administrador</h2>
      </div>
    </div>
  </nav>
  <article>
    <div class="main-block">
      <h1>Login</h1>
      <form action="/">
        <div class="ne">
          <label id="icon" for="name"><i class="fas fa-user"></i></label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Usuário..."
            required
          />
          <label id="icon" for="name"><i class="fas fa-unlock-alt"></i></label>
          <input
            type="password"
            name="name"
            id="name"
            placeholder="Senha..."
            required
          />
        </div>
        <div class="btn-block">
          <RouterLink class="botao" to="/todos"
            ><button type="submit" href="/">Entrar</button></RouterLink
          >
        </div>
      </form>
    </div>
  </article>
</template>

<style scoped>
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
