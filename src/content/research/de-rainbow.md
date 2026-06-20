---
title: "Do Recent Advancements in Model-Based Deep Reinforcement Learning Really Improve Data Efficiency?"
authors: ["Kacper Kielak"]
year: 2020
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2003.10181"
abstract: "Reinforcement learning (RL) has seen great advancements in the past few years. Nevertheless, the consensus among the RL community is that currently used methods, despite all their benefits, suffer from extreme data inefficiency, especially in the rich visual domains like Atari. To circumvent this problem, novel approaches were introduced that often claim to be much more efficient than popular variations of the state-of-the-art DQN algorithm. In this paper, however, we demonstrate that the newly proposed techniques simply used unfair baselines in their experiments. Namely, we show that the actual improvement in the efficiency came from allowing the algorithm for more training updates for each data sample, and not from employing the new methods. By allowing DQN to execute network updates more frequently we manage to reach similar or better results than the recently proposed advancement, often at a fraction of complexity and computational costs. Furthermore, based on the outcomes of the study, we argue that the agent similar to the modified DQN that is presented in this paper should be used as a baseline for any future work aimed at improving sample efficiency of deep reinforcement learning."
draft: false
graphLabel: "DE-Rainbow (critique)"
graphDescription: "Kielak (2020). Shows that the sample-efficiency gains claimed by model-based Atari 100k methods (e.g. SimPLe) largely came from unfair baselines — simply letting DQN/Rainbow do more updates per sample (higher replay ratio) matches them at a fraction of the cost. Proposes a strong data-efficient DQN baseline (OTRainbow)."
graphEdges:
  - target: model-free-rl
    label: based on
  - target: value-based
    label: based on
  - target: experience-replay
    label: uses
  - target: simple
    label: critiques
  - target: atari
    label: evaluated on
---
