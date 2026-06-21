---
title: "Intrinsic Motivation and Automatic Curricula via Asymmetric Self-Play"
authors: ["Sainbayar Sukhbaatar", "Zeming Lin", "Ilya Kostrikov", "Gabriel Synnaeve", "Arthur Szlam", "Rob Fergus"]
year: 2017
venue: "ICLR 2018"
arxiv: "https://arxiv.org/abs/1703.05407"
abstract: "We describe a simple scheme that allows an agent to learn about its environment in an unsupervised manner. Our scheme pits two versions of the same agent, Alice and Bob, against one another. Alice proposes tasks by visiting a sequence of states, then Bob must return to the original starting state or reach the states visited by Alice. Alice is rewarded for setting tasks that Bob finds difficult, creating an automatic curriculum of progressively harder goals without any external reward signal."
graphLabel: "Asymmetric Self-Play (Sukhbaatar 2017)"
graphDescription: "Sukhbaatar, Lin, Kostrikov, Synnaeve, Szlam & Fergus (2017, ICLR 2018). Alice proposes tasks (sets goal states), Bob solves them; Alice is rewarded by Bob's failure → automatic curriculum of progressively harder tasks emerges without human design. Pioneer of self-play as automatic curriculum — connects intrinsic motivation to task generation."
draft: false
---
