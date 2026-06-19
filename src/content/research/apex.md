---
title: "Distributed Prioritized Experience Replay"
authors: ["Dan Horgan", "John Quan", "David Budden", "Gabriel Dulac-Arnold", "Joel Leibo", "Paul Barham", "Timothy P. Lillicrap", "David Silver", "Matteo Hessel"]
year: 2018
venue: "ICLR 2018"
arxiv: "https://arxiv.org/abs/1803.00933"
abstract: "We present a distributed architecture for deep reinforcement learning that decouples acting from learning. Multiple distributed actors generate experience in parallel, with each actor potentially using a different exploration strategy. Experience is stored in a shared memory with priorities, and a central learner samples from this prioritized replay to train the policy. The architecture is applicable to any off-policy RL algorithm; we apply it to DQN and show that it achieves state-of-the-art performance on 52 of 57 Atari games, often with an order of magnitude improvement in data efficiency. The architectural blueprint — distributed actors writing to a shared prioritized replay consumed by a single learner — was subsequently adopted by IMPALA, NGU, and Agent57."
draft: false
graphLabel: "Ape-X"
graphDescription: "Horgan et al. (2018). Distributed RL: many actors with varied exploration → shared prioritized replay → single learner. SOTA on 52/57 Atari. Architectural blueprint inherited by IMPALA, NGU, Agent57."
graphEdges:
  - target: value-based
    label: extends
  - target: experience-replay
    label: extends
  - target: prioritized-replay
    label: uses
  - target: atari
    label: evaluated on
---
