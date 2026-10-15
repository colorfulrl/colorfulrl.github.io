---
title: "Eureka: Human-Level Reward Design via Coding Large Language Models"
authors: ["Yecheng Jason Ma", "William Liang", "Guanzhi Wang", "De-An Huang", "Osbert Bastani", "Dinesh Jayaraman", "Yuke Zhu", "Linxi Fan", "Anima Anandkumar"]
year: 2023
venue: "ICLR 2024"
arxiv: "https://arxiv.org/abs/2310.12931"
abstract: "Large language models are strong high-level planners, but using them to learn complex low-level manipulation, such as dexterous pen spinning, has been difficult. Eureka uses GPT-4-class models to write reward functions as code, then refines them through evolutionary search with in-context feedback; the resulting rewards train RL policies. Across 29 open-source RL environments spanning 10 robot morphologies, Eureka outperforms human-designed rewards on 83% of tasks, with an average normalized improvement of 52%. It also supports a gradient-free form of RLHF that improves reward quality and safety without updating model weights, and combined with curriculum learning it lets a simulated Shadow Hand perform pen-spinning tricks."
draft: false
graphLabel: "Eureka"
graphDescription: "Ma et al. (2023, ICLR 2024). An LLM writes reward functions as code and refines them by evolutionary search with in-context feedback. Beats expert-designed rewards on 83% of 29 environments across 10 robot morphologies; supports gradient-free RLHF and, with curriculum learning, enables Shadow Hand pen spinning."
graphEdges:
  - target: llm-for-rl
    label: instance of
  - target: ai-feedback-reward
    label: designs rewards via
  - target: automatic-curriculum
    label: combined with
  - target: motif
    label: relates to
---
