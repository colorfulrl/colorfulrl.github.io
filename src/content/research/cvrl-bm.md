---
title: "Constrained Visual Representation Learning With Bisimulation Metrics for Safe Reinforcement Learning"
authors: ["Rongrong Wang", "Yuhu Cheng", "Xuesong Wang"]
year: 2025
venue: "IEEE Transactions on Image Processing (2025)"
arxiv: "https://ieeexplore.ieee.org/document/10829536/"
abstract: "Safe reinforcement learning aims to ensure the optimal performance while minimizing potential risks. In real-world applications, especially in scenarios that rely on visual inputs, a key challenge lies in the extraction of essential features for safe decision-making while maintaining the sample efficiency. To address this issue, we propose the constrained visual representation learning with bisimulation metrics for safe reinforcement learning (CVRL-BM). CVRL-BM constructs a sequential conditional variational inference model to compress high-dimensional visual observations into low-dimensional state representations. Additionally, safety bisimulation metrics are introduced to quantify the behavioral similarity between states, and our objective is to make the distance between any two latent state representations as close as possible to the safety bisimulation metric between their corresponding states. By integrating these two components, CVRL-BM is able to learn compact and information-rich visual state representations while satisfying pre-defined safety constraints. Experiments on Safety Gym show that CVRL-BM outperforms existing vision-based safe reinforcement learning methods in safety and efficacy. Particularly, CVRL-BM surpasses the state-of-the-art Safe SLAC method by achieving a 19.748% higher reward return, a 41.772% lower cost return, and a 5.027% decrease in cost regret. These results highlight the effectiveness of our proposed CVRL-BM."
draft: false
graphLabel: "CVRL-BM"
graphDescription: "Wang, Cheng & Wang (2025, IEEE TIP). Extends bisimulation to Safe RL from pixels: defines a 'safety bisimulation metric' (behavioral similarity that accounts for cost/constraint signal, not just reward) and trains a sequential conditional-VAE encoder so latent distances track it. Beats Safe SLAC on Safety Gym across reward, cost, and cost-regret simultaneously — evidence the bisimulation-metric family generalizes cleanly from the reward-only to the constrained-MDP setting."
graphEdges:
  - target: bisimulation-metric
    label: extends
  - target: safe-rl
    label: addresses
  - target: safety-gym
    label: evaluated on
  - target: constrained-mdp
    label: uses
---
