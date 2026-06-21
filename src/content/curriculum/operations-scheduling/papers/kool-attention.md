---
title: "Attention, Learn to Solve Routing Problems!"
authors: ["Wouter Kool", "Herke van Hoof", "Max Welling"]
year: 2019
venue: "ICLR 2019"
arxiv: "https://arxiv.org/abs/1803.08475"
abstract: "The recently presented idea to learn heuristics for combinatorial optimization problems is promising as it can save costly development. However, to push this idea towards practical implementation, we need better models and better ways of training. We contribute in both directions: we propose a model based on attention layers with benefits over the Pointer Network and we show how to train this model using REINFORCE with a simple baseline based on a deterministic greedy rollout, which we find is more efficient than using a value function. We significantly improve over recent learned heuristics for the Travelling Salesman Problem (TSP), getting close to optimal results for problems up to 100 nodes. With the same hyperparameters, we learn strong heuristics for two variants of the Vehicle Routing Problem (VRP), the Orienteering Problem (OP) and (a stochastic variant of) the Prize Collecting TSP (PCTSP), outperforming a wide range of baselines and getting results close to highly optimized and specialized algorithms."
graphLabel: "Attention Routing (Kool)"
graphDescription: "Kool, van Hoof & Welling (2019, ICLR). Thay pointer network bằng attention model, train bằng REINFORCE với baseline greedy-rollout (hiệu quả hơn value function). SOTA cho TSP tới 100 node; cùng hyperparameter giải tốt VRP, Orienteering, Prize-Collecting TSP. Mô hình attention chuẩn của neural-CO."
draft: false
---
