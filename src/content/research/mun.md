---
title: "Learning World Models for Unconstrained Goal Navigation"
authors: ["Yuanlin Duan", "Wensen Mao", "He Zhu"]
year: 2024
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2411.02446"
abstract: "Learning world models offers a promising avenue for goal-conditioned reinforcement learning with sparse rewards. By allowing agents to plan actions or exploratory goals without direct interaction with the environment, world models enhance exploration efficiency. The quality of a world model hinges on the richness of data stored in the agent's replay buffer, with expectations of reasonable generalization across the state space surrounding recorded trajectories. However, challenges arise in generalizing learned world models to state transitions backward along recorded trajectories or between states across different trajectories, hindering their ability to accurately model real-world dynamics. To address these challenges, we introduce a novel goal-directed exploration algorithm, MUN (short for 'World Models for Unconstrained Goal Navigation'). This algorithm is capable of modeling state transitions between arbitrary subgoal states in the replay buffer, thereby facilitating the learning of policies to navigate between any 'key' states. Experimental results demonstrate that MUN strengthens the reliability of world models and significantly improves the policy's capacity to generalize across new goal settings."
draft: false
graphLabel: "MUN"
graphDescription: "Duan et al. (2024). World model extended to handle bidirectional and cross-trajectory state transitions for goal-conditioned RL — enables navigation between arbitrary subgoal states in the replay buffer."
graphEdges:
  - target: model-based-rl
    label: based on
  - target: exploration
    label: based on
  - target: latent-dynamics
    label: uses
---
