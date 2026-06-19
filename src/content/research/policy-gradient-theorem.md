---
title: "Policy Gradient Methods for Reinforcement Learning with Function Approximation"
authors: ["Richard S. Sutton", "David A. McAllester", "Satinder P. Singh", "Yishay Mansour"]
year: 2000
venue: "NeurIPS 2000"
abstract: "Function approximation is essential to reinforcement learning, but the standard approach of approximating a value function and determining a policy from it has so far proven theoretically intractable. In this paper we explore an alternative approach in which the policy is explicitly represented by its own function approximator, independent of the value function, and is updated according to the gradient of expected reward with respect to the policy parameters. Our main new result is to show that the gradient can be written in a form suitable for estimation from experience aided by an approximate action-value or advantage function. Using this result, we prove for the first time that a version of policy iteration with arbitrary differentiable function approximation is convergent to a locally optimal policy."
draft: true
graphEdges:
  - target: policy-gradient
    label: proves
  - target: actor-critic
    label: enables
  - target: reinforce
    label: extends
graphLabel: "Policy Gradient Thm"
graphDescription: "Sutton et al. (2000). Proves the policy gradient theorem: ∇J(θ) ∝ Σ_s d(s) Σ_a Q^π(s,a) ∇π(a|s,θ), enabling unbiased gradient estimation with a critic."
---
