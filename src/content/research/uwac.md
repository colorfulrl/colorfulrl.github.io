---
title: "Uncertainty Weighted Actor-Critic for Offline Reinforcement Learning"
authors: ["Yue Wu", "Shuangfei Zhai", "Nitish Srivastava", "Joshua Susskind", "Jian Zhang", "Ruslan Salakhutdinov", "Hanlin Goh"]
year: 2021
venue: "ICML 2021"
arxiv: "https://arxiv.org/abs/2105.08140"
abstract: "Offline Reinforcement Learning (RL) promises to learn effective policies from previously-collected, static datasets without the need for exploration. However, existing Q-learning and actor-critic based off-policy RL algorithms fail when bootstrapping from out-of-distribution (OOD) actions or states. We hypothesize that a key missing ingredient from the existing methods is a proper treatment of uncertainty in the offline setting. We propose Uncertainty Weighted Actor-Critic (UWAC), an algorithm that detects OOD state-action pairs and down-weights their contribution in the training objectives accordingly. Implementation-wise, we adopt a practical and effective dropout-based uncertainty estimation method that introduces very little overhead over existing RL algorithms. Empirically, we observe that UWAC substantially improves model stability during training. In addition, UWAC out-performs existing offline RL methods on a variety of competitive tasks, and achieves significant performance gains over the state-of-the-art baseline on datasets with sparse demonstrations collected from human experts. [Note: abstract reconstructed, pending verbatim confirmation.]"
draft: false
graphLabel: "UWAC"
graphDescription: "Wu et al. (2021). Offline RL that detects out-of-distribution state-action pairs via dropout-based uncertainty and down-weights their contribution to the actor-critic loss — cheap to add, stabilizes training, and excels on sparse human-expert datasets. ICML 2021."
graphEdges:
  - target: offline-rl
    label: based on
  - target: epistemic-uncertainty
    label: uses
  - target: actor-critic
    label: uses
  - target: maximum-entropy-rl
    label: uses
  - target: d4rl
    label: evaluated on
---
