---
title: "Loss of Plasticity in Continual Deep Reinforcement Learning"
authors: ["Zaheer Abbas", "Rosie Zhao", "Joseph Modayil", "Adam White", "Marlos C. Machado"]
year: 2023
venue: "CoLLAs 2023"
arxiv: "https://arxiv.org/abs/2303.07507"
abstract: "The ability to learn continually is essential in a complex and changing world. In this paper, we characterize the behavior of canonical value-based deep reinforcement learning (RL) approaches under varying degrees of non-stationarity. In particular, we demonstrate that deep RL agents lose their ability to learn good policies when they cycle through a sequence of Atari games. This phenomenon is alluded to in prior work under various guises — e.g., loss of plasticity, implicit under-parameterization, primacy bias, and capacity loss. We investigate this phenomenon closely at scale and analyze how the weights, gradients, and activations change over time."
draft: false
graphLabel: "Loss of Plasticity in Continual RL (Abbas 2023)"
graphDescription: "Abbas, Zhao, Modayil, White & Machado (2023, CoLLAs). Characterizes plasticity loss specifically in the continual-RL setting — agents cycling through a sequence of Atari games progressively lose the ability to learn good policies. Connects the scattered guises (capacity loss, implicit under-parameterization, primacy bias) and tracks weights/gradients/activations at scale. The bridge from plasticity loss to continual RL."
graphEdges:
  - target: plasticity
    label: instance of
  - target: atari
    label: evaluated on
---
