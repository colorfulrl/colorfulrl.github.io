---
title: "C-Learning: Learning to Achieve Goals via Recursive Classification"
authors: ["Benjamin Eysenbach", "Ruslan Salakhutdinov", "Sergey Levine"]
year: 2021
venue: "ICLR 2021"
arxiv: "https://arxiv.org/abs/2011.08909"
abstract: "We study the problem of predicting and controlling the future state distribution of an autonomous agent. This problem, which can be viewed as a reframing of goal-conditioned reinforcement learning (RL), is centered around learning a conditional probability density function over future states. Instead of directly estimating this density function, we indirectly estimate this density function by training a classifier to predict whether an observation comes from the future. Via Bayes' rule, predictions from our classifier can be transformed into predictions over future states. Importantly, an off-policy variant of our algorithm allows us to predict the future state distribution of a new policy, without collecting new experience. This variant allows us to optimize functionals of a policy's future state distribution, such as the density of reaching a particular goal state. While conceptually similar to Q-learning, our work lays a principled foundation for goal-conditioned RL as density estimation, providing justification for goal-conditioned methods used in prior work. This foundation makes hypotheses about Q-learning, including the optimal goal-sampling ratio, which we confirm experimentally. Moreover, our proposed method is competitive with prior goal-conditioned RL methods."
draft: false
graphLabel: "C-Learning"
graphDescription: "Eysenbach, Salakhutdinov & Levine (2021). Reframes goal-conditioned RL as density estimation over future states — trains a classifier to predict whether an observation comes from the future, then converts to future-state predictions via Bayes' rule. Off-policy variant predicts a new policy's future distribution without new data. ICLR 2021."
graphEdges:
  - target: contrastive-rl
    label: based on
  - target: goal-conditioned-rl
    label: addresses
  - target: temporal-difference
    label: uses
  - target: model-free-rl
    label: based on
---
