---
title: 'ethdevnews weekly #0'
description: 'Roman Storm jury deliberating, Justin Drake’s lean Ethereum, mainnet turns ten'
date: 'August 1 2025'
---

Roman Storm jury deliberating, Justin Drake’s lean Ethereum, mainnet turns ten

### All core devs (main protocol calls)

#### All core devs \- execution (ACDE) [\#217](https://ethereum-magicians.org/t/allcoredevs-execution-acde-217-july-31-2025/24840/2)

* [Fusaka](https://forkcast.org/upgrade/fusaka) upgrade:  
  * Ideally upgrade mainnet before [Devconnect](https://devconnect.org/) (November 17-22).  Confirm upgrade schedule & testnet order at ACDC  
  * [EIP7825](https://forkcast.org/upgrade/fusaka#eip-7825) 16.8M transaction gas limit cap: concerns on breaking some apps, decide if increase needed at ACDT   
  * PeerDAS balance per additional custody group: home & fractional staking concerns, decide if increase needed in Fusaka at ACDC  
* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade:  
  * Consensus layer headliner short list (from last ACDC): [EIP7732](https://forkcast.org/upgrade/glamsterdam#eip-7732) ePBS, [EIP7782](https://forkcast.org/upgrade/glamsterdam#eip-7782) 6-second slots, [EIP7805](https://forkcast.org/upgrade/glamsterdam#eip-7805) FOCIL  
  * [EIP7928](https://forkcast.org/upgrade/glamsterdam#eip-7928) Block-level Access Lists set to Considered for Inclusion (CFI), likely execution layer headliner if ACDC choose [EIP7732](https://forkcast.org/upgrade/glamsterdam#eip-7732) ePBS as consensus layer headliner

#### All core devs \- testing (ACDT) [\#46](https://ethereum-magicians.org/t/all-core-devs-testing-acdt-46-july-28-2025/24889/2)

* [Fusaka](https://forkcast.org/upgrade/fusaka) upgrade:   
  * [Fusaka-devnet-3](https://fusaka-devnet-3.ethpandaops.io/) live: testing MEV-Boost & [EIP7892](https://forkcast.org/upgrade/fusaka#eip-7892) blob parameter only upgrades  
  * [EIP7910](https://eips.ethereum.org/EIPS/eip-7910) eth\_config: spec refined

### Layer 1

* [EIP7732](https://forkcast.org/upgrade/glamsterdam#eip-7732) ePBS:   
  * Terence: [in defense of free option problem](https://hackmd.io/@tchain/in-defense-free-opt-problem)  
* [EIP7805](https://forkcast.org/upgrade/glamsterdam#eip-7805) FOCIL:  
  * FOCIL breakout [\#16](https://ethereum-magicians.org/t/focil-breakout-16-july-29th-2025-14-00-utc/24942): ePBS compatibility presentation  
  * [FOCIL changes in Execution Layer](https://hackmd.io/@jihoonsong/BJpcaudvex) & compatibility with EIP7928 Block-level Access Lists  
* [Code chunk analysis](https://ethresear.ch/t/ethereum-bytecode-and-code-chunk-analysis/22847): breaking up bytecode into smaller chunks is a viable option to reduce witness size as only small proportion of bytes & chunks are used

### Staking

* EthStaker [staking survey results](https://paragraph.com/@ethstaker/staking-survey-2025): 23% genesis stakers, 60% run 1-5 validators with own capital, 27% run validators rather than liquid staking to benefit the network  
* [Client diversity](https://clientdiversity.org/#distribution):  
  * Consensus layer: Lighthouse 42.7%  
  * Execution layer: Geth \~41%, Nethermind \~38% (estimated from 74% self reported)  
* [Staking marketshare](https://dune.com/hildobby/eth2-staking): Lido 24.8%  
* Client releases:  
  * Consensus layer  
    * Grandine [1.1.2](https://github.com/grandinetech/grandine/releases/tag/1.1.2): 45M default gas limit & optimizations  
    * Nimbus [v25.7.1](https://github.com/status-im/nimbus-eth2/releases/tag/v25.7.1): fixes potential syncing-related crash  
    * Teku [25.7.1](https://github.com/Consensys/teku/releases/tag/25.7.1): 45M default gas limit  
  * Execution layer  
    * Erigon [v3.0.15](https://github.com/erigontech/erigon/releases/tag/v3.0.15): bug fixes  
    * Nethermind [1.32.4](https://github.com/NethermindEth/nethermind/releases/tag/1.32.4): fix peer discovery

### Layer 2

* Linea [tokenomics](https://linea.build/blog/linea-is-ethereum): plan to burn ETH (20% of net income gas fees)

### Research

* Julian Ma: [in-protocol prover market proposal](https://ethresear.ch/t/an-ethereum-prover-market-proposal/22834), builders deposit a prize whilst building a block, anyone who submits a proof can claim a share of the prize in the next slot

---

### Sponsor: [Dev Tools Guild](https://devtoolsguild.xyz/intro)

![Dev Tools Guild](./dtg-banner.png)  
The Dev Tools Guild unites critical Ethereum developer tooling to collectively fund projects and their maintainers (think Protocol Guild but for dev tooling), and boost coordination between protocol and dev tools developers. 

Member projects:

* **Smart contract languages**: Solidity & Vyper  
* **Client libraries**: alloy, ethers.js, Nethereum, viem, web3.py & Web3j  
* **Frameworks and developer environments**: Ape, Foundry & Scaffold-ETH  
* **Standardization tooling**: Sourcify

Follow [@devtoolsguild](https://x.com/devtoolsguild), Visit [devtoolsguild.xyz](http://devtoolsguild.xyz), Fund at [donate.devtoolsguild.eth](https://devtoolsguild.xyz/donate)

---

### Ecosystem

* Justin Drake’s [lean Ethereum](https://blog.ethereum.org/2025/07/31/lean-ethereum) vision:  
  * Defense (fort mode): 100% uptime, survive anything (e.g. nation states & quantum computers)  
  * Offense (beast mode): gigagas L1, teragas L2, realtime zkVMs, DAS, beacon chain 2.0, blobs 2.0, EVM 2.0 & hash-based cryptography  
* Ethereum mainnet [turns ten](https://blog.ethereum.org/2025/07/30/ethereum-10-years):  
  * “[believe in somETHing](https://x.com/search?q=ethereum%20%22believe%20in%20somETHing%22%20until%3A2025-07-30%20since%3A2025-07-29&src=typed_query&f=top)” campaign on X  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 1.1 average, 0.2 \- 10.2 (16.3 for zero net issuance)  
  * [ETH supply change](https://ultrasound.money/): 17k net issuance  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): $3,619 – $3,934 (all time high $4,878, November 10, 2021\)  
  * [ETH ETFs](https://dune.com/hildobby/eth-etfs): 4.57% of ETH supply  
  * [ETHBTC](https://ratiogang.com/): 0.032 (0.165 for the Flippening)

### Developers

* Foundry:  
  * [v1.3.0](https://github.com/foundry-rs/foundry/releases/tag/v1.3.0): forge lint (built-in linter), invariant test time-based campaigns & coverage-guided fuzzing, table tests and improved EIP712 support  
  * Forge-std [v1.10.0](https://github.com/foundry-rs/forge-std/releases/tag/v1.10.0): added getRawBlockHeader, stopRecord, setSeed, EIP7702: attach/sign delegation and EIP712: hash struct/type/typed data  
* OpenZeppelin [Contracts MCP](https://blog.openzeppelin.com/introducing-contracts-mcp): generate contracts with AI using Contracts Wizard templates  
* Ethereum Community Foundation [BlobKit](https://github.com/ETHCF/blobkit#readme) (TypeScript): use blobs as ephemeral, verifiable data layer  
* Halmos (symbolic testing): [invariant testing guide](https://a16zcrypto.com/posts/article/modern-invariant-testing-with-halmos/)  
* [Content coin metadata](https://docs.base.org/cookbook/base-app-coins): find/load coins created via Zora & Uniswap v4 pool  
* Linda Xie: [vibe code a Farcaster mini app](http://notion.so/farcasterhq/How-to-vibe-code-a-Farcaster-mini-app-23c6a6c0c101809d8273f92a59b35b8a)  
* TrueBlocks [Create Local App](https://github.com/TrueBlocks/create-local-app/blob/main/README.md): Go-based scaffolding for TrueBlocks/Wails desktop apps
* Safe Research: [encryption in web3](https://safe.global/blog/safe-research-the-state-of-encryption-in-web3)  
* ERCs (application layer standards):  
  * [ERC7994](https://github.com/ethereum/ERCs/pull/1140/files): Purpose-bound ERC20 with multi-condition unlocking  
  * [ERC7995](https://github.com/ethereum/ERCs/pull/1143/files): Encrypted data
  * [ERC7996](https://github.com/ethereum/ERCs/pull/1146/files): Contract Feature Detection
* Reminder: [Holešky testnet being deprecated](https://blog.ethereum.org/2025/03/18/hoodi-holesky), migrate to Hoodi

### Security

* Base builders: [free security reviews](https://blog.base.dev/free-security-reviews) from Coinbase’s Protocol Security team   
* Arbitrum Audit Program [selected audit firms](https://forum.arbitrum.foundation/t/arbitrum-audit-program-audit-firms-application-process/29245/3) to provide subsidized contract audits

### Applications

* [Bring Argentina onchain](https://www.bringargentinaonchain.org/)
* CoW Swap [cross-chain swaps](https://cow.fi/learn/cow-dao-unveils-seamless-cross-chain-swaps) in a single transaction

### Enterprise

* PayPal [Pay with Crypto](https://newsroom.paypal-corp.com/2025-07-28-PayPal-Drives-Crypto-Payments-into-the-Mainstream,-Reducing-Costs-and-Expanding-Global-Commerce), including ETH & USDC, coming to US merchants  
* Visa [expands stablecoin support](https://usa.visa.com/about-visa/newsroom/press-releases.releaseId.21581.html) including PayPal USD & EURC

### Regulation

* Roman Storm trial: [jury deliberations](https://www.innercitypress.com/sdnytrial13stormtornadocryptoicp073125.html) continue Monday ([jury events to watch for](https://x.com/jchervinsky/status/1950963802737987753))  
  * [Free Roman Storm](https://freeromanstorm.com/) campaign  
* [Virgil Griffith](https://x.com/BrantlyMillegan/status/1947710278042304528) out of home confinement
* US President’s working group [digital asset report](https://www.whitehouse.gov/wp-content/uploads/2025/07/Digital-Assets-Report-EO14178.pdf)  
* US SEC:  
  * [Project Crypto](https://www.sec.gov/newsroom/speeches-statements/atkins-digital-finance-revolution-073125): modernize rules/regulations so financial markets can move onchain  
  * [In-kind creation/redemption](https://www.sec.gov/newsroom/press-releases/2025-101-sec-permits-kind-creations-redemptions-crypto-etps) permitted for crypto ETFs  
* ZachXBT: [Cameron Redman convicted](https://x.com/zachxbt/status/1950273651133034839) in relation to X account compromises

---

### Paid listings

* [abcoathup](https://x.com/abcoathup) seeks paid work.  DM to chat  
* Dev Tools Guild: [July update](https://devtoolsguild.xyz/blog/devtoolsguild-july-update)

*Listings: $100 in ETH/USDC (max 70 characters).  Email abcoathup at gmail*

---

### General

* WOO X [$14M stolen](https://rekt.news/woox-rekt): team members device compromised in phishing attack  
* PSE: [Metal MSM v2](https://pse.dev/blog/mopro-metal-msm-v2): GPU acceleration improvements for Multi-Scalar Multiplication on Apple devices  
* Trail of Bits: [exploiting end-of-life home network devices](https://blog.trailofbits.com/2025/07/25/exploiting-zero-days-in-abandoned-hardware/)

---

*Publisher: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethdevnews.com/ethdevnews-weekly-0](https://ethdevnews.com/ethdevnews-weekly-0)*  
*Extend ethdevnews limited run via [sponsorships, paid listings, grants & donations](http://ethdevnews.com/about/).*  
