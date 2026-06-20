---
title: "Decision Transformer: Reinforcement Learning via Sequence Modeling"
authors: ["Lili Chen", "Kevin Lu", "Aravind Rajeswaran", "Kimin Lee", "Aditya Grover", "Michael Laskin", "Pieter Abbeel", "Aravind Srinivas", "Igor Mordatch"]
year: 2021
venue: "NeurIPS 2021"
arxiv: "https://arxiv.org/abs/2106.01345"
abstract: "We introduce a framework that abstracts Reinforcement Learning (RL) as a sequence modeling problem. This allows us to draw upon the simplicity and scalability of the Transformer architecture, and associated advances in language modeling such as GPT-x and BERT. In particular, we present Decision Transformer, an architecture that casts the problem of RL as conditional sequence modeling. Unlike prior approaches to RL that fit value functions or compute policy gradients, Decision Transformer simply outputs the optimal actions by leveraging a causally masked Transformer. By conditioning an autoregressive model on the desired return (reward), past states, and actions, our Decision Transformer model can generate future actions that achieve the desired return. Despite its simplicity, Decision Transformer matches or exceeds the performance of state-of-the-art model-free offline RL baselines on Atari, OpenAI Gym, and Key-to-Door tasks."
draft: false
graphLabel: "Decision Transformer"
graphEdges:
  - target: offline-rl
    label: based on
  - target: sequence-modeling
    label: introduces
  - target: transformer
    label: uses
  - target: d4rl
    label: evaluated on
  - target: atari
    label: evaluated on
graphDescription: "Chen et al. (2021). Reframes offline RL as sequence modelling: a GPT autoregressive model conditioned on return-to-go, past states, and actions to predict next action."
---
