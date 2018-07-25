

var fs = require('fs');

var token_contract_abi = require('./contracts/ERC20Interface.json').abi;
var lava_contract_abi = require('./contracts/LavaWallet.json').abi;

const WalletHelper = require('./wallet-helper')
const AccountHelper = require('./account-helper')
const StorageHelper = require('./storage-helper')

const Web3 = require('web3')




module.exports =  class NetworkHelper {


    constructor( ){

    }




    static async getAccountInfo(address)
    {

      var settings = await WalletHelper.getStoredSettings();
      var web3 = new Web3()
      web3.setProvider(settings.web3Provider)
      console.log('using web3',settings.web3Provider)

      var tokenAddress = settings.tokenAddress;
      var tokenDecimals = settings.tokenDecimals;

      var tokenContract = new web3.eth.Contract(token_contract_abi,tokenAddress);

      var ethBalance = await web3.eth.getBalance(address);
      var tokenBalance = await tokenContract.methods.balanceOf(address).call()
      var lavaBalance = await lavaContract.methods.balanceOf(tokenAddress,address).call()

      ethBalance = (parseFloat(ethBalance)/ Math.pow(10,18))
      tokenBalance = (parseFloat(tokenBalance ) / Math.pow(10,tokenDecimals))
      lavaBalance = (parseFloat(lavaBalance ) / Math.pow(10,tokenDecimals))


      var lavaContractAddress = settings.lavaContractAddress;
      var lavaContract = new web3.eth.Contract(lava_contract_abi,lavaContractAddress);




      var accountInfo = {
        ethBalance:ethBalance,
        tokenBalance: tokenBalance,
        userAddress:address,
        lavaBalance:lavaBalance
      }


      return accountInfo;
      //use web3 and hit the provider :D
    }




}
