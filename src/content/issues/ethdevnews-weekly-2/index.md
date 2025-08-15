---
title: 'ethdevnews weekly #2'
description: ''
date: 'August 15 2025'
---

Fede donated $500k to free Roman Storm, Hardhat 3 beta, malicious IDE extensions

### All core devs (main protocol calls)

#### All core devs \- execution (ACDE) [\#218](https://ethereum-magicians.org/t/all-core-devs-execution-acde-218-august-14-2025/24979/2)

* [Fusaka](https://forkcast.org/upgrade/fusaka) upgrade:  
  * [Fusaka-devnet-4](https://fusaka-devnet-4.ethpandaops.io/): issues found in execution layer (differences in BPO update fraction calculation) & consensus layer (syncing)  
  * Fusaka-devnet-5 planned for next week  
* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade:  
  * Targeting June 2026  
  * Headliners confirmed: [EIP7732](https://forkcast.org/upgrade/glamsterdam#eip-7732) ePBS (consensus layer) & [EIP7928](https://forkcast.org/upgrade/glamsterdam#eip-7928) Block-level Access Lists (execution layer)  
  * [Non-headliner EIPs can be proposed for inclusion](https://eips.ethereum.org/EIPS/eip-7773#proposed-for-inclusion), deadline is Fusaka mainnet releases  
  * [EIP7928](https://forkcast.org/upgrade/glamsterdam#eip-7928) Block level access lists spec discussion: include state read locations, use RLP rather than SSZ and system contract handling  
* Proposal to repurpose safe block tag to point to fast confirmed block

#### All core devs \- testing (ACDT) [\#48](https://ethereum-magicians.org/t/all-core-devs-testing-acdt-48-aug-11-2025/25017/2)

* [Fusaka](https://forkcast.org/upgrade/fusaka) upgrade: [Fusaka-devnet-3](https://fusaka-devnet-3.ethpandaops.io/) non-finality testing  
* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade: Meta EIP for repricing required

### Layer 1

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade:  
  * [blockaccesslist.xyz](https://blockaccesslist.xyz/): info website for EIP7928 Block-level Access Lists  
  * EIP7805 FOCIL breakout [\#17](https://ethereum-magicians.org/t/focil-breakout-17-august-12-2025/25067): need to rebase on top of Fulu  
* Stateless call [\#40](https://stateless.fyi/development/sic-calls/history.html#call-40-august-11-2025): binary-tree testnet targeting end of August  
* PQ Interop [\#5](https://github.com/leanEthereum/pm/blob/main/breakout-rooms/leanConsensus/pq-interop/meetings/meeting-05.md)  
* Flashbots [MEV letter explorer](https://collective.flashbots.net/t/explorer/100): view & query topics  
* EIPs (Ethereum improvement proposals):  
  * [EIP8005](https://github.com/ethereum/EIPs/pull/10152/files): Encrypted transaction envelope (ETE) typed transaction

### Staking

* [Client diversity](https://clientdiversity.org/#distribution):  
  * Consensus layer: Lighthouse 42.7%  
  * [Blockprint deprecated](https://x.com/sigp_io/status/1955075542866420164): validator-centric view of client diversity using fingerprinting is no longer accurate post-Electra  
  * Execution layer: Geth \~41%, Nethermind \~38% (estimated from 74% self reported)  
* [Staking marketshare](https://dune.com/hildobby/eth2-staking): Lido 24.5%

### Layer 2

* Unichain [Flashblocks](https://blog.uniswap.org/flashblocks-are-live) live, 200ms sub-blocks, runs inside TEEs  
* Taiko [preconfirmations](https://taiko.mirror.xyz/rbgD_KM06QkDe1t0Gw1wI_MLvwobTS1PqEIfstZRo48) live, phase 1 (only allow list can preconfirm transactions)  
* [Facet](https://x.com/l2beat/status/1954954940146680084) (OP-Succinct): based sequencing, multi-bridging (no canonical bridge) & native gas token  
* [Ronin](https://blog.roninchain.com/p/ronins-homecoming-to-ethereum) (Axie Infinity) plans migration to L2 by Q2 2026

### Research

* [Prover market design](https://ethresear.ch/t/on-ethereum-prover-market-design/22916): model with comparison of lotteries & staked allocations  
* [3-slot-finality](https://ethresear.ch/t/integrating-3sf-with-epbs-focil-and-peerdas/22909) (3SF): integrating with ePBS, FOCIL & PeerDAS.  
* Ethereum NYC: Ethereum research funding forum [video](https://www.youtube.com/live/xojE5a51INY?t=4732s), [agenda & slides](https://hackmd.io/@Carboclanc/SJFYXKt_ex)

---

### Sponsor: [Su Squares](https://tenthousandsu.com)

![Su Squares](./logo-su-squares.png)  

The Su Squares NFT project from 2018 is a demonstration of how NFTs can be used for things other than profile photos.

Cute 10×10 pixel squares that you own and personalize. On-chain. Still minting.

Created by Su & William Entriken, lead author of the ERC-721 document. We are proud to sponsor abcoathup and this pioneering ethdevnews project, keep it up\!

Follow [@SuSquares](https://x.com/susquares) [@fulldecent](https://x.com/fulldecent), Visit [tenthousandsu.com](https://tenthousandsu.com)  

---

### Ecosystem

* Octant Epoch 9: [Ethereum stories](https://blog.octant.build/calling-eth-creators-epoch-9-applications-are-now-open-2/), creatives can apply to fund their next project  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 1.1 average, 0.2 \- 18.6 (16.3 for zero net issuance)  
  * [ETH supply change](https://ultrasound.money/): 17k net issuance  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): $3,894 – $4,776 (all time high $4,878, November 10, 2021\)  
  * [ETHBTC](https://ratiogang.com/): 0.039 (0.165 for the Flippening)

### Developers

* Hardhat [3 beta](https://github.com/NomicFoundation/hardhat/releases/tag/hardhat%403.0.0): write tests in Solidity, multichain support, performance critical components rewritten in Rust, revamped build system & streamlined deployments  
  * Hardhat [community plugins](https://hardhat.org/plugins#community-plugins)   
* OpenZeppelin [Contracts UI builder](https://blog.openzeppelin.com/introducing-contracts-ui-builder): generate Vite React front end for deployed contracts  
* Solarity [3.1.5](https://github.com/dl-solarity/solidity-lib/releases/tag/3.1.5) (Solidity library): adds deployer guard to prevent initializer front running  
* [Moon](https://github.com/0xkarmacoma/moon.sol#readme) (Solidity contract): renders moon phase (in Northern hemisphere)  
* SpeedRunEthereum: [stablecoin challenge](https://speedrunethereum.com/challenge/stablecoins), build an ETH backed stablecoin  
* [Absorb](https://github.com/paradigmxyz/absorb#readme) (data tooling): collect, manage, query & customize datasets  
* Zak: [malicious IDE extension](https://x.com/0xzak/status/1955655184522371361) drained wallet, [don’t store private keys in .env files](https://x.com/0xzak/status/1956026241104150547)  
* ERCs (application layer standards):  
  * [ERC8003](https://github.com/ethereum/ERCs/pull/1158/files): ERC20 pre-initialization extension  
  * [ERC8004](https://github.com/ethereum/ERCs/pull/1170/files): Trustless agents

### Security

* [Digibastion](https://www.digibastion.com/): security checklist with scoring, based on threat profile  
* Optimum: [contract security guide](https://docs.optimumsec.xyz/)  
* Zero Cool: [generate vulnerability report](https://x.com/ZeroCool_AI/status/1955474376134103549) using Claude prompt, code & short description

### Applications

* [Coinbase DEX](https://www.coinbase.com/en-au/blog/coinbase-unlocks-millions-of-assets-with-dex-trading): US users (excluding New York) can trade native Base tokens  
* [Simple page](https://simplepage.eth.link/): publish website to IPFS & ENS, edit markdown in browser, $12 a year  
* [⌐◨-◨.eth](https://www.noggles.domains/): mint noggles ENS

### Regulation

* [Free Roman Storm](https://freeromanstorm.com/):   
  * Fede [donated $500k](https://x.com/fede_intern/status/1955048960684405110) after being [detained in Turkey](https://x.com/fede_intern/status/1954945403146625291)  
  * Ethereum Foundation [matched donations](https://x.com/hwwonx/status/1953540201495900664) up to another $500k  
* Uniswap Foundation [DUNI proposal](https://gov.uniswap.org/t/rfc-establish-uniswap-governance-as-duni-a-wyoming-duna/25770), adopt Wyoming-registered decentralized unincorporated nonprofit association (DUNA) legal structure

---

### Paid Listings

* self-custody. onchain tools. no bs. [@90secondscrypto on YouTube](https://www.youtube.com/@90secondscrypto)  
* [abcoathup](https://x.com/abcoathup/status/1955784034711429264) seeks paid work.  DM to chat

[*Listings*](https://ethdevnews.com/about/#paid-listings)*: $100 in ETH/USDC (max 70 characters).  Email abcoathup at gmail*  

---

### General

* [zip](https://eprint.iacr.org/2025/1446): non-recursive proof compression for hash-based SNARGs  
* Jolt [Twist & Shout integration](https://a16zcrypto.com/posts/article/jolt-6x-speedup/), 6x speedup, \~50KB proof sizes  
* Upcoming alt-L1s: Stripe [Tempo](https://archive.md/dJHvQ) & Circle [Arc](https://arcnetwork.xyz/)

---

*Publisher: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethdevnews.com/ethdevnews-weekly-2](https://ethdevnews.com/ethdevnews-weekly-2)*  
*Extend ethdevnews limited run via [sponsorships](https://ethdevnews.com/about/#sponsorships), [paid listings](https://ethdevnews.com/about/#paid-listings), [grants](https://ethdevnews.com/about/#grants) & [donations](https://ethdevnews.com/about/#donations).*  

---