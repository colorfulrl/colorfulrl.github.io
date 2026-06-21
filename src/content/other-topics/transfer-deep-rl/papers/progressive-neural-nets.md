---
title: "Progressive Neural Networks"
authors: ["Andrei A. Rusu", "Neil C. Rabinowitz", "Guillaume Desjardins", "Hubert Soyer", "James Kirkpatrick", "Koray Kavukcuoglu", "Razvan Pascanu", "Raia Hadsell"]
year: 2016
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/1606.04671"
abstract: "Learning to solve complex sequences of tasks while both leveraging transfer and avoiding catastrophic forgetting remains a key obstacle to achieving human-level intelligence. Progressive networks approach this challenge by instantiating a new neural column for each new task, with lateral connections to all previously learned columns. Prior columns are frozen to prevent forgetting while the new column can freely reuse features from them. We demonstrate transfer on Atari games and simulated 3D robot locomotion tasks."
graphLabel: "Progressive Neural Nets (Rusu 2016)"
graphDescription: "Rusu, Rabinowitz et al. (2016, DeepMind). Adds a new network column per task with lateral connections to frozen prior columns — immune to catastrophic forgetting by construction, while lateral connections enable positive transfer. Applied to Atari sequences and robotics. The cleanest solution to the stability-plasticity dilemma in RL; spawned PackNet, PNN variants."
draft: false
---
