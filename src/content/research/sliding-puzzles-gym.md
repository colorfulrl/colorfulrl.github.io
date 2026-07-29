---
title: "Sliding Puzzles Gym: A Scalable Benchmark for State Representation in Visual Reinforcement Learning"
authors: ["Bryan L. M. de Oliveira", "Luana G. B. Martins", "Bruno Brandão", "Murilo L. da Luz", "Telma W. de L. Soares", "Luckeciano C. Melo"]
year: 2024
venue: "arXiv preprint"
arxiv: "https://arxiv.org/abs/2410.14038"
abstract: "Effective visual representation learning is crucial for reinforcement learning (RL) agents to extract task-relevant information from raw sensory inputs and generalize across diverse environments. However, existing RL benchmarks lack the ability to systematically evaluate representation learning capabilities in isolation from other learning challenges. To address this gap, we introduce the Sliding Puzzles Gym (SPGym), a novel benchmark that transforms the classic 8-tile puzzle into a visual RL task with images drawn from arbitrarily large datasets. SPGym's key innovation lies in its ability to precisely control representation learning complexity through adjustable grid sizes and image pools, while maintaining fixed environment dynamics, observation, and action spaces. This design enables researchers to isolate and scale the visual representation challenge independently of other learning components. Through extensive experiments with model-free and model-based RL algorithms, we uncover fundamental limitations in current methods' ability to handle visual diversity. As we increase the pool of possible images, all algorithms exhibit in- and out-of-distribution performance degradation, with sophisticated representation learning techniques often underperforming simpler approaches like data augmentation. These findings highlight critical gaps in visual representation learning for RL and establish SPGym as a valuable tool for driving progress in robust, generalizable decision-making systems."
draft: false
graphLabel: "Sliding Puzzles Gym"
graphDescription: "de Oliveira, Martins, Brandão, da Luz, Soares & Melo (2024). A benchmark engineered to isolate ONE variable — visual representation difficulty — from everything else: same dynamics/action space always (8-tile sliding puzzle), but the tile images are drawn from an arbitrarily large, scalable image pool. As the image pool grows, every method (including sophisticated representation-learning ones) degrades, and plain data augmentation sometimes beats them. A useful stress test/cautionary benchmark for any bisimulation-style method that claims to 'filter irrelevant visual detail.'"
graphEdges:
  - target: bisimulation-metric
    label: benchmarks
  - target: generalization-rl
    label: addresses
---
