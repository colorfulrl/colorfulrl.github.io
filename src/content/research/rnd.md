---
title: "Exploration by Random Network Distillation"
authors: ["Yuri Burda", "Harrison Edwards", "Amos Storkey", "Oleg Klimov"]
year: 2018
venue: "ICLR 2019"
arxiv: "https://arxiv.org/abs/1810.12894"
abstract: "We introduce an exploration bonus for deep reinforcement learning methods that is easy to implement and adds minimal overhead to the computation performed. The bonus is the error of a neural network predicting features of the observations given by a fixed randomly initialized neural network. We also introduce a method to flexibly combine intrinsic and extrinsic rewards. We find that the random network distillation (RND) bonus combined with this increased flexibility enables significant progress on several hard exploration Atari games. In particular we establish state of the art performance on Montezuma's Revenge, a game famously difficult for deep reinforcement learning methods. To the best of our knowledge, this is the first method that achieves better than average human performance on this game without using demonstrations or having access to the underlying state of the game, and occasionally completes the first level."
draft: false
graphLabel: "RND"
graphEdges:
  - target: exploration
    label: based on
  - target: intrinsic-motivation
    label: implements
  - target: atari
    label: evaluated on
graphDescription: "Burda et al. (2018). Intrinsic bonus = prediction error of a trained network trying to mimic a fixed random target network — novel states are harder to predict, yielding higher bonus."
---
