require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note often modify grid gloom surround slim'; 
let testAccounts = [
"0x27164c16ad9a723a95f5c52aaf945fb200a541a0f5b94a8a9817fc3d06087fc9",
"0x8a86603866c555f0c370525cfd14df65fb614b5f1aa03a3787cdf2c4c99609ee",
"0xd65ed7899b3cf6df3760e0d402e97d8f5c84f9204a8797b7202ff1e1527bbf10",
"0xb208aae32ce5a05ff9f0d55141ff6a148c3e77590d4f80a96e38832b32987f1f",
"0x62ad2d9c0d871eb209ba69322ea1e64a4e74ce3e2bbf04ebf2e5f2e94c8ee381",
"0x336dc827e73e44befc8e084cb805fc692a9dad701ee88e8fcd8ae1e86f97b4c0",
"0x7c083403d2e07e5aa983f0023a7840de933959137d118bfb001bc234829b87d4",
"0x45ae34a47e1065ee69274395dec2e3249ea2e49dd5482cb90a90c650cb1e0a78",
"0xb103aae2f0d3822aca3536959ea620b205118213284272e21d10b4913f4cf761",
"0xd64770a93589274cb841090577f3c5d1b7799974af045cadcd68867493484414"
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
            gas: 3000000,
            gasPrice: 470000000000,
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


