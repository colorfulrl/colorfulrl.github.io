---
title: "Maximum Entropy Inverse Reinforcement Learning"
authors: ["Brian D. Ziebart", "Andrew Maas", "J. Andrew Bagnell", "Anind K. Dey"]
year: 2008
venue: "AAAI 2008"
arxiv: "https://cdn.aaai.org/AAAI/2008/AAAI08-227.pdf"
abstract: "Recent research has shown the benefit of framing problems of imitation learning as solutions to Markov decision problems, reducing learning to recovering a utility (reward) function under which near-optimal behavior closely matches demonstrated behavior. A central difficulty is that many reward functions explain the same demonstrations equally well (the IRL ambiguity). This work develops a probabilistic approach based on the principle of maximum entropy: among all distributions over behavior that match the demonstrated feature expectations, choose the one of maximum entropy, yielding a well-defined, globally normalized distribution over decision sequences that does not exhibit a preference between equally-good paths. The approach is developed in the context of modeling real-world driving and route-preference behavior from noisy, imperfect GPS data, and enables inferring destinations and routes from partial trajectories. [Note: abstract summarized from the paper, pending verbatim text.]"
draft: false
graphLabel: "MaxEnt IRL"
graphDescription: "Ziebart et al. (2008). Resolves IRL's reward ambiguity with the maximum-entropy principle — picks the distribution over trajectories of highest entropy subject to matching expert feature expectations, giving a principled, globally-normalized probabilistic model. The most influential classical IRL formulation; basis for GCL and AIRL. AAAI 2008."
graphEdges:
  - target: inverse-rl
    label: based on
  - target: maximum-entropy-rl
    label: uses
  - target: imitation-learning
    label: based on
---
