---
title: "Apprenticeship Learning via Inverse Reinforcement Learning"
authors: ["Pieter Abbeel", "Andrew Y. Ng"]
year: 2004
venue: "ICML 2004"
arxiv: "https://ai.stanford.edu/~ang/papers/icml04-apprentice.pdf"
abstract: "This paper considers learning in a Markov decision process where the reward function is not explicitly given, but where instead an expert can be observed demonstrating the task to be learned. This setting is useful in applications (such as driving) where it is difficult to write down an explicit reward function specifying exactly how competing desiderata should be traded off. The expert is assumed to be maximizing a reward function expressible as a linear combination of known features, and an algorithm is given for learning the demonstrated task. The algorithm is based on using inverse reinforcement learning to recover the unknown reward function and matching the expert's feature expectations. It is shown that the algorithm terminates in a small number of iterations, and that — even though the expert's true reward function may never be exactly recovered — the policy output attains performance close to that of the expert, measured with respect to the expert's unknown reward function. [Note: abstract summarized from the paper, pending verbatim text.]"
draft: false
graphLabel: "Apprenticeship Learning"
graphDescription: "Abbeel & Ng (2004). Brought IRL to the RL community: assuming the expert's reward is linear in known features, the algorithm matches feature expectations to reach expert-level performance without ever exactly recovering the true reward. Foundational feature-matching IRL. ICML 2004."
graphEdges:
  - target: inverse-rl
    label: based on
  - target: imitation-learning
    label: based on
---
