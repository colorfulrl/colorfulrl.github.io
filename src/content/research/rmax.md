---
title: "R-MAX – A General Polynomial Time Algorithm for Near-Optimal Reinforcement Learning"
authors: ["Ronen I. Brafman", "Moshe Tennenholtz"]
year: 2002
venue: "JMLR 2002"
arxiv: "https://www.jmlr.org/papers/volume3/brafman02a/brafman02a.pdf"
abstract: "R-MAX is a very simple model-based reinforcement learning algorithm which can attain near-optimal average reward in polynomial time. In R-MAX, the agent always maintains a complete, but possibly inaccurate, model of its environment and acts based on the optimal policy derived from this model. The model is initialized in an optimistic fashion: all actions in all states return the maximal possible reward (hence the name). During execution, it is updated based on the agent's observations. R-MAX improves upon several previous algorithms: (1) it is simpler and more general than Kearns and Singh's E3 algorithm, covering zero-sum stochastic games; (2) it has a built-in mechanism for resolving the exploration vs. exploitation dilemma; and (3) it formally justifies the 'optimism in the face of uncertainty' bias used in many RL algorithms. We prove that R-MAX attains near-optimal average reward in polynomial time, providing one of the first such guarantees for reinforcement learning. [Note: abstract reconstructed, pending verbatim confirmation.]"
draft: false
graphLabel: "R-MAX"
graphDescription: "Brafman & Tennenholtz (2002). The canonical 'optimism in the face of uncertainty' algorithm — initialize unknown states to maximal reward, act optimally under the model, update as you observe. First simple model-based method with polynomial-time near-optimal (PAC-MDP) guarantees; formal justification for optimistic exploration. JMLR 2002."
graphEdges:
  - target: model-based-rl
    label: based on
  - target: exploration
    label: uses
  - target: value-based
    label: uses
---
