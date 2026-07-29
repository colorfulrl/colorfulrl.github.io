---
title: "Weak Bisimulation Metric-based Representations for Sparse-Reward Reinforcement Learning"
authors: ["[chờ xác nhận — bài dưới double-blind review tại thời điểm tra cứu 2026-07, tác giả chưa công khai]"]
year: 2024
venue: "OpenReview (ICLR 2025 submission, chưa rõ trạng thái accept)"
arxiv: "https://openreview.net/forum?id=x7Q0uFTH2a"
abstract: "[Note: abstract reconstructed from search-result summaries, NOT fetched verbatim — OpenReview blocked automated access behind a browser check. Verify directly before quoting.] Traditional bisimulation metrics rely on an intractable exact reward-difference term and suffer representation degeneration/collapse under sparse reward, since most reward differences are simply zero. This paper proposes a weak bisimulation metric that relaxes the reward-difference term using a trainable Gaussian distribution, injecting a flexible information margin that keeps the metric from collapsing when rewards are sparse. It further considers continuous (not just pointwise) differences over the transition distribution to sharpen the initial transition-distribution-difference estimate and better isolate task-equivalent state features."
draft: false
graphLabel: "Weak Bisimulation (Sparse Reward)"
graphDescription: "Anonymous submission (ICLR 2025, status unconfirmed). Targets the specific way vanilla bisimulation metrics degenerate under sparse reward: since almost every pair of states has |r1-r2|=0, the metric collapses toward pure dynamics-similarity and loses reward-relevant discrimination. Relaxes the reward term with a trainable Gaussian to keep a non-degenerate margin. Directly relevant to CARL environments with naturally sparse or shaped-away rewards."
graphEdges:
  - target: bisimulation-metric
    label: addresses
  - target: sparse-reward
    label: addresses
---
