//js

import Nav from './nav';
var nav = new Nav();

import Home from './home';
var home = new Home();

import Settings from './settings';
var settings = new Settings();

import Accounts from './accounts';
var accounts = new Accounts();


import Transfer from './transfer';
var transfer = new Transfer();

import AccountAdd from './account_add';
var accountAdd = new AccountAdd();

import AccountImport from './account_import';
var accountImport = new AccountImport();

import SocketClient from './socketclient';
var socketClient = new SocketClient();

import AccountNew from './account_new';
var accountNew = new AccountNew();

import TXSidebar from './tx_sidebar';
var txSidebar = new TXSidebar();

function init()
{
  nav.init();
  socketClient.init();

  if(document.getElementById("tx-sidebar")){
    txSidebar.init();
  }

  if(document.getElementById("home")){
    home.init();
  }

  if(document.getElementById("settings")){
    settings.init(socketClient);
  }

  if(document.getElementById("accounts")){
    accounts.init(socketClient,txSidebar);
  }

  if(document.getElementById("transfer")){
    transfer.init(socketClient,txSidebar);
  }

  if(document.getElementById("add-account")){
    accountAdd.init();
  }

  if(document.getElementById("import-account")){
    accountImport.init(socketClient);
  }

  if(document.getElementById("new-account")){
    accountNew.init(socketClient);
  }


}




init();
