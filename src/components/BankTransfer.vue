<template>
  <div>
    <header>
      <nav>
        <div>
          <h1>Smart</h1>
        </div>
        <div>
          <button @click="connectWallet"> Connect Wallet </button>
        </div>
      </nav>
    </header>

    <main>
      <div class="container">
        <p v-if="errorStatus">Error: {{ errorStatus }} </p>
        <p> {{ transaction }} </p>
      </div>
      <div class="container">
        <form>
          <p>name </p>
          <input type="text" name="" id="">
          <input type="text" name="" id="">
          <input type="text" name="" id="">
        </form>
      </div>
    </main>
  </div>
</template>
<script>
import Web3 from 'web3';
import web3 from 'web3'
import { abi } from '@/blocks/smart-abi';
export default {
  name: 'BankTransfer',
  data() {
    return {
      web3: null,
      errorStatus: '',
      transaction: '',
    }
  },
  methods: {
    async connectWallet() {
      if (window.ethereum) {
        try {
          await window.ethereum.request({method: "eth_requestAccounts"})
          this.web3 = new Web3(window.ethereum)
        } catch (err) {
          this.errorStatus = err.message
        }
      } else {
        alert('kindly install Metamask as an extension on your browser')
      }
    },
    
    async getTransaction() {
      let trans = new web3.eth.Contract(abi, '0xf8e81D47203A594245E36C48e151709F0C19fBe8')
      this.transaction = await trans.methods.transferFrom().call()
      console.log(this.transaction)
    },
    // updateTransaction(status) {
    //   this.transaction = status
    // },
  },
 mounted() {
   this.getTransaction()
 },
}
</script>
<style lang="scss" scoped>
header {
  width: 100%;
  height: 12vh;
  background: #333;
  nav {
    width: 87%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    h1 {
      font-size: 28px;
      font-weight: bold;
    }
    button {
      border: 2px solid #fff;
      background: #333;
      color: #fff;
      padding: 12px 20px;
      border-radius: 12px;
      font-size: 16px;
      cursor: pointer;
    }
  }
}
main {
  width: 100%;
  .container {
    width: 87%;
    margin: 0 auto;
    form {
      width: 30%;
      margin: 20px 0;
      input {
        border: 1px solid #333;
        outline: none;
        margin: 18px 0;
        display: block;
        padding: 7px;
        border-radius: 7px;
        width: 100%;
      }
    }
  }
}
</style>