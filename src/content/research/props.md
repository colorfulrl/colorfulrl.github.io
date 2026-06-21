---
title: "Prompted Policy Search: Reinforcement Learning through Linguistic and Numerical Reasoning in LLMs"
authors: ["Yifan Zhou", "Sachin Grover", "Mohamed El Mistiri", "Kamalesh Kalirathnam", "Pratyush Kerhalkar", "Swaroop Mishra", "Neelesh Kumar", "Sanket Gaurav", "Oya Aran", "Heni Ben Amor"]
year: 2025
venue: "NeurIPS 2025"
arxiv: "https://arxiv.org/abs/2511.21928"
abstract: "We present a reinforcement learning approach that unifies numerical and linguistic reasoning within a single framework. Rather than relying solely on scalar rewards, our method—Prompted Policy Search (ProPS)—enables large language models to propose policy updates using both reward signals and natural language guidance, including goals and domain knowledge. By placing an LLM directly in the policy optimization loop, we demonstrate that large language models can perform numerical optimization via in-context learning while incorporating semantic information. We evaluate ProPS on 15 Gymnasium tasks spanning classic control, Atari, and MuJoCo, comparing against seven baseline algorithms including PPO, SAC, and TRPO, and outperform them on 8 of 15 tasks."
draft: false
graphLabel: "ProPS"
graphDescription: "Zhou et al. (2025, NeurIPS). Prompted Policy Search: puts an LLM directly in the policy-optimization loop as the OPTIMIZER — it proposes policy parameter updates from both scalar reward signals and natural-language guidance (goals, domain knowledge), doing numerical optimization via in-context learning. Outperforms PPO/SAC/TRPO on 8/15 Gymnasium tasks. Evidence that LLMs can serve as semantic-aware black-box policy optimizers."
graphEdges:
  - target: llm-for-rl
    label: instance of
  - target: policy-gradient
    label: LLM as policy optimizer
  - target: atari
    label: evaluated on
  - target: mujoco
    label: evaluated on
---
