---
title: "Abandoning Objectives: Evolution Through the Search for Novelty Alone"
authors: ["Joel Lehman", "Kenneth O. Stanley"]
year: 2011
venue: "Evolutionary Computation 19(2)"
arxiv: "https://gwern.net/doc/reinforcement-learning/exploration/2011-lehman.pdf"
abstract: "In evolutionary computation, the fitness function normally measures progress toward an objective in the search space, effectively acting as an objective function. Through deception, such objective functions may actually prevent the objective from being reached. While methods exist to mitigate deception, they leave the underlying pathology untreated: Objective functions themselves may actively misdirect search toward dead ends. This paper proposes an approach to circumventing deception that also yields a new perspective on open-ended evolution. Instead of either explicitly seeking an objective or modeling natural evolution to capture open-endedness, the idea is to simply search for behavioral novelty. Even in an objective-based problem, such novelty search ignores the objective. Because many points in the search space collapse to a single behavior, the search for novelty is often feasible. Furthermore, because there are only so many simple behaviors, the search for novelty leads to increasing complexity. By decoupling open-ended search from artificial life worlds, the search for novelty is applicable to real world problems. Counterintuitively, in the maze navigation and biped walking tasks in this paper, novelty search significantly outperforms objective based search, suggesting the strange conclusion that some problems are best solved by methods that ignore the objective. The main lesson is the inherent limitation of the objective-based paradigm and the unexploited opportunity to guide search through other means."
draft: false
graphLabel: "Novelty Search"
graphDescription: "Lehman & Stanley (2011). Replaces fitness objective with behavioral novelty reward — agents that find novel behaviors outperform goal-directed search on deceptive tasks. Influences skill discovery and quality-diversity literature."
graphEdges:
  - target: exploration
    label: alternative approach to
  - target: intrinsic-motivation
    label: related to
---
