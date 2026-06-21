---
title: "Learning Combinatorial Optimization Algorithms over Graphs (S2V-DQN)"
authors: ["Hanjun Dai", "Elias B. Khalil", "Yuyu Zhang", "Bistra Dilkina", "Le Song"]
year: 2017
venue: "NeurIPS 2017"
arxiv: "https://arxiv.org/abs/1704.01665"
abstract: "The design of good heuristics or approximation algorithms for NP-hard combinatorial optimization problems often requires significant specialized knowledge and trial-and-error. Can we automate this challenging, tedious process, and learn the algorithms instead? In many real-world applications, it is typically the case that the same optimization problem is solved again and again on a regular basis, maintaining the same problem structure but differing in the data. This provides an opportunity for learning heuristic algorithms that exploit the structure of such recurring problems. In this paper, we propose a unique combination of reinforcement learning and graph embedding to address this challenge. The learned greedy policy behaves like a meta-algorithm that incrementally constructs a solution, and the action is determined by the output of a graph embedding network capturing the current state of the solution. We show that our framework can be applied to a diverse range of optimization problems over graphs, and learns effective algorithms for the Minimum Vertex Cover, Maximum Cut and Traveling Salesman problems."
graphLabel: "S2V-DQN (Graphs)"
graphDescription: "Dai, Khalil et al. (2017, NeurIPS). Kết hợp graph embedding (structure2vec) + DQN: học greedy policy xây lời giải tăng dần cho bài toán trên đồ thị, action chọn theo embedding trạng thái hiện tại. Tổng quát cho Min Vertex Cover, Max Cut, TSP. Khai thác cấu trúc bài toán lặp lại — meta-algorithm học được."
draft: false
---
