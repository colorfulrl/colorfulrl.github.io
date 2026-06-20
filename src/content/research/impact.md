---
title: "IMPACT: Importance Weighted Asynchronous Architectures with Clipped Target Networks"
authors: ["Michael Luo", "Jiahao Yao", "Richard Liaw", "Eric Liang", "Ion Stoica"]
year: 2020
venue: "ICLR 2020"
arxiv: "https://arxiv.org/abs/1912.00167"
abstract: "The practical usage of reinforcement learning agents is often bottlenecked by the duration of training time. To accelerate training, practitioners often turn to distributed reinforcement learning architectures to parallelize and accelerate the training process. However, modern methods for scalable reinforcement learning (RL) often tradeoff between the throughput of samples that an RL agent can learn from (sample throughput) and the quality of learning from each sample (sample efficiency). In these scalable RL architectures, as one increases sample throughput (i.e. increasing parallelization in IMPALA), sample efficiency drops significantly. To address this, we propose a new distributed reinforcement learning algorithm, IMPACT. IMPACT extends IMPALA with three changes: a target network for stabilizing the surrogate objective, a circular buffer, and truncated importance sampling. In discrete action-space environments, we show that IMPACT attains higher reward and, simultaneously, achieves up to 30% decrease in training wall-time than that of IMPALA. For continuous control environments, IMPACT trains faster than existing scalable agents while preserving the sample efficiency of synchronous PPO."
draft: false
graphLabel: "IMPACT"
graphDescription: "Luo et al. (2020). Distributed RL that breaks IMPALA's throughput-vs-efficiency tradeoff — adds a target network, a circular buffer, and truncated importance sampling, getting higher reward and up to 30% faster wall-time than IMPALA while keeping synchronous-PPO sample efficiency. ICLR 2020."
graphEdges:
  - target: policy-gradient
    label: based on
  - target: actor-critic
    label: uses
  - target: impala
    label: extends
  - target: trust-region
    label: uses
---
