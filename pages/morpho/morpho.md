---
# Name of the project. Also the URL i.e. duneanalytics.com/projects/dai.
name: "Morpho" 

# The name of the logo file. Should have the same name as the markdown file.
logo: "morpho.svg"

# The main color of the project. Remember to quote this value.
color: "#2E4DFF"

# List of relevant schemas you can query in dune.
schemas: 
  - "morpho"
  - "morpho_aave_v2"
  - "morpho_aave_v3"
  - "morpho_compound"
  - "morpho_blue"
  - "metamorpho_vaults"

# List of relevant links to the project.
links:
  - name: "Website"
    link: "https://morpho.org/"
  - name: "Docs"
    link: "https://docs.morpho.org/"
  - name: "App"
    link: "https://app.morpho.org/"

# List of applicable tags in Dune. These will link to e.g...
tags:
  - "morpho"
  - "morphodao"
  - "lending"
  - "DeFi"

# List of relevant dashboard slugs prefixed with username
dashboards:
  - "morpho/morpho-blue-dashboard"
  - "morpho/morpho-aave-dashboard"
  - "morpho/metamorpho-single-vault-dashboard"

# List of relevant query-ids.
queries:
  - 3336346 # Morpho blue markets
  - 3338878 # MetaMorpho vaults description
  - 1935001 # Morpho Aave optimizer volumes

# List of visualizations to embed
embeds:
  - name: "Morpho Blue historical volumes"
    link: "https://dune.com/embeds/3336331/5589898/" 
---

Morpho is a decentralized protocol enabling the overcollateralized lending and borrowing of crypto assets (ERC20 Tokens) on the [Ethereum Virtual Machine](https://ethereum.org/en/developers/docs/evm). Morpho provides users with secure, efficient, and flexible lending infrastructure.
The latest version, Morpho Blue, is implemented as an immutable smart contract, engineered to serve as a trustless base layer for lenders, borrowers, and applications.