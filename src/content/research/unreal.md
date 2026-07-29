---
title: "Reinforcement Learning with Unsupervised Auxiliary Tasks"
authors: ["Max Jaderberg", "Volodymyr Mnih", "Wojciech Marian Czarnecki", "Tom Schaul", "Joel Z. Leibo", "David Silver", "Koray Kavukcuoglu"]
year: 2016
venue: "arXiv preprint (ICLR 2017)"
arxiv: "https://arxiv.org/abs/1611.05397"
abstract: "Deep reinforcement learning agents have achieved state-of-the-art results by directly maximising cumulative reward. However, environments contain a much wider variety of possible training signals. In this paper, we introduce an agent that also maximises many other pseudo-reward functions simultaneously by reinforcement learning. All of these tasks share a common representation that, like unsupervised learning, continues to develop in the absence of extrinsic rewards. We also introduce a novel mechanism for focusing this representation upon extrinsic rewards, so that learning can rapidly adapt to the most relevant aspects of the actual task. Our agent significantly outperforms the previous state-of-the-art on Atari, averaging 880% expert human performance, and a challenging suite of first-person, three-dimensional Labyrinth tasks leading to a mean speedup in learning of 10x and averaging 87% expert human performance on Labyrinth."
draft: false
graphLabel: "UNREAL"
graphDescription: "Jaderberg et al. (2016). Builds on A3C: adds auxiliary unsupervised control tasks (maximise pixel change in sub-regions of the screen, 'pixel control') and auxiliary prediction tasks (immediate reward prediction from recent frames, value function replay) that all train the same shared convolutional/recurrent representation from replayed experience, without needing the extrinsic reward. The shared representation matures faster than from the sparse task reward alone, giving large sample-efficiency gains on Atari and DeepMind Lab (Labyrinth). An early, influential instance of reward-free auxiliary/self-supervised objectives shaping RL representations."
graphEdges:
  - target: a3c
    label: extends
  - target: auxiliary-tasks
    label: introduces
  - target: unsupervised-rl
    label: uses
  - target: atari
    label: evaluated on
---
