---
title: "Curriculum Reinforcement Learning using Optimal Transport via Gradual Domain Adaptation"
authors: ["Peide Huang", "Mengdi Xu", "Jiacheng Zhu", "Laixi Shi", "Fei Fang", "Ding Zhao"]
year: 2022
venue: "NeurIPS 2022"
arxiv: "https://arxiv.org/abs/2210.10195"
abstract: "Curriculum Reinforcement Learning (CRL) aims to create a sequence of tasks, starting from easy ones and gradually learning towards difficult tasks. In this work, we focus on the idea of framing CRL as interpolations between a source (auxiliary) and a target task distribution. Although existing studies have shown the great potential of this idea, it remains unclear how to formally quantify and generate the movement between task distributions. Inspired by the insights from gradual domain adaptation in semi-supervised learning, we create a natural curriculum by breaking down the potentially large task distributional shift in CRL into smaller shifts. We propose GRADIENT, which formulates CRL as an optimal transport problem with a tailored distance metric between tasks. Specifically, we generate a sequence of task distributions as a geodesic interpolation (i.e., Wasserstein barycenter) between the source and target distributions. Different from many existing methods, our algorithm considers a task-dependent contextual distance metric and is capable of handling nonparametric distributions in both continuous and discrete context settings. In addition, we theoretically show that GRADIENT enables smooth transfer between subsequent stages in the curriculum under certain conditions. We conduct extensive experiments in locomotion and manipulation tasks and show that our proposed GRADIENT achieves higher performance than baselines in terms of learning efficiency and asymptotic performance."
draft: false
graphLabel: "GRADIENT (Curriculum OT)"
graphDescription: "Huang, Xu, Zhu, Shi, Fang & Zhao (2022, NeurIPS). Defines a contextual pi-bisimulation-flavoured distance BETWEEN CONTEXTS/TASKS (not between states within a task), then uses optimal transport to interpolate a Wasserstein-barycenter path of task distributions from an easy source to the hard target — a curriculum that is smooth by construction because consecutive stages are close under that distance. Uses bisimulation-style distance for curriculum GENERATION (auto-curriculum / UED), not representation learning — a different purpose than DBC/MICo/SimSR despite sharing the same mathematical machinery (optimal transport over context/task distributions)."
graphEdges:
  - target: bisimulation-metric
    label: uses
  - target: contextual-mdp
    label: addresses
  - target: unsupervised-environment-design
    label: related
---
