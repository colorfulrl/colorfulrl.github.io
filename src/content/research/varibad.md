---
title: "VariBAD: A Very Good Method for Bayes-Adaptive Deep RL via Meta-Learning"
authors: ["Luisa Zintgraf", "Kyriacos Shiarlis", "Maximilian Igl", "Sebastian Schulze", "Yarin Gal", "Katja Hofmann", "Shimon Whiteson"]
year: 2020
venue: "ICLR 2020"
arxiv: "https://arxiv.org/abs/1910.08348"
abstract: "Trading off exploration and exploitation in an unknown environment is key to maximising expected return during learning. A Bayes-optimal policy, which does so optimally, conditions its actions not only on the environment state but on the agent's uncertainty about the environment. Computing a Bayes-optimal policy is however intractable for all but the smallest tasks. In this paper, we introduce variational Bayes-Adaptive Deep RL (variBAD), a way to meta-learn to perform approximate inference in an unknown environment, and incorporate task uncertainty directly during action selection. In a grid-world domain, we illustrate how variBAD performs structured online exploration as a function of task uncertainty. We further evaluate variBAD on MuJoCo domains widely used in meta-RL and show that it achieves higher online return than existing methods."
draft: false
graphLabel: "VariBAD"
graphDescription: "Zintgraf et al. (2020). Meta-learns approximate Bayesian inference over the unknown task and conditions the policy on the full posterior — approximating the Bayes-optimal explore/exploit trade-off. Task uncertainty directly shapes structured online exploration. ICLR 2020."
graphEdges:
  - target: meta-rl
    label: based on
  - target: task-inference
    label: uses
  - target: belief-state
    label: uses
  - target: contextual-mdp
    label: based on
  - target: exploration
    label: addresses
  - target: mujoco
    label: evaluated on
---
