---
title: "ArCHer: Training Language Model Agents via Hierarchical Multi-Turn RL"
authors: ["Yifei Zhou", "Andrea Zanette", "Jiayi Pan", "Sergey Levine", "Aviral Kumar"]
year: 2024
venue: "ICML 2024"
arxiv: "https://arxiv.org/abs/2402.19446"
abstract: "Language models are increasingly used for goal-directed tasks that need many turns of interaction, such as web browsing, tool use and customer support, but most RL methods for LMs optimize single-turn rewards, limiting information gathering, credit assignment and reasoning about past actions. ArCHer is a hierarchical framework that runs two RL algorithms in parallel: an off-policy, value-based method that aggregates reward across turns at the utterance level, and a lower-level method that uses that value function to train the token-level policy within each turn. It reports roughly 100x better sample efficiency than existing methods, with gains that persist up to 7B-parameter models."
draft: false
graphLabel: "ArCHer"
graphDescription: "Zhou et al. (2024, ICML). Actor-Critic Framework with a Hierarchical Structure: a high-level off-policy TD critic scores whole utterances (short horizon, replay buffer), a low-level policy-gradient actor optimizes the tokens inside each utterance using that critic's advantage. Replaces the single-turn reward model of RLHF; offline variant uses IQL + AWR. ~100x more sample-efficient than token-level PPO on multi-turn text tasks."
graphEdges:
  - target: hierarchical-llm-agent
    label: introduces
  - target: token-level-mdp
    label: utterance + token MDPs
  - target: credit-assignment
    label: addresses across turns
  - target: ppo
    label: more efficient than
  - target: iql
    label: offline critic
  - target: awac
    label: offline actor
  - target: ilql
    label: builds on
  - target: rl-for-llm
    label: instance of
  - target: lmrl-gym
    label: evaluated on
  - target: webshop
    label: evaluated on
---
