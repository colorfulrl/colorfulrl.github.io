---
title: "Contextual Markov Decision Processes"
authors: ["Assaf Hallak", "Dotan Di Castro", "Shie Mannor"]
year: 2015
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/1502.02259"
abstract: "We consider a planning problem where the dynamics and rewards of the environment depend on a hidden static parameter referred to as the context. The objective is to learn a strategy that maximizes the accumulated reward across all contexts. The new model, called Contextual Markov Decision Process (CMDP), can model a customer's behavior when interacting with a website (the learner). The customer's behavior depends on gender, age, location, device, etc. Based on that behavior, the website objective is to determine customer characteristics, and to optimize the interaction between them. Our work focuses on one basic scenario--finite horizon with a small known number of possible contexts. We suggest a family of algorithms with provable guarantees that learn the underlying models and the latent contexts, and optimize the CMDPs. Bounds are obtained for specific naive implementations, and extensions of the framework are discussed, laying the ground for future research."
draft: false
graphLabel: "Contextual MDP"
graphDescription: "Hallak, Di Castro & Mannor (2015). Introduces the Contextual MDP: a family of MDPs sharing structure but differing by a hidden static context that sets the dynamics/reward, with provable-guarantee algorithms for the finite-context, finite-horizon case. The formalism underlying every zero-shot generalization benchmark (CARL, Procgen) and every context-conditioned method downstream — context here is exactly what CARL exposes explicitly as a controllable parameter vector."
graphEdges:
  - target: contextual-mdp
    label: introduces
  - target: generalization-rl
    label: formalizes
---
