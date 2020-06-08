<template>
  <header>
    <div class="controles">
      <input
        v-model="search"
        id="search"
        name="search"
        type="text"
        placeholder="Pesquise pelo nome..."
        @keypress.enter="pesquisar"
      />
      <input type="button" @click.prevent="pesquisar" />
    </div>
  </header>
</template>

<script>

export default {
  name: 'NavBarMenu',
  data() {
    return {
      search: '',
      usu: null
    }
  },
  methods: {

    pesquisar() {
      fetch(`https://api.github.com/users/${this.search}`)
        .then(r => r.json())
        .then(obj => {
          fetch(`https://api.github.com/users/${this.search}/repos`)
            .then(r => r.json())
            .then(reps => {
              const objUsu = {
                nome: obj.name,
                bio: obj.bio,
                avatar: obj.avatar_url,
                repositorios: reps
              }
              this.$store.dispatch('preencherObjUsuario', objUsu)
            })
        })

    }
  }
}
</script>

<style scoped>
header {
  width: 100%;
  padding: 20px;
  background-color: #24292e;
  display: flex;
  justify-content: center;
  align-items: center;
}

.controles {
  width: 900px;
  text-align: center;
  transition: all 0.3s ease-in-out;
  position: relative;
}

header input {
  width: 100%;
  height: 3em;
  padding: 10px;
  background: #404448;
  color: #cacaca;
  border: none;
  border-radius: 5px;
  outline: none;
}

header input::placeholder {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1.2em;
  color: #cacaca;
}

header input[type="button"] {
  width: 3em;
  height: 3em;
  background: #404448 url("../assets/search.svg") no-repeat center center;
  text-indent: -150px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
}

.controles:hover,
.controles:focus {
  transform: scale(1.1);
}
</style>