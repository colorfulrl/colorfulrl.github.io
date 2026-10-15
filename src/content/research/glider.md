---
title: "Divide and Conquer: Grounding LLMs as Efficient Decision-Making Agents via Offline Hierarchical Reinforcement Learning"
authors: ["Zican Hu", "Wei Liu", "Xiaoye Qu", "Xiangyu Yue", "Chunlin Chen", "Zhi Wang", "Yu Cheng"]
year: 2025
venue: "arXiv 2025"
arxiv: "https://arxiv.org/abs/2505.19761"
abstract: "LLM agents struggle with long-horizon decision-making because of weak exploration and poor long-term credit assignment, especially under sparse rewards. GLIDER is a parameter-efficient, broadly applicable hierarchy for LLM policies: a high-level policy produces abstract, step-by-step plans that guide a low-level controller, splitting a complex problem into chain-of-thought subtasks. Because the low-level skills are task-agnostic, the agent adapts quickly to non-stationary environments. Experiments on ScienceWorld and ALFWorld show consistent gains and better generalization."
draft: false
graphLabel: "GLIDER"
graphDescription: "Hu et al. (2025). Offline hierarchical RL for LLM agents: planner and controller share one frozen backbone with LoRA adapters, differing only in prompt. Three stages — behavior cloning with a length regularizer, offline hierarchical RL (sentence-level expectile critic guiding an AWAC-style token actor), then offline-to-online adaptation where only the high level is fine-tuned because low-level skills are task-agnostic. Beats ReAct/Reflexion/ETO on ScienceWorld and ALFWorld."
graphEdges:
  - target: hierarchical-llm-agent
    label: instance of
  - target: language-as-abstraction
    label: plans as subtasks
  - target: archer
    label: shares critic/actor split with
  - target: awac
    label: actor update from
  - target: iql
    label: expectile critic from
  - target: hiro
    label: LLM analogue of
  - target: rl-for-llm
    label: instance of
  - target: scienceworld
    label: evaluated on
  - target: alfworld
    label: evaluated on
---
