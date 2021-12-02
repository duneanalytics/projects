---
name: "Lyra"
logo: "lyra.svg"
color: "#05C99B"
schemas:
  - "lyra_v1"
links:
  - name: "Website"
    link: "https://www.lyra.finance/"
  - name: "App"
    link: "https://app.lyra.finance/"
  - name: "Documentation"
    link: "https://docs.lyra.finance/"
  - name: "GitHub"
    link: "https://github.com/lyra-finance"
tags:
  - "Lyra"
  - "Optimism"
  - "Synthetix"
  - "Options"
  - "Derivatives"
  - "L2"
dashboards:
  - "Muir/Lyra-Usage-Statistics-(Post-Regenesis)"
  - "Tyche/Lyra"
  - "ro_your_boat/Lyra-Options-OVM2.0"
  - "ro_your_boat/Lyra-Volatility-Data"
  - "aeto/Lyra-or-AMM-strike-positions"
queries:
  - 253788/475394
  - 253763/475356
  - 253780/475383
embeds:
  - name: "Lyra Daily Unique Traders"
    link: "https://dune.xyz/embeds/249685/483839/7697ca6f-2631-4d1b-ad41-8818fb2eec3f"
  - name: "Lyra Daily sUSD Volume"
    link: "https://dune.xyz/embeds/249685/483837/86351a30-0f67-4037-a37c-b975a777ea22"
  - name: "Lyra Number of Trades"
    link: "https://dune.xyz/embeds/253393/474427/5314b822-9435-494e-9c63-4371724b82f2"
---

Lyra is an automated market maker for trading options on Optimism Ethereum. 

### How is Lyra different from the other options protocols?
Lyra uses a dynamic volatility input to price the entire options surface using a Black Scholes model. Current implementations use a static IV or other, less accurate workarounds to price options. 

Lyra is also the first options AMM to compose with other DeFi projects to automatically price and hedge risk for LPs. The reduced risk allows LPs to feel comfortable to provide deeper liquidity, yielding more trading volume and higher fees.

### Why use Optimism and not another scaling solution?
Optimism is a layer 2 scaling platform that inherits the security of Ethereum by virtue of being a rollup. Sidechains like Polygon do not share this property. Their security is dependent on their own consensus mechanism.

V1 of Lyra has been designed to hedge risk via Synthetix, which offers zero slippage, infinite liquidity and a simple means of getting long/short. This is why Lyra has chosen to deploy to Optimism. Future versions of the protocol will be designed to ensure Lyra can be deployed on multiple L2s, so that the protocol can exist wherever the majority of users and liquidity ends up.


*From https://docs.lyra.finance/faq*
