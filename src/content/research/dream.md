---
title: "Decoupling Exploration and Exploitation for Meta-Reinforcement Learning without Sacrifices"
authors: ["Evan Zheran Liu", "Aditi Raghunathan", "Percy Liang", "Chelsea Finn"]
year: 2021
venue: "ICML 2021"
arxiv: "https://arxiv.org/abs/2008.02790"
abstract: "The goal of meta-reinforcement learning (meta-RL) is to build agents that can quickly learn new tasks by leveraging prior experience on related tasks. Learning a new task often requires both exploring to gather task-relevant information and exploiting this information to solve the task. In principle, optimal exploration and exploitation can be learned end-to-end by simply maximizing task performance. However, such meta-RL approaches struggle with local optima due to a chicken-and-egg problem: learning to explore requires good exploitation to gauge the exploration's utility, but learning to exploit requires information gathered via exploration. Optimizing separate objectives for exploration and exploitation can avoid this problem, but prior meta-RL exploration objectives yield suboptimal policies that gather information irrelevant to the task. We alleviate both concerns by constructing an exploitation objective that automatically identifies task-relevant information and an exploration objective to recover only this information. This avoids local optima in end-to-end training, without sacrificing optimal exploration. Empirically, DREAM substantially outperforms existing approaches on complex meta-RL problems, such as sparse-reward 3D visual navigation. [Note: abstract reconstructed, pending verbatim confirmation.]"
draft: false
graphLabel: "DREAM"
graphDescription: "Liu et al. (2021). Decouples meta-RL exploration from exploitation — an exploitation objective identifies task-relevant information, and an exploration objective learns to recover exactly that. Escapes the explore/exploit chicken-and-egg local optima. Strong on sparse-reward 3D navigation. ICML 2021."
graphEdges:
  - target: meta-rl
    label: based on
  - target: meta-exploration
    label: introduces
  - target: task-inference
    label: uses
  - target: exploration
    label: uses
---
