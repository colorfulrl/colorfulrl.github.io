---
title: "SimBa: Simplicity Bias for Scaling Up Parameters in Deep Reinforcement Learning"
authors: ["Hojoon Lee", "Dongyoon Hwang", "Donghu Kim", "Hyunseung Kim", "Jun Jet Tai", "Kaushik Subramanian", "Peter R. Wurman", "Jaegul Choo", "Peter Stone", "Takuma Seno"]
year: 2025
venue: "ICLR 2025"
arxiv: "https://arxiv.org/abs/2410.09754"
abstract: "Recent advances in CV and NLP have been largely driven by scaling up the number of network parameters, despite traditional theories suggesting that larger networks are prone to overfitting. These large networks avoid overfitting by integrating components that induce a simplicity bias, guiding models toward simple and generalizable solutions. However, in deep RL, designing and scaling up networks have been less explored. Motivated by this opportunity, we present SimBa, an architecture designed to scale up parameters in deep RL by injecting a simplicity bias. SimBa consists of three components: (i) an observation normalization layer that standardizes inputs with running statistics, (ii) a residual feedforward block to provide a linear pathway from the input to output, and (iii) a layer normalization to control feature magnitudes. By scaling up parameters with SimBa, the sample efficiency of various deep RL algorithms-including off-policy, on-policy, and unsupervised methods-is consistently improved. Moreover, solely by integrating SimBa architecture into SAC, it matches or surpasses state-of-the-art deep RL methods with high computational efficiency across diverse continuous control benchmarks. [Note: abstract reconstructed, pending verbatim confirmation.]"
draft: false
graphLabel: "SimBa"
graphDescription: "Lee et al. (2025). An architecture that injects a 'simplicity bias' (input normalization + residual feedforward + layer norm) so deep RL networks scale in parameters without overfitting — drops into SAC/PPO/unsupervised RL and consistently improves sample efficiency. ICLR 2025 spotlight."
graphEdges:
  - target: scaling-rl
    label: introduces
  - target: actor-critic
    label: uses
  - target: model-free-rl
    label: based on
  - target: dm-control
    label: evaluated on
---
