<template>
  <div class="list-item">
    <h3 class="nome">{{item.name}}</h3>
    <small>{{item.description}}</small>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: ['item']
}
</script>

<style scoped>
.list-item {
  width: 98%;
  background: #404448;
  margin-bottom: 10px;
  padding: 20px;
  box-shadow: 5px 5px 3px 0px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
}

small {
  margin-top: 400px;
}
</style>