---
title: "A Closer Look at Invalid Action Masking in Policy Gradient Algorithms"
authors: ["Shengyi Huang", "Santiago Ontañón"]
year: 2022
venue: "FLAIRS 2022"
arxiv: "https://arxiv.org/abs/2006.14171"
abstract: "In recent years, Deep Reinforcement Learning (DRL) algorithms have achieved state-of-the-art performance in many challenging strategy games. Because these games have complicated rules, an action sampled from the full discrete action distribution predicted by the learned policy is likely to be invalid according to the game rules (e.g., walking into a wall). The usual approach to deal with this problem in policy gradient algorithms is to \"mask out\" invalid actions and just sample from the set of valid actions. The implications of this process, however, remain under-investigated. In this paper, we 1) show theoretical justification for such a practice, 2) empirically demonstrate its importance as the space of invalid actions grows, and 3) provide further insights by evaluating different action masking regimes, such as removing masking after an agent has been trained using masking."
draft: false
graphLabel: "MaskablePPO"
graphDescription: "Huang & Ontañón (2022). Formalises invalid action masking in policy gradient methods — zeroes logits of illegal actions before softmax, with theoretical justification. Critical for games/environments with large illegal action spaces. Implemented as MaskablePPO in SB3-Contrib."
graphEdges:
  - target: policy-gradient
    label: based on
  - target: actor-critic
    label: uses
---
