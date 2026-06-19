---
title: "Natural Actor-Critic"
authors: ["Jan Peters", "Stefan Schaal"]
year: 2008
venue: "Neurocomputing 2008"
arxiv: "https://people.eecs.berkeley.edu/~pabbeel/cs287-fa09/readings/PetersSchaal-NaturalActorCritic-NC2008.pdf"
abstract: "This paper investigates natural actor-critic (NAC) algorithms for reinforcement learning. We present an actor-critic method where the actor updates are in the natural gradient direction and are estimated by a least-squares method from the critic's compatible function approximation. We also introduce Episodic Natural Actor-Critic (eNAC) which estimates the natural gradient using the average reward baseline and works in the episodic setting. We demonstrate the algorithms on a set of motor learning benchmarks, including a robot learning to hit a baseball, showing that natural gradient directions lead to significantly better policy updates than vanilla policy gradients."
draft: false
graphLabel: "Natural AC"
graphDescription: "Peters & Schaal (2008). First actor-critic using natural policy gradient direction — uses compatible function approximation in the critic to enable exact Fisher-metric gradient for the actor. Seminal robotics RL paper."
graphEdges:
  - target: actor-critic
    label: uses
  - target: policy-gradient
    label: extends
  - target: natural-pg
    label: uses
---
