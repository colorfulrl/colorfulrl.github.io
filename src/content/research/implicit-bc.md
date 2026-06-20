---
title: "Implicit Behavioral Cloning"
authors: ["Pete Florence", "Corey Lynch", "Andy Zeng", "Oscar Ramirez", "Ayzaan Wahid", "Laura Downs", "Adrian Wong", "Johnny Lee", "Igor Mordatch", "Jonathan Tompson"]
year: 2021
venue: "CoRL 2021"
arxiv: "https://arxiv.org/abs/2109.00137"
abstract: "We find that across a wide range of robot policy learning scenarios, treating supervised policy learning with an implicit model generally performs better, on average, than commonly used explicit models. We present extensive experiments on this finding, and we provide both intuitive insight and theoretical arguments distinguishing the properties of implicit models compared to their explicit counterparts, particularly with respect to approximating complex, potentially discontinuous and multi-valued (set-valued) functions. On robotic policy learning tasks we show that implicit behavioral cloning policies with energy-based models (EBM) often outperform common explicit (Mean Square Error, or Mixture Density) behavioral cloning policies, including on tasks with high-dimensional action spaces and visual image inputs. We find these policies provide competitive results or outperform state-of-the-art offline reinforcement learning methods on the challenging human-expert tasks from the D4RL benchmark suite, despite using no reward information. In the real world, robots with implicit policies can learn complex and remarkably subtle behaviors on contact-rich tasks from human demonstrations, including tasks with high combinatorial complexity and tasks requiring 1mm precision. [Note: abstract reconstructed, pending verbatim confirmation.]"
draft: false
graphLabel: "Implicit BC"
graphDescription: "Florence et al. (2021). Reformulates behavior cloning with energy-based models — the policy is argmin over a learned energy, letting it represent discontinuous and multi-valued action maps that MSE/MDN regression cannot. Matches or beats offline RL on D4RL without reward. CoRL 2021."
graphEdges:
  - target: behavior-cloning
    label: extends
  - target: imitation-learning
    label: based on
  - target: offline-rl
    label: evaluated on
  - target: d4rl
    label: evaluated on
---
