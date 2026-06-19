---
title: "Imagine Within Practice: Conservative Rollout Length Adaptation for Model-Based Reinforcement Learning"
authors: ["Long Qian", "Ziru Wang", "Zeyang Liu", "Zhuoran Chen", "Zechen Shi", "Xuguang Lan"]
year: 2024
venue: "ICLR 2024"
arxiv: "https://openreview.net/forum?id=cYksYKbf6K"
abstract: "Model-based reinforcement learning (MBRL) algorithms achieve high sample efficiency by leveraging imagined rollouts from a world model for policy optimization. A crucial hyperparameter in MBRL is the rollout length, which represents a trade-off between data quality and efficiency by limiting the imaginary horizon. While longer rollout length offers enhanced efficiency, it introduces more unrealistic data due to compounding error, potentially leading to catastrophic performance deterioration. To prevent significant deviations between imagined rollouts and real transitions, most model-based methods manually tune a fixed rollout length for the entire training process. However, the fixed rollout length is not optimal for all rollouts and does not effectively prevent the generation of unrealistic data. To tackle this problem, we propose a novel method called Conservative Rollout Length Adaptation (CRLA), which conservatively restricts the agent from selecting actions that are rarely taken in the current state. CRLA truncates the rollout to preserve safety when there is a high probability of selecting infrequently taken actions. We apply our method to DreamerV3 and evaluate it on the Atari 100k benchmark."
draft: false
graphLabel: "CRLA"
graphDescription: "Qian et al. (2024). Adaptively truncates imagined rollouts when the agent is about to take rarely-seen actions, mitigating compounding error in MBRL. Applied to DreamerV3 on Atari 100k."
graphEdges:
  - target: model-based-rl
    label: improves
  - target: dreamerv3
    label: applied to
  - target: latent-dynamics
    label: addresses limitations of
  - target: atari
    label: evaluated on
---
