---
title: "Emergent Complexity and Zero-shot Transfer via Unsupervised Environment Design"
authors: ["Michael Dennis", "Natasha Jaques", "Eugene Vinitsky", "Alexandre Bayen", "Stuart Russell", "Andrew Critch", "Sergey Levine"]
year: 2020
venue: "NeurIPS 2020"
arxiv: "https://arxiv.org/abs/2012.02096"
abstract: "A wide range of reinforcement learning (RL) problems - including robustness, transfer learning, unsupervised RL, and emergent complexity - require specifying a distribution of tasks or environments in which a policy will be trained. However, creating a useful distribution of environments is error prone, and takes a significant amount of developer time and effort. We propose Unsupervised Environment Design (UED) as an alternative paradigm, where developers provide environments with unknown parameters, and these parameters are used to automatically produce a distribution over valid, solvable environments. Existing approaches to automatically generating environments suffer from common failure modes: domain randomization cannot generate structure or adapt the difficulty of the environment to the agent's learning progress, and minimax adversarial training leads to worst-case environments that are often unsolvable. To generate structured, solvable environments for our protagonist agent, we introduce a second, antagonist agent that is allied with the environment-generating adversary. The adversary is motivated to generate environments which maximize regret, defined as the difference between the protagonist and antagonist agent's return. We call our technique Protagonist Antagonist Induced Regret Environment Design (PAIRED). Our experiments demonstrate that PAIRED produces a natural curriculum of increasingly complex environments, and PAIRED agents achieve higher zero-shot transfer performance when tested in highly novel environments."
draft: false
graphLabel: "PAIRED"
graphDescription: "Dennis, Jaques, Vinitsky, Bayen, Russell, Critch & Levine (2020, NeurIPS). Founds Unsupervised Environment Design (UED): rather than a fixed or randomized training distribution, an adversary proposes levels to maximize REGRET (protagonist return minus a second antagonist agent's return on the same level) — this three-player minimax-regret game avoids both domain randomization's lack of structure and pure adversarial training's tendency to generate unsolvable worst cases. Produces a natural curriculum and improves zero-shot transfer to novel environments."
graphEdges:
  - target: unsupervised-environment-design
    label: introduces
  - target: generalization-rl
    label: addresses
  - target: minigrid
    label: evaluated on
---
