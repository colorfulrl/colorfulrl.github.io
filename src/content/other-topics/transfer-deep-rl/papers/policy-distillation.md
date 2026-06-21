---
title: "Policy Distillation"
authors: ["Andrei A. Rusu", "Sergio Gomez Colmenarejo", "Caglar Gulcehre", "Guillaume Desjardins", "James Kirkpatrick", "Razvan Pascanu", "Volodymyr Mnih", "Koray Kavukcuoglu", "Raia Hadsell"]
year: 2015
venue: "ICLR 2016"
arxiv: "https://arxiv.org/abs/1511.06295"
abstract: "Policies for complex visual tasks have been successfully learned with deep reinforcement learning, using an approach called deep Q-networks (DQN), but relatively large task-specific networks and extensive training are needed to achieve good performance. We present policy distillation, a method that can be used to extract the policy of a reinforcement learning agent and train a new network that performs at the expert level while being dramatically smaller and more efficient. We also show that the same approach can be used to consolidate multiple task-specific policies into a single multi-task policy."
graphLabel: "Policy Distillation (Rusu 2015)"
graphDescription: "Rusu, Colmenarejo et al. (2015, ICLR 2016). Distills a trained DQN teacher into a much smaller student network via supervised regression on Q-values — the student matches expert performance at a fraction of the parameter count. Also demonstrates multi-task distillation: consolidate N single-game DQN experts into one multi-game policy. Foundational paper for RL knowledge distillation."
draft: false
---
