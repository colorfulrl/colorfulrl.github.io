---
title: "Evolving Curricula with Regret-Based Environment Design"
authors: ["Jack Parker-Holder", "Minqi Jiang", "Michael Dennis", "Mikayel Samvelyan", "Jakob Foerster", "Edward Grefenstette", "Tim Rocktäschel"]
year: 2022
venue: "ICML 2022"
arxiv: "https://arxiv.org/abs/2203.01302"
abstract: "It remains a significant challenge to train generally capable agents with reinforcement learning (RL). A promising avenue for improving the robustness of RL agents is through the use of curricula. One such class of methods frames environment design as a game between a student and a teacher, using regret-based objectives to produce environment instantiations (or levels) at the frontier of the student agent's capabilities. These methods benefit from their generality, with theoretical guarantees at equilibrium, yet they often struggle to find effective levels in challenging design spaces. By contrast, evolutionary approaches seek to incrementally alter environment complexity, resulting in potentially open-ended learning, but often rely on domain-specific heuristics and vast amounts of computational resources. In this paper we propose to harness the power of evolution in a principled, regret-based curriculum. Our approach, which we call Adversarially Compounding Complexity by Editing Levels (ACCEL), seeks to constantly produce levels at the frontier of an agent's capabilities, resulting in curricula that start simple but become increasingly complex. ACCEL maintains the theoretical benefits of prior regret-based methods, while providing significant empirical gains in a diverse set of environments."
draft: false
graphLabel: "ACCEL"
graphDescription: "Parker-Holder, Jiang, Dennis, Samvelyan, Foerster, Grefenstette & Rocktäschel (2022, ICML). Marries PLR's regret-based prioritization with evolutionary level editing: instead of only re-sampling from a fixed pool (PLR) or generating from scratch adversarially (PAIRED), ACCEL takes existing high-regret levels and mutates them incrementally, so the curriculum can start trivially simple and open-endedly increase in complexity while retaining PLR/PAIRED's theoretical regret guarantees at equilibrium."
graphEdges:
  - target: unsupervised-environment-design
    label: extends
  - target: generalization-rl
    label: addresses
---
