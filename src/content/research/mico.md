---
title: "MICo: Improved representations via sampling-based state similarity for Markov decision processes"
authors: ["Pablo Samuel Castro", "Tyler Kastner", "Prakash Panangaden", "Mark Rowland"]
year: 2021
venue: "NeurIPS 2021"
arxiv: "https://arxiv.org/abs/2106.08229"
abstract: "We present a new behavioural distance over the state space of a Markov decision process, and demonstrate the use of this distance as an effective means of shaping the learnt representations of deep reinforcement learning agents. While existing notions of state similarity are typically difficult to learn at scale due to high computational cost and lack of sample-based algorithms, our newly-proposed distance addresses both of these issues. In addition to providing detailed theoretical analysis, we provide empirical evidence that learning this distance alongside the value function yields structured and informative representations, including strong results on the Arcade Learning Environment benchmark."
draft: false
graphLabel: "MICo"
graphDescription: "Castro, Kastner, Panangaden & Rowland (2021, NeurIPS). Fixes the practical weakness of the classic bisimulation metric (the max/sup operator over the coupling in its Wasserstein term is not sample-friendly — you cannot get an unbiased Monte-Carlo estimate of a max) by using a different distance formulation whose recursive definition IS a valid sample-based (unbiased, easy to bootstrap) target. Learns strong representations jointly with the value function, validated at ALE scale. The paper that made bisimulation-style metrics trainable end-to-end at scale without the instability DBC's Gaussian-W2 approximation carries."
graphEdges:
  - target: bisimulation-metric
    label: extends
  - target: atari
    label: evaluated on
  - target: deep-bisimulation-control
    label: fixes instability in
---
