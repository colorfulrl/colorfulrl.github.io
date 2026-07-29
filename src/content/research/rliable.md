---
title: "Deep Reinforcement Learning at the Edge of the Statistical Precipice"
authors: ["Rishabh Agarwal", "Max Schwarzer", "Pablo Samuel Castro", "Aaron Courville", "Marc G. Bellemare"]
year: 2021
venue: "NeurIPS 2021 (Outstanding Paper)"
arxiv: "https://arxiv.org/abs/2108.13264"
abstract: "Deep reinforcement learning (RL) algorithms are predominantly evaluated by comparing their relative performance on a large suite of tasks. Most published results on deep RL benchmarks compare point estimates of aggregate performance such as mean and median scores across tasks, ignoring the statistical uncertainty implied by the use of a finite number of training runs. Beginning with the Arcade Learning Environment (ALE), the shift towards computationally-demanding benchmarks has led to the practice of evaluating only a small number of runs per task, exacerbating the statistical uncertainty in point estimates. In this paper, we argue that reliable evaluation in the few-run deep RL regime cannot ignore the uncertainty in results without running the risk of slowing down progress in the field. We illustrate this point using a case study on the Atari 100k benchmark, where we find substantial discrepancies between conclusions drawn from point estimates alone versus a more thorough statistical analysis. With the aim of increasing the field's confidence in reported results with a handful of runs, we advocate for reporting interval estimates of aggregate performance and propose performance profiles to account for the variability in results, as well as present more robust and efficient aggregate metrics, such as interquartile mean scores, to achieve small uncertainty in results. Using such tools, we scrutinize performance evaluations of existing algorithms on other widely used RL benchmarks including Atari 100k, Procgen, and the DeepMind Control Suite, again revealing discrepancies in prior comparisons. Our findings call for a change in how we evaluate performance in deep RL, for which we present a more rigorous evaluation methodology, released as an easy-to-use library at rliable.io, along with a full suite of experimental data used in our analysis."
draft: false
graphLabel: "Rliable"
graphDescription: "Agarwal et al. (2021), NeurIPS Outstanding Paper. Shows that comparing mean/median scores across a handful of training runs per task routinely produces false conclusions about which algorithm is better, because the statistical uncertainty from few runs is never reported. Proposes interval estimates, performance profiles (fraction of runs above a score threshold), and the interquartile mean as a low-variance, outlier-robust aggregate — packaged as the `rliable` library. Re-audits published Atari 100k / Procgen / DM Control results and finds several reversed rankings. Now a de-facto reporting standard for RL papers."
graphEdges:
  - target: atari
    label: evaluated on
  - target: dm-control
    label: evaluated on
---
