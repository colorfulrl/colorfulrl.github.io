---
title: "Learning Multi-Level Hierarchies with Hindsight"
authors: ["Andrew Levy", "George Konidaris", "Robert Platt", "Kate Saenko"]
year: 2019
venue: "ICLR 2019"
arxiv: "https://arxiv.org/abs/1712.00948"
abstract: "Hierarchical agents have the potential to solve sequential decision making tasks with greater sample efficiency than their non-hierarchical counterparts because hierarchical agents can break down tasks into sets of subtasks that only require short sequences of decisions. In order to realize this potential of faster learning, hierarchical agents need to be able to learn their multiple levels of policies in parallel so these simpler subproblems can be solved simultaneously. Yet, learning multiple levels of policies in parallel is hard because it is inherently unstable: changes in a policy at one level of the hierarchy may cause changes in the transition and reward functions at higher levels in the hierarchy, making it difficult to jointly learn multiple levels of policies. In this paper, we introduce a new Hierarchical Reinforcement Learning (HRL) framework, Hierarchical Actor-Critic (HAC), that can overcome the instability issues that arise when agents try to jointly learn multiple levels of policies. The main idea behind HAC is to train each level of the hierarchy independently of the lower levels by training each level as if the lower level policies are already optimal. We demonstrate experimentally in both grid world and simulated robotics domains that our approach can significantly accelerate learning relative to other non-hierarchical and hierarchical methods. Indeed, our framework is the first to successfully learn 3-level hierarchies in parallel in tasks with continuous state and action spaces."
draft: false
graphLabel: "HAC"
graphDescription: "Levy et al. (2019). Hierarchical Actor-Critic — trains each level as if lower levels are already optimal (hindsight-style goal relabeling) to stabilize parallel multi-level learning. First to learn 3-level hierarchies in continuous state-action spaces. ICLR 2019."
graphEdges:
  - target: hierarchical-rl
    label: uses
  - target: actor-critic
    label: uses
  - target: goal-conditioned-rl
    label: uses
  - target: temporal-abstraction
    label: uses
---
