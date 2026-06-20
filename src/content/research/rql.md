---
title: "Reversal Q-Learning"
authors: ["Aditya Oberai", "Seohong Park", "Sergey Levine"]
year: 2026
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2606.17551"
abstract: "Iterative generative modeling techniques, such as flow matching, provide powerful tools to model complex behaviors for effective offline reinforcement learning (RL). In this work, we propose a new off-policy RL algorithm that trains a flow policy based on prior data. Our idea starts from the \"expanded\" Markov decision process (MDP) framework, which treats individual flow refinement steps as separate actions in an MDP. To enable off-policy RL within this framework, we apply two techniques: we generate virtual on-policy trajectories (by \"reversing\" flows) to make this framework compatible with prior data, and we apply a bias-and-variance reduction technique to mitigate the curse of horizon in off-policy RL. We call the resulting algorithm reversal Q-learning (RQL). RQL has several advantages over previous flow-based RL methods: it does not suffer from backpropagation through time, makes better use of the learned value function, and directly trains the full, expressive flow policy. Through our experiments on 50 challenging simulated robotic tasks, we show that RQL leads to the best average offline RL performance compared to state-of-the-art flow-based offline RL algorithms."
draft: false
graphLabel: "RQL"
graphDescription: "Oberai, Park & Levine (2026). Off-policy offline RL for flow policies via the expanded MDP (each Euler flow step = one action). Key trick: reverse the deterministic flow ODE to reconstruct virtual on-policy trajectories from offline (s,a) pairs — these are deterministic, so multi-step returns are unbiased and zero-variance, cutting the F×-longer horizon back to ~T. Avoids BPTT, uses value gradients. Best avg over flow-based offline RL baselines on 50 robotic tasks."
graphEdges:
  - target: offline-rl
    label: based on
  - target: flow-matching
    label: uses
  - target: expanded-mdp
    label: uses
  - target: value-based
    label: uses
  - target: credit-assignment
    label: addresses
  - target: mujoco
    label: evaluated on
---
