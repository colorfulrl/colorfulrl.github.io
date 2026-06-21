---
title: "CoLight: Learning Network-level Cooperation for Traffic Signal Control"
authors: ["Hua Wei", "Nan Xu", "Huichu Zhang", "Guanjie Zheng", "Xinshi Zang", "Chacha Chen", "Weinan Zhang", "Yanmin Zhu", "Kai Xu", "Zhenhui Li"]
year: 2019
venue: "CIKM 2019"
arxiv: "https://arxiv.org/abs/1905.05717"
abstract: "Cooperation among the traffic signals enables vehicles to move through intersections more quickly. Conventional transportation approaches implement cooperation by pre-calculating the offsets between two intersections. Such pre-calculated offsets are not suitable for dynamic traffic environments. To enable cooperation of traffic signals, in this paper, we propose a model, CoLight, which uses graph attentional networks to facilitate communication. Specifically, for a target intersection in a network, CoLight can not only incorporate the temporal and spatial influences of neighboring intersections to the target intersection, but also build up index-free modeling of neighboring intersections. To the best of our knowledge, we are the first to use graph attentional networks in the setting of reinforcement learning for traffic signal control and to demonstrate its empirical effectiveness under different real-world datasets. In addition, by visualizing the learned attention weights, we present insights on how the cooperation is formed."
graphLabel: "CoLight (Graph Attention)"
graphDescription: "Wei et al. (2019, CIKM). Phối hợp đèn cấp mạng bằng graph attention network: mỗi giao lộ học chú ý tới các giao lộ lân cận nào (index-free), nắm ảnh hưởng không-thời gian. Lần đầu dùng graph attention trong RL-traffic, scale tới hàng trăm đèn. Mốc coordinated signal control."
draft: false
---
