---
title: "Reinforcement Learning for Solving the Vehicle Routing Problem"
authors: ["Mohammadreza Nazari", "Afshin Oroojlooy", "Lawrence V. Snyder", "Martin Takáč"]
year: 2018
venue: "NeurIPS 2018"
arxiv: "https://arxiv.org/abs/1802.04240"
abstract: "We present an end-to-end framework for solving the Vehicle Routing Problem (VRP) using reinforcement learning. In this approach, we train a single model that finds near-optimal solutions for problem instances sampled from a given distribution, only by observing the reward signals and following feasibility rules. Our model represents a parameterized stochastic policy, and by applying a policy gradient algorithm to optimize its parameters, the trained model produces the solution as a sequence of consecutive actions in real time, without the need to re-train for every new problem instance. On capacitated VRP, our approach outperforms classical heuristics and Google's OR-Tools on medium-sized instances in solution quality with comparable computation time (after training). We demonstrate how our approach can handle problems with split delivery and explore the effect of such deliveries on the solution quality. Our proposed framework can be applied to other variants of the VRP such as the stochastic VRP, and has the potential to be applied more generally to combinatorial optimization problems."
graphLabel: "RL for VRP (Nazari)"
graphDescription: "Nazari et al. (2018, NeurIPS). Khung end-to-end giải Vehicle Routing Problem: một model học policy ngẫu nhiên tham số hóa, sinh lời giải dạng chuỗi action real-time, không cần re-train mỗi instance. Vượt heuristic cổ điển + Google OR-Tools trên capacitated VRP cỡ vừa; xử lý được split delivery, stochastic VRP. Đưa neural-CO vào logistics thật."
draft: false
---
