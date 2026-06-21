---
title: "A Survey on Causal Reinforcement Learning"
authors: ["Yan Zeng", "Ruichu Cai", "Fuchun Sun", "Libo Huang", "Zhifeng Hao"]
year: 2023
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2302.05209"
abstract: "While Reinforcement Learning (RL) achieves tremendous success in sequential decision-making problems of many domains, it still faces key challenges of data inefficiency and the lack of interpretability. Interestingly, many researchers have leveraged insights from the causality literature recently, bringing forth flourishing works to unify the merits of causality and address well the challenges from RL. As such, it is of great necessity and significance to collate these Causal Reinforcement Learning (CRL) works, offer a review of CRL methods, and investigate the potential functionality from causality toward RL. In particular, we divide existing CRL approaches into two categories according to whether their causality-based information is given in advance or not. We further analyze each category in terms of the formalization of different models, ranging from the Markov Decision Process (MDP), Partially Observed Markov Decision Process (POMDP), Multi-Arm Bandits (MAB), and Dynamic Treatment Regime (DTR). Moreover, we summarize the evaluation matrices and open sources, while we discuss emerging applications, along with promising prospects for the future development of CRL."
draft: false
graphLabel: "Causal RL Survey (Zeng)"
graphDescription: "Zeng, Cai, Sun, Huang & Hao (2023). Comprehensive survey of Causal RL. Defines CRL as the tuple (M, G) — RL setting M plus causal information G — and taxonomizes methods on two cross-cutting axes: whether causal info is given a priori vs must be learned, and the setting (MDP/POMDP/MAB/DTR/IL). The map node for this concept."
graphEdges:
  - target: causal-rl
    label: surveys
---
