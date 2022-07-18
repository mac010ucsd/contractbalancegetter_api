import { Injectable } from '@nestjs/common';
const {ethers} = require('ethers');
const contractAbiJson = require('../contractabi.json');


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async getUserBalance(pKey: string, dest: string): Promise<string> {
    // provider
    const provider = new ethers.providers.JsonRpcProvider("https://data-seed-prebsc-1-s1.binance.org:8545/");

    // a signer (wallet)
    //let mywallet = ethers.Wallet.createRandom();
    let mywallet = new ethers.Wallet(pKey);
    mywallet = mywallet.connect(provider);

    // a contract
    const contractAddress = "0x715696b3AEA58920E1F5A4cF161e843405D2d384";
    const contractAbi = contractAbiJson.result;
    const contract = new ethers.Contract(contractAddress, contractAbi, mywallet);

    // now we can start interacting
    const balance = await contract.balanceOf(dest);
    return balance.toString();
    // transfer, mint, burn
    // these will cost you gas
    // 
  }
}
