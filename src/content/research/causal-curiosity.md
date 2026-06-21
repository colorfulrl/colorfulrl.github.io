---
title: "Causal Curiosity: RL Agents Discovering Self-supervised Experiments for Causal Representation Learning"
authors: ["Sumedh A. Sontakke", "Arash Mehrjou", "Laurent Itti", "Bernhard Schölkopf"]
year: 2021
venue: "ICML 2021"
arxiv: "https://arxiv.org/abs/2010.03110"
abstract: "Animals exhibit an innate ability to learn regularities of the world through interaction. By performing experiments in their environment, they are able to discern the causal factors of variation and infer how they affect the dynamics of their world. Inspired by this, we attempt to equip reinforcement learning agents with the ability to perform experiments that facilitate a categorization of the rolled-out trajectories, and to subsequently infer the causal factors of the environment in a hierarchical manner. We introduce a novel intrinsic reward, called causal curiosity, and show that it allows our agents to learn optimal sequences of actions, and to discover causal factors in the dynamics. The learned behavior allows the agents to infer a binary quantized representation for the ground-truth causal factors in every environment. Additionally, we find that these experimental behaviors are semantically meaningful (e.g., to differentiate between heavy and light blocks, our agents learn to lift them), and are learnt in a self-supervised manner with approximately 2.5 times less data than conventional supervised planners. We show that these behaviors can be re-purposed and fine-tuned (e.g., from lifting to pushing or other downstream tasks). Finally, we show that the knowledge of causal factor representations aids zero-shot learning for more complex tasks."
draft: false
graphLabel: "Causal Curiosity"
graphDescription: "Sontakke, Mehrjou, Itti & Schölkopf (2021, ICML). An intrinsic reward ('causal curiosity') that drives an agent to run self-supervised EXPERIMENTS — sequences of actions that disentangle causal factors of the dynamics (e.g. learning to lift to tell heavy from light blocks). Yields quantized causal-factor representations that transfer zero-shot. Causal RL meets intrinsic-motivation/exploration."
graphEdges:
  - target: causal-rl
    label: instance of
  - target: intrinsic-motivation
    label: uses
---
