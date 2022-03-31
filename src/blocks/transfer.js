import Web3 from 'web3'
import { abi } from './smart-abi'

const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/16c217b0ee0748ecab03cc9de9f61461')

const web3 = new Web3(provider)

const bankContract = new web3.eth.Contract(abi, '0xa131AD247055FD2e2aA8b156A11bdEc81b9eAD95')

export default bankContract