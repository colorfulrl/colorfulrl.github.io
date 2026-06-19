---
title: "Dyna, an Integrated Architecture for Learning, Planning, and Reacting"
authors: ["Richard S. Sutton"]
year: 1991
venue: "ACM SIGART Bulletin 2(4)"
arxiv: "https://dl.acm.org/doi/10.1145/122344.122377"
abstract: "The Dyna architecture integrates learning, planning, and reacting in a single computational agent. The agent interacts with its environment continuously, integrating planning and reacting into a coherent architecture by using the same model-free RL algorithm for both real and simulated experience. Dyna agents learn a model of the environment from real interactions and then use the model to generate simulated experience for additional planning steps, interleaving real and simulated updates. This article introduces the Dyna architecture and describes preliminary results demonstrating that the combination of model learning and planning can significantly improve the efficiency of RL in environments with limited interaction opportunity."
draft: false
graphEdges:
  - target: model-based-rl
    label: introduces
  - target: temporal-difference
    label: uses
  - target: experience-replay
    label: precursor to
graphLabel: "Dyna"
graphDescription: "Sutton (1991). Proposes the Dyna loop: real environment steps update both a model and a value function; extra planning steps use the model to generate synthetic experience."
---
