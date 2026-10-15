---
title: "ReMA: Learning to Meta-think for LLMs with Multi-Agent Reinforcement Learning"
authors: ["Ziyu Wan", "Yunxiang Li", "Xiaoyu Wen", "Yan Song", "Hanjing Wang", "Linyi Yang", "Mark Schmidt", "Jun Wang", "Weinan Zhang", "Shuyue Hu", "Ying Wen"]
year: 2025
venue: "arXiv 2025"
arxiv: "https://arxiv.org/abs/2503.09501"
abstract: "Reinforced Meta-thinking Agents (ReMA) is a framework that uses multi-agent reinforcement learning to teach LLMs to monitor and control their own reasoning. Reasoning is decoupled into two hierarchical agents: a high-level meta-thinking agent that produces strategic oversight and plans, and a low-level reasoning agent that carries out detailed execution. ReMA outperforms single-agent RL baselines on complex reasoning tasks, including competitive math benchmarks and LLM-as-a-Judge benchmarks, and is extended to multi-turn settings using turn-level ratios and parameter sharing."
draft: false
graphLabel: "ReMA"
graphDescription: "Wan et al. (2025). Splits LLM reasoning into a meta-thinking agent (writes a plan or strategy) and a reasoning agent (solves conditioned on it), trained as a two-player Markov game with MARL — alternating updates, REINFORCE++ in the single-turn case, GRPO with turn-level ratios and clipping in the multi-turn case. Gains largest out-of-distribution; multi-turn training can fall into an 'Echo Trap' of repetitive outputs."
graphEdges:
  - target: hierarchical-llm-agent
    label: instance of
  - target: multi-agent-rl
    label: trained with
  - target: language-as-abstraction
    label: meta-thought as text
  - target: grpo
    label: multi-turn variant of
  - target: rl-for-llm
    label: instance of
  - target: math-reasoning
    label: evaluated on
---
