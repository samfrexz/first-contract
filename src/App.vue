<template>
  <div>
    <BankTransfer />
  </div>
</template>

<script>
import BankTransfer from "./components/BankTransfer.vue"
export default {
  name: 'App',
  components: {
    BankTransfer
  },
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background: #f1f1f1;
}
</style>
