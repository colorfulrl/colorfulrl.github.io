---
title: "Variational Option Discovery Algorithms"
authors: ["Joshua Achiam", "Harrison Edwards", "Dario Amodei", "Pieter Abbeel"]
year: 2018
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/1807.10299"
abstract: "We explore methods for option discovery based on variational inference and make two algorithmic contributions. First: we highlight a tight connection between variational option discovery methods and variational autoencoders, and introduce Variational Autoencoding Learning of Options by Reinforcement (VALOR), a new method derived from the connection. In VALOR, the policy encodes contexts from a noise distribution into trajectories, and the decoder recovers the contexts from the complete trajectories. Second: we propose a curriculum learning approach where the number of contexts seen by the agent increases whenever the agent's performance is strong enough (as measured by the decoder) on the current set of contexts. We show that this simple trick stabilizes training for VALOR and prior variational option discovery methods, allowing a single agent to learn many more modes of behavior than it could with a fixed context distribution. Finally, we investigate other topics related to variational option discovery, including fundamental limitations of the general approach and the applicability of learned options to downstream tasks."
draft: false
graphLabel: "VALOR"
graphDescription: "Achiam, Edwards, Amodei & Abbeel (2018). Reframes variational option discovery (VIC, DIAYN) as a VAE: the policy is the 'encoder' turning a sampled context z into a whole trajectory, a decoder recovers z from the trajectory (unlike DIAYN, the decoder sees the full trajectory, not just the final/current state — captures dynamics, not just endpoint). Adds a curriculum that grows the number of contexts as the decoder's recognition accuracy improves, which stabilizes training and yields far more distinguishable skills than a fixed-size context distribution."
graphEdges:
  - target: skill-discovery
    label: extends
  - target: unsupervised-rl
    label: based on
  - target: vic
    label: extends
  - target: diayn
    label: builds on
---
