require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good slice obscure suspect normal note six prosper install open foster gasp'; 
let testAccounts = [
"0xbbf5b666d8a0f50ed08d1f7eb7941fc2939b62e07c2e640ddcf25937da007585",
"0x08382cf7ecabdf216f02430dda0fca4f54ccaddd2354af2b9fba065f85349d40",
"0x15b45a01f74899fc1b1f509f4cc7190fbebcb0c98b7dc1827a951498f8c3d992",
"0xf6b8a81e84856307db564d5e996d41173d659594f6771e5afed769058a0770a3",
"0xe165789fe9112c986162a2a9a5f7c7a2d8adadcbc79e7e409360b53c7ce46591",
"0xccd939a776817e1e83dcb0a070d9f273738d634a5b3ee27472baf6be02f700af",
"0x50d74f7a09099f6bba61b3cd893ce8b153e7c807e7fa9a4f38f8e1ce8bf364cd",
"0x7cb6258e0e1e398c40ea6a424a217f43bc98a58757a8bd7ab07b5e92527d8614",
"0x4f1f026e4679fb026f986a84fceb0bc48337355315e5f985f9f1f7f538b5206a",
"0xeaa7577747733f2c62ba569ecc205df968effe88ca63d5f37681fd7fede380df"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


