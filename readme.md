# PROJECT PAGES ARE GETTING DEPRECATED SOON

We're in the process of rolling out more customization features for profile pages, which will replace these projects. Contact bernat@dune.com to learn more.

As a result, **we've stopped processing PRs in this repo.**

The projects must flow!

--------

# Dune Analytics Project Pages

This repository hosts the content rendered on [duneanalytics.com/projects](https://duneanalytics.com/projects). We welcome contributions to exisiting pages as well as entirely new pages.

## Format

Each page should have it's own folder within the `pages/` folder. The folder should contain two files with the same name as the folder, one with a `.md`-suffix and one with a `.svg` (high res, transparent `.png` also works, but `.svg` is preferred).

### `project.md`

The data is formatted in a markdown file with a YAML frontmatter section. Consider the below example configuration for DAI which is saved in the `pages/dai/dai.md`-file:

```markdown
---
# Name of the project. Also the URL i.e. duneanalytics.com/projects/dai.
name: "DAI" 

# The name of the logo file. Should have the same name as the markdown file.
logo: "dai.svg"

# The main color of the project. Remember to quote this value.
color: "#F4B731"

# List of relevant schemas you can query in dune.
schemas: 
  - "maker"
  - "makermcd"

# List of relevant links to the project.
links:
  - name: "Website"
    link: "https://makerdao.com/en/"
  - name: "Docs"
    link: "https://docs.makerdao.com/"
  - name: "Oasis"
    link: "https://oasis.app/"

# List of applicable tags in Dune. These will link to e.g...
tags:
  - "DAI" # ...explore.duneanalytics.com/dashboards?tags=DAI
  - "makerdao" # ...explore.duneanalytics.com/dashboards?tags=makerdao
  - "maker"
  - "DeFi"
  
# List of related projects. These projects must exist in this repo and the name...
related: 
  - "makerdao" # ...should match like "pages/makerdao/makerdao.md".

# List of relevant dashboard slugs prefixed with username
dashboards:
  - "user1/maker-dao---mcd"
  - "user2/makerdao-liquidations"
  - "user3/dex-metrics"

# List of relevant query-ids.
queries:
  - 855

# List of visualizations to embed
embeds:
  - name: "This is the name of the embed"
    link: "https://explore.duneanalytics.com/embed/query/2165/visualization/4001?api_key=D8MK8HstMF3MsVksW83C1eGBrnGk8POh8EfFkUbv" 
---

The Dai stablecoin is a decentralized, unbiased, collateral-backed cryptocurrency 
soft-pegged to the US Dollar. Dai is held in cryptocurrency wallets or within 
platforms, and is supported on Ethereum and other popular blockchains.

Dai is easy to generate, access, and use. Users generate Dai by depositing collateral 
assets into Maker Vaults within the Maker Protocol. This is how Dai is entered into 
circulation and how users gain access to liquidity. Others obtain Dai by buying it 
from brokers or exchanges, or simply by receiving it as a means of payment.

*From https://makerdao.com/en/whitepaper.*
```

The lower part of the `.md`-file is a markdown area where you can write or borrow a description from a project. If you copy it, please link back to the page you quoted it from. Note that all the keys are mandatory, so if you have an empty queries field it should be listed as `queries: []`.

### `project.svg`

Add the projects logo as a svg-file, or if that doesn't exist: a high resolution, transparent `project.png`-file will also work. Note that the logo should use dark text, as it will be rendered on a light background.

## CODEOWNERS

Representatives from the different projects may PR themselves into [CODEOWNERS](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/about-code-owners) file the different folders. You will then be granted write permissions, and merging pull requests to this folder will trigger a build of the dune analytics homepage, your project page included.
