---
title: "Never Give Up: Learning Directed Exploration Strategies"
authors: ["Adrià Puigdomènech Badia", "Pablo Sprechmann", "Alex Vitvitskyi", "Daniel Guo", "Bilal Piot", "Steven Kapturowski", "Olivier Tieleman", "Martín Arjovsky", "Alexander Pritzel", "Andew Bolt", "Charles Blundell"]
year: 2020
venue: "ICLR 2020"
arxiv: "https://arxiv.org/abs/2002.06038"
abstract: "We propose a reinforcement learning agent to solve hard exploration games by learning a range of directed exploratory policies. We construct an episodic memory-based intrinsic reward using k-nearest neighbors over the agent's recent experience to train the directed exploratory policies, thereby encouraging the agent to repeatedly revisit all states in its environment. A self-supervised inverse dynamics model is used to train the embeddings of the nearest neighbour lookup, biasing the novelty signal towards what the agent can control. We employ the framework of Universal Value Function Approximators (UVFA) to simultaneously learn many directed exploration policies with the same neural network, with different trade-offs between exploration and exploitation. By using the same neural network for different degrees of exploration/exploitation, transfer is demonstrated from predominantly exploratory policies yielding effective exploitative policies. The proposed method can be incorporated to run with modern distributed RL agents that collect large amounts of experience from many actors running in parallel on separate environment instances. Our method doubles the performance of the base agent in all hard exploration in the Atari-57 suite while maintaining a very high score across the remaining games, obtaining a median human normalised score of 1344.0%. Notably, the proposed method is the first algorithm to achieve non-zero rewards (with a mean score of 8,400) in the game of Pitfall! without using demonstrations or hand-crafted features."
draft: false
graphLabel: "NGU"
graphDescription: "Badia et al. (2020). Two-level intrinsic reward: episodic k-NN memory (short-term) + RND (long-term). UVFA simultaneously trains a spectrum of explore→exploit policies. Precursor to Agent57."
graphEdges:
  - target: apex
    label: uses
  - target: exploration
    label: based on
  - target: intrinsic-motivation
    label: implements
  - target: rnd
    label: uses
  - target: atari
    label: evaluated on
---
