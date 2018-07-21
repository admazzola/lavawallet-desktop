





const INFURA_MAINNET = "https://mainnet.infura.io/kZjd4ib8d7TnDMhYzjy4"

const AccountHelper = require('./account-helper')
const StorageHelper = require('./storage-helper')



  var pjson = require('../package.json');

module.exports =  class WalletHelper {


    constructor( ){

    }


    static async initSettings()
    {
      var defaultSettings = {
        web3Provider: INFURA_MAINNET,
        tokenName: "0xBTC",
        tokenAddress: "0xb6ed7644c69416d67b522e20bc294a9a9b405b31",
        tokenDecimals: 8,
        lavaContractAddress: "0x69a02e511e027e5c26d2fbe4192e45b41db32819",
        lavaRelayURL: "http://relay.lavawallet.io:3000"
      }

      var settingsExists = await StorageHelper.hasFile('settings');


      if(!settingsExists)
      {
        StorageHelper.storeFile('settings',defaultSettings);
      }else{
        console.log('found settings', await WalletHelper.getStoredSettings())
      }
    }

    static async   getWalletInfo()
    {

      var settings = await WalletHelper.getStoredSettings();

      return {
        storagePath: StorageHelper.getStoragePath(),
        version: pjson.version,
        tokenName: settings.tokenName,
        tokenAddress: settings.tokenAddress,
        web3Provider: settings.web3Provider,
        lavaContractAddress: settings.lavaContractAddress
      }

    }



    static async getStoredSettings()
    {
      var settings = await StorageHelper.readFile('settings');
      return settings;
    }




}
