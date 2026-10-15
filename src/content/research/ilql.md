---
title: "Offline RL for Natural Language Generation with Implicit Language Q Learning"
authors: ["Charlie Snell", "Ilya Kostrikov", "Yi Su", "Mengjiao Yang", "Sergey Levine"]
year: 2022
venue: "ICLR 2023"
arxiv: "https://arxiv.org/abs/2206.11871"
abstract: "Large language models distill broad knowledge from text, but can be inconsistent when completing user-specified tasks. This can be addressed by combining supervised learning with the flexible utility-maximization framework of reinforcement learning. The paper proposes implicit language Q-learning (ILQL), an offline RL method for language models that combines value conservatism with an implicit dataset-support constraint to learn value functions that steer generation toward a user-specified utility. ILQL is shown to be a stronger utility optimizer than prior methods for end-to-end dialogue and can handle high-variance, subjective rewards such as toxicity labeling."
draft: false
graphLabel: "ILQL"
graphDescription: "Snell et al. (2022). Implicit Q-Learning applied to language models as a token-level MDP: expectile-regression value functions plus a CQL-style conservatism term, with no separate actor — at inference the behavior LM's token probabilities are reweighted by exp(β(Q−V)). Offline, about as stable as supervised fine-tuning, and able to stitch good sub-trajectories (Wordle, Visual Dialogue, Reddit toxicity/upvotes)."
graphEdges:
  - target: iql
    label: extends to tokens
  - target: cql
    label: borrows conservatism
  - target: awac
    label: compared with
  - target: decision-transformer
    label: outperforms
  - target: token-level-mdp
    label: casts text as
  - target: rl-for-llm
    label: instance of
  - target: offline-rl
    label: instance of
---
