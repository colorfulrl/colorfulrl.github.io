---
title: "AWAC: Accelerating Online Reinforcement Learning with Offline Datasets"
authors: ["Ashvin Nair", "Abhishek Gupta", "Murtaza Dalal", "Sergey Levine"]
year: 2020
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2006.09359"
abstract: "Reinforcement learning (RL) provides an appealing formalism for learning control policies from experience. However, the classic active formulation of RL necessitates a lengthy active exploration process for each behavior, making it difficult to apply in real-world settings. If we can instead allow RL algorithms to effectively use previously collected data to aid the online learning process, such applications could be made substantially more practical: the prior data would provide a starting point that mitigates challenges due to exploration and sample complexity, while the online training enables the agent to perfect the desired skill. Such prior data could either constitute expert demonstrations or, more generally, sub-optimal prior data that illustrates potentially useful transitions. While a number of prior methods have either used optimal demonstrations to bootstrap RL, or have used sub-optimal data to train purely offline, it remains exceptionally difficult to train a policy with offline data and actually continue to improve it further with online RL. In this paper we analyze why this problem is so challenging, and propose an algorithm that combines sample-efficient dynamic programming with maximum likelihood policy updates, providing a simple and effective framework that is able to leverage large amounts of offline data and then quickly perform online fine-tuning of RL policies. We show that our method, advantage weighted actor critic (AWAC), enables rapid learning of skills with a combination of prior demonstration data and online experience. [Note: abstract reconstructed, pending verbatim confirmation.]"
draft: false
graphLabel: "AWAC"
graphDescription: "Nair et al. (2020). Advantage-Weighted Actor-Critic — pretrains on offline data then fine-tunes online without the usual collapse, via an implicit-policy-constraint update (advantage-weighted maximum likelihood). The canonical offline-to-online RL recipe. "
graphEdges:
  - target: offline-rl
    label: based on
  - target: actor-critic
    label: uses
  - target: policy-gradient
    label: based on
  - target: d4rl
    label: evaluated on
---
