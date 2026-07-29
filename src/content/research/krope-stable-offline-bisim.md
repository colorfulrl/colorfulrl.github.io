---
title: "Stable Offline Value Function Learning with Bisimulation-based Representations"
authors: ["Brahma S. Pavse", "Yudong Chen", "Qiaomin Xie", "Josiah P. Hanna"]
year: 2024
venue: "ICML 2025"
arxiv: "https://arxiv.org/abs/2410.01643"
abstract: "In reinforcement learning, offline value function learning is the procedure of using an offline dataset to estimate the expected discounted return from each state when taking actions according to a fixed target policy. The stability of this procedure, i.e., whether it converges to its fixed-point, critically depends on the representations of the state-action pairs. [Note: remainder reconstructed from secondary source, not fetched verbatim in full — verify before quoting.] Poorly chosen representations can make the projected fixed-point equation diverge even when the underlying dynamics are well-behaved. The paper introduces KROPE, a kernel-based representation learning algorithm that shapes state-action representations so that pairs with similar reward and similar next-state distribution under the fixed target policy get similar representations — a bisimulation-flavoured, evaluation-specific (not control) objective. Shown to stabilize offline value estimation and reduce value error relative to prior representation choices."
draft: false
graphLabel: "KROPE"
graphDescription: "Pavse, Chen, Xie & Hanna (2024/ICML 2025). A direct follow-up to the offline-bisimulation-pitfalls diagnosis: targets offline POLICY EVALUATION specifically (fixed target policy, not control), and shows representation choice determines whether the offline TD fixed-point equation even converges. KROPE shapes state-action representations via a bisimulation-style kernel (similar reward + similar next-state distribution under the fixed policy -> similar representation) to guarantee stability. Narrower scope than the general offline-RL pitfalls paper but sharper theoretical guarantee."
graphEdges:
  - target: bisimulation-metric
    label: extends
  - target: offline-rl
    label: addresses
  - target: bisimulation-offline-pitfalls
    label: follows up on
---
