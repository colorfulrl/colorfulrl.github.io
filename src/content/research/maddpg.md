---
title: "Multi-Agent Actor-Critic for Mixed Cooperative-Competitive Environments"
authors: ["Ryan Lowe", "Yi Wu", "Aviv Tamar", "Jean Harb", "Pieter Abbeel", "Igor Mordatch"]
year: 2017
venue: "NeurIPS 2017"
arxiv: "https://arxiv.org/abs/1706.02275"
abstract: "We explore deep reinforcement learning methods for multi-agent domains. We begin by analyzing the difficulty of traditional algorithms in the multi-agent case: Q-learning is challenged by an inherent non-stationarity of the environment, while policy gradient suffers from a variance that increases as the number of agents grows. We then present an adaptation of actor-critic methods that considers action policies of other agents and is able to successfully learn policies that require complex multi-agent coordination. Additionally, we introduce a training regimen utilizing an ensemble of policies for each agent that leads to more robust multi-agent policies. We show the strength of our approach compared to existing methods in cooperative as well as competitive scenarios, where agent populations are able to discover various physical and informational coordination strategies."
draft: false
graphLabel: "MADDPG"
graphDescription: "Lowe et al. (2017). Multi-agent actor-critic with a centralized critic per agent that sees all agents' actions (CTDE) — tames non-stationarity and policy-gradient variance. Handles cooperative and competitive settings. NeurIPS 2017."
graphEdges:
  - target: multi-agent-rl
    label: based on
  - target: ctde
    label: uses
  - target: actor-critic
    label: uses
  - target: ddpg
    label: extends
---
