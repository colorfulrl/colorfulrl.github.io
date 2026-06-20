---
title: "Efficient Exploration in Continuous-time Model-based Reinforcement Learning"
authors: ["Lenart Treven", "Jonas Hübotter", "Bhavya Sukhija", "Florian Dörfler", "Andreas Krause"]
year: 2023
venue: "NeurIPS 2023"
arxiv: "https://arxiv.org/abs/2310.19848"
abstract: "Reinforcement learning algorithms typically consider discrete-time dynamics, even though the underlying systems are often continuous in time. In this paper, we introduce a model-based reinforcement learning algorithm that represents continuous-time dynamics using nonlinear ordinary differential equations (ODEs). We capture epistemic uncertainty using well-calibrated probabilistic models, and use the optimistic principle for exploration. Our regret bounds surface the importance of the measurement selection strategy (MSS), since in continuous time we not only must decide how to explore, but also when to observe the underlying system. We propose an adaptive, data-dependent, practical MSS that, combined with Gaussian Process dynamics, attains sublinear regret with significantly fewer samples than an equidistant strategy. We validate our approach across several applications, highlighting the benefits of continuous-time modeling over its discrete-time counterpart. [Note: abstract reconstructed, pending verbatim confirmation.]"
draft: false
graphLabel: "Continuous-time MBRL (MSS)"
graphDescription: "Treven et al. (2023). Model-based RL with continuous-time ODE dynamics + optimistic exploration under calibrated epistemic uncertainty. Key insight: in continuous time you must also choose WHEN to observe — the measurement selection strategy (MSS) — and an adaptive MSS attains sublinear regret with far fewer samples. NeurIPS 2023."
graphEdges:
  - target: model-based-rl
    label: based on
  - target: exploration
    label: uses
  - target: epistemic-uncertainty
    label: uses
---
