---
title: "Training Agents Inside of Scalable World Models"
authors: ["Danijar Hafner", "Wilson Yan", "Timothy Lillicrap"]
year: 2025
venue: "arXiv 2025"
arxiv: "https://arxiv.org/abs/2509.24527"
abstract: "World models learn general knowledge from videos and simulate experience for training behaviors in imagination, offering a path towards intelligent agents. However, previous world models have been unable to accurately predict object interactions in complex environments. We introduce Dreamer 4, a scalable agent that learns to solve control tasks by reinforcement learning inside of a fast and accurate world model. In the complex video game Minecraft, the world model accurately predicts object interactions and game mechanics, outperforming previous world models by a large margin. The world model achieves real-time interactive inference on a single GPU through a shortcut forcing objective and an efficient transformer architecture. Moreover, the world model learns general action conditioning from only a small amount of data, allowing it to extract the majority of its knowledge from diverse unlabeled videos. We propose the challenge of obtaining diamonds in Minecraft from only offline data, aligning with practical applications such as robotics where learning from environment interaction can be unsafe and slow. This task requires choosing sequences of over 20,000 mouse and keyboard actions from raw pixels. By learning behaviors in imagination, Dreamer 4 is the first agent to obtain diamonds in Minecraft purely from offline data, without environment interaction."
draft: false
graphLabel: "Dreamer v4"
graphDescription: "Hafner et al. (2025). Scalable world model using transformer + shortcut forcing; learns action conditioning from unlabeled video. First agent to obtain diamonds in Minecraft purely from offline data."
graphEdges:
  - target: dreamerv3
    label: extends
  - target: model-based-rl
    label: based on
  - target: transformer
    label: uses
  - target: latent-dynamics
    label: uses
  - target: offline-rl
    label: offline setting
  - target: minecraft
    label: evaluated on
---
