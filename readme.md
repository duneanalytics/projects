# Dune Analytics Project Pages
This repository hosts the content rendered on [duneanalytics.com/projects](https://duneanalytics.com/projects). We welcome contributions to exisiting pages as well as entirely new pages.


## Format
Each page should have it's own folder within the `pages/` folder. The folder should contain two files with the same name as the folder, one with a `.md`-suffix and one with a `.svg` (high res, transparent `.png` also works, but `.svg` is preferred)
### project.md
The data is formatted in a markdown file with a escaped yaml top section. Consider the below example configuration for DAI which is saved in the `pages/dai/dai.md`-file

```
name: "DAI"                                         # name of the project. Also the URL i.e. duneanalytics.com/projects/dai
logo: "dai.svg"                                     # the name of the logo file. Should have the same name as the markdown file 
color: "#F4B731"                                    # the main color of the project
schemas:                                            # list of relevant schemas you can query in dune.
  - "maker"
  - "makermcd"
links:                                              # list of relevant links to the project
  - name: "Website"
    link: "https://makerdao.com/en/"
  - name: "Docs"
    link: "https://docs.makerdao.com/"
  - name: "Oasis"
    link: "https://oasis.app/"
tags:                                               # list of applicable tags in Dune. These will link to e.g.
  - "DAI"                                           # explore.duneanalytics.com/dashboards?tags=DAI
  - "makerdao"                                      # explore.duneanalytics.com/dashboards?tags=makerdao etc...
  - "maker"
  - "DeFi"
related:                                            # list of related projects. NB: project must exist in this repo and the name
  - "makerdao"                                      # should match like "pages/makerdao/makerdao.md"
dashboards:                                         # list of relevant dashboard slugs
  - "maker-dao---mcd"
  - "makerdao-liquidations"
  - "dex-metrics"
queries:                                            # list of relevant query-ids.
  - 855
---

The Dai stablecoin is a decentralized, unbiased, collateral-backed cryptocurrency soft-pegged to the US Dollar. Dai is held in cryptocurrency wallets or within platforms, and is supported on Ethereum and other popular blockchains.

Dai is easy to generate, access, and use. Users generate Dai by depositing collateral assets into Maker Vaults within the Maker Protocol. This is how Dai is entered into circulation and how users gain access to liquidity. Others obtain Dai by buying it from brokers or exchanges, or simply by receiving it as a means of payment.

*From https://makerdao.com/en/whitepaper.*

```
The lower part of the `.md`-file is a markdown area where you can write or borrow a description from a project. If you copy it, please link back to the page you quoted it from.

### project.svg
Add the projects logo as a svg-file, or if that doesn't exist: a high resolution, transparent `project.png`-file will also work. Note that the logo should use dark text, as it will be rendered on a light background.


## Codeowners
Representatives from the different projects may PR themselves into [CODEOWNERS](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/about-code-owners) file the different folders. You will then be granted write permissions, and merging pull requests to this folder will trigger a build of the dune analytics homepage, your project page included.
