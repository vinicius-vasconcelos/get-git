<template>
  <main v-if="this.$store.state.status">
    <section class="avatar">
      <div class="foto">
        <img :src="this.$store.state.usuario.avatar" alt="Foto do usuário" />
      </div>

      <h2>{{this.$store.state.usuario.nome}}</h2>
      <small>{{this.$store.state.usuario.bio}}</small>
    </section>

    <section class="repositorios">
      <ListItem
        v-for="(rep, index) in this.$store.state.usuario.repositorios"
        :key="index"
        :item="rep"
      />
    </section>
  </main>
</template>

<script>
import ListItem from '@/components/ListItem.vue';
export default {
  name: 'MainData',
  components: {
    ListItem
  }
}
</script>

<style scoped>
main {
  max-width: 900px;
  min-height: 500px;
  margin: 40px auto;
  padding: 40px;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 20px;
  background-color: #24292e;
  color: #cacaca;
  box-shadow: 5px 5px 3px 0px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
}

img {
  display: block;
  max-width: 100%;
}

.foto,
.foto img {
  border-radius: 50%;
  margin-bottom: 20px;
}

.repositorios {
  height: 450px;
  overflow-y: auto;
}

@media screen and (max-width: 900px) {
  main {
    margin: 40px 20px;
  }
}

@media screen and (max-width: 700px) {
  main {
    grid-template-columns: 1fr;
  }
}
</style>