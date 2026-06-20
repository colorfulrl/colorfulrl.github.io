---
title: "Reinforcement Learning through Active Inference"
authors: ["Alexander Tschantz", "Beren Millidge", "Anil K. Seth", "Christopher L. Buckley"]
year: 2020
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2002.12636"
abstract: "The central tenet of reinforcement learning (RL) is that agents seek to maximize the sum of cumulative rewards. In contrast, active inference, an emerging framework within cognitive and computational neuroscience, proposes that agents act to maximize the evidence for a biased generative model. Here, we illustrate how ideas from active inference can augment traditional RL approaches by (i) furnishing an inherent balance of exploration and exploitation, and (ii) providing a more flexible conceptualization of reward. Inspired by active inference, we develop and implement a novel objective for decision making, which we term the free energy of the expected future. We demonstrate that the resulting algorithm successfully balances exploration and exploitation, simultaneously achieving robust performance on several challenging RL benchmarks with sparse, well-shaped, and no rewards. [Note: abstract reconstructed, pending verbatim confirmation.]"
draft: false
graphLabel: "Active Inference"
graphDescription: "Tschantz et al. (2020). Recasts decision-making via active inference (free-energy principle from neuroscience) — minimizing the 'free energy of the expected future' inherently balances exploration (information gain) and exploitation, giving a flexible alternative to scalar reward. Works with sparse, shaped, or no reward."
graphEdges:
  - target: model-based-rl
    label: based on
  - target: epistemic-uncertainty
    label: uses
  - target: exploration
    label: uses
  - target: mujoco
    label: evaluated on
---
