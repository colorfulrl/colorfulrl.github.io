---
title: "Voyager: An Open-Ended Embodied Agent with Large Language Models"
authors: ["Guanzhi Wang", "Yuqi Xie", "Yunfan Jiang", "Ajay Mandlekar", "Chaowei Xiao", "Yuke Zhu", "Linxi Fan", "Anima Anandkumar"]
year: 2023
venue: "TMLR 2024"
arxiv: "https://arxiv.org/abs/2305.16291"
abstract: "Voyager is the first LLM-powered embodied lifelong learning agent in Minecraft. It continuously explores the world, acquires diverse skills and makes novel discoveries without human intervention. It has three key components: an automatic curriculum that maximizes exploration, an ever-growing skill library of executable code for storing and retrieving complex behaviors, and an iterative prompting mechanism that incorporates environment feedback, execution errors and self-verification. Voyager queries GPT-4 without fine-tuning, obtains 3.3x more unique items, travels 2.3x longer distances and unlocks tech-tree milestones up to 15.3x faster than prior methods, and its skills transfer to new worlds."
draft: false
graphLabel: "Voyager"
graphDescription: "Wang et al. (2023). An LLM agent that learns without gradients: GPT-4 proposes the next task (automatic curriculum), writes Mineflayer code as the action space, and refines it from environment feedback, interpreter errors and a GPT-4 critic; verified programs enter a vector-indexed skill library and compose into harder skills. Only method to reach diamond tools; skills transfer zero-shot to new worlds. Self-verification is the most important component."
graphEdges:
  - target: skill-library
    label: introduces
  - target: automatic-curriculum
    label: introduces
  - target: llm-for-rl
    label: instance of
  - target: options-framework
    label: code skills as options
  - target: novelty-search
    label: motivated by
  - target: go-explore
    label: related to
  - target: minecraft
    label: evaluated on
---
