---
title: "Language as an Abstraction for Hierarchical Deep Reinforcement Learning"
authors: ["Yiding Jiang", "Shixiang Gu", "Kevin Murphy", "Chelsea Finn"]
year: 2019
venue: "NeurIPS 2019"
arxiv: "https://arxiv.org/abs/1906.07343"
abstract: "Solving complex, temporally-extended tasks is a long-standing problem in reinforcement learning. This paper proposes using language as the abstraction for hierarchical RL: a low-level policy is trained to follow natural-language instructions, and a high-level policy reuses these instructions as its action space. Language is compositional, which allows fast learning and generalization to new sub-skills. The authors also introduce an open-source object-interaction environment built on MuJoCo and CLEVR, with tasks such as object sorting and multi-object rearrangement, including from raw pixels."
draft: false
graphLabel: "HAL"
graphDescription: "Jiang, Gu, Murphy & Finn (2019, NeurIPS). Hierarchical Abstraction with Language: the high-level policy (Double DQN) picks a natural-language instruction, the low-level policy executes it for a few steps. The low level is trained from binary completion rewards by hindsight instruction relabeling — HER for language. Language's compositionality gives much better zero-shot generalization than one-hot instructions; beats flat DDQN, HIRO and Option-Critic on sparse-reward CLEVR-Robot tasks."
graphEdges:
  - target: language-as-abstraction
    label: introduces
  - target: hindsight-relabeling
    label: relabels with language
  - target: her
    label: extends
  - target: hiro
    label: outperforms
  - target: option-critic
    label: outperforms
  - target: uvfa
    label: low level is
  - target: clevr-robot
    label: introduces
---
