---
title: "Conservative Q-Learning for Offline Reinforcement Learning"
authors: ["Aviral Kumar", "Aurick Zhou", "George Tucker", "Sergey Levine"]
year: 2020
venue: "NeurIPS 2020"
arxiv: "https://arxiv.org/abs/2006.04779"
abstract: "Effectively leveraging large, previously collected datasets in reinforcement learning (RL) is a key challenge for large-scale real-world applications. Offline RL algorithms promise to learn effective policies from previously-collected, static datasets without further interaction. However, in practice, offline RL presents a major challenge, and standard off-policy RL methods can fail due to overestimation of values induced by the distributional shift between the dataset and the learned policy, especially when training on complex and multi-modal data distributions. In this paper, we propose conservative Q-learning (CQL), which aims to address these limitations by learning a conservative Q-function such that the expected value of a policy under this Q-function lower-bounds its true value. We theoretically show that CQL produces a lower bound on the value of the current policy and that it can be incorporated into a policy learning procedure with theoretical improvement guarantees. In practice, CQL augments the standard Bellman error objective with a simple Q-value regularizer which is straightforward to implement on top of existing deep Q-learning and actor-critic implementations. On both discrete and continuous control domains, we show that CQL substantially outperforms existing offline RL methods, often learning policies that attain 2-5 times higher final return, especially when learning from complex and multi-modal data distributions."
draft: false
graphLabel: "CQL"
graphEdges:
  - target: offline-rl
    label: based on
  - target: value-based
    label: extends
  - target: d4rl
    label: evaluated on
  - target: mujoco
    label: evaluated on
graphDescription: "Kumar et al. (2020). Penalises Q-values on out-of-distribution actions so that Q is a conservative lower bound — prevents the policy from exploiting extrapolation errors in offline data."
---
