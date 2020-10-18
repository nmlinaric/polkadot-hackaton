const {ApiPromise, WsProvider} = require('@polkadot/api');

async function main() {
    console.log("Connecting to Polkadot network...")
    const provider = new WsProvider('wss://rpc.polkadot.io');
    const api = await ApiPromise.create({ provider });

    console.log("Retrieving latest block...");
    const block = await api.rpc.chain.getBlock()

    console.log(`Latest block is: ${JSON.stringify(block, undefined, 2)}`);
}

main()
    .then(() => process.exit(0))
    .catch(console.error);