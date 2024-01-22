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
  - 3338878 # MetaMorpho vaults description
  - 3336346 # Morpho blue markets
  - 1935001 # Morpho Aave optimizer volumes

# List of visualizations to embed
embeds:
  - name: "Morpho Blue historical volumes"
    link: "https://dune.com/embeds/3336331/5589898/" 
---

Morpho is a decentralized lending protocol with different entities and individuals contributing to its development and adoption.

The first version of the Morpho Protocol is named Morpho Optimizers. It is built on top of incumbent lending pools and improves the lending and borrowing rates of users with a peer-to-peer matching algorithm while preserving the same liquidity and risk parameters.

Morpho Blue is the most recent protocol version and is independent of Morpho Optimizers.
Morpho Blue is a simple lending primitive layer that allows the creation of immutable and efficient lending markets in a permissionless way.