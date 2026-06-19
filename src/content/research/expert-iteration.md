---
title: "Thinking Fast and Slow with Deep Learning and Tree Search"
authors: ["Thomas Anthony", "Zheng Tian", "David Barber"]
year: 2017
venue: "NeurIPS 2017"
arxiv: "https://arxiv.org/abs/1705.08439"
abstract: "Sequential decision making problems, such as structured prediction, robotic control, and game playing, require a combination of planning policies and generalisation of those plans. In this paper, we present Expert Iteration (ExIt), a novel reinforcement learning algorithm which decomposes the problem into separate planning and generalisation tasks. Planning new policies is performed by tree search, while a deep neural network generalises those plans. Subsequently, tree search is improved by using the neural network policy to guide search, increasing the strength of new plans. In contrast, standard deep Reinforcement Learning algorithms rely on a neural network not only to generalise plans, but to discover them too. We show that ExIt outperforms REINFORCE for training a neural network to play the board game Hex, and our final tree search agent, trained tabula rasa, defeats MoHex 1.0, the most recent Olympiad Champion player to be publicly released."
draft: false
graphLabel: "Expert Iteration"
graphDescription: "Anthony et al. (2017). ExIt: MCTS generates expert plans, neural net generalises them, net then guides MCTS — the conceptual precursor to AlphaGo Zero's alternating distillation loop."
graphEdges:
  - target: mcts
    label: uses
  - target: policy-gradient
    label: related to
  - target: model-based-rl
    label: related to
---
