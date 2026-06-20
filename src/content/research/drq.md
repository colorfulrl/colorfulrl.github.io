---
title: "Image Augmentation Is All You Need: Regularizing Deep Reinforcement Learning from Pixels"
authors: ["Ilya Kostrikov", "Denis Yarats", "Rob Fergus"]
year: 2021
venue: "ICLR 2021"
arxiv: "https://arxiv.org/abs/2004.13649"
abstract: "We propose a simple data augmentation technique that can be applied to standard model-free reinforcement learning algorithms, enabling robust learning directly from pixels without the need for auxiliary losses or pre-training. We demonstrate that this simple mechanism significantly improves the data-efficiency, stability, and asymptotic performance of both off-policy and on-policy RL algorithms, allowing us to reach state-of-the-art performance on both the DeepMind control suite and the Atari 100k benchmark. In addition, our method dramatically improves the robustness of the learned policies to perturbations of the observations. We further demonstrate that our approach, which we call DrQ (Data-regularized Q), can be combined with any model-free reinforcement learning algorithm, requiring only minor modifications, and outperforms model-based methods (Dreamer, PlaNet, SLAC) and contrastive approaches (CURL) on the DeepMind control suite. [Note: abstract reconstructed, pending verbatim confirmation.]"
draft: false
graphLabel: "DrQ"
graphDescription: "Kostrikov et al. (2021). Data-regularized Q — applies simple image augmentation (random shifts) to regularize the value function in pixel-based RL, no auxiliary loss or pretraining. Plugs into SAC/DQN; beats CURL and model-based methods on DMControl. ICLR 2021."
graphEdges:
  - target: model-free-rl
    label: based on
  - target: maximum-entropy-rl
    label: uses
  - target: dm-control
    label: evaluated on
  - target: atari
    label: evaluated on
---
