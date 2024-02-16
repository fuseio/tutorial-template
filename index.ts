import "dotenv/config"
import { FuseSDK } from '@fuseio/fusebox-web-sdk'
import { Address, Hash, concat, createClient, createPublicClient, encodeFunctionData, http, Hex } from "viem"
import { generatePrivateKey, privateKeyToAccount, signMessage } from "viem/accounts"
import { lineaTestnet, polygonMumbai, sepolia } from "viem/chains"
import { writeFileSync } from 'fs'
import { ethers } from 'ethers'

console.log("Hello world!")