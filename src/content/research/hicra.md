---
title: "Emergent Hierarchical Reasoning in LLMs through Reinforcement Learning"
authors: ["Haozhe Wang", "Qixin Xu", "Che Liu", "Junhong Wu", "Fangzhen Lin", "Wenhu Chen"]
year: 2025
venue: "arXiv 2025"
arxiv: "https://arxiv.org/abs/2509.03646"
abstract: "RL-trained LLM reasoning shows phenomena such as 'aha moments', length scaling and entropy shifts. This paper argues they reflect an emergent hierarchy resembling the split between high-level strategic planning and low-level procedural execution: learning first consolidates procedural correctness, then gains shift to exploring and mastering planning. Because GRPO spreads optimization pressure uniformly over all tokens, the signal for planning tokens is diluted. Hierarchy-Aware Credit Assignment (HICRA) concentrates optimization on high-impact planning tokens and significantly outperforms strong baselines."
draft: false
graphLabel: "HICRA"
graphDescription: "Wang et al. (2025). Identifies planning tokens via Strategic Grams (clustered, frequent 3–5-grams) and tracks strategy diversity with semantic entropy instead of token entropy. HICRA adds an α-scaled bonus to the GRPO advantage of planning tokens (amplify on success, soften penalty on failure). Helps on Qwen3-4B/Qwen2.5-7B math benchmarks; no gain on Llama-3.1-Instruct, which lacks a solid execution base."
graphEdges:
  - target: planning-execution-tokens
    label: introduces
  - target: hierarchical-llm-agent
    label: instance of
  - target: grpo
    label: modifies credit in
  - target: credit-assignment
    label: reweights
  - target: rl-for-llm
    label: instance of
  - target: math-reasoning
    label: evaluated on
---
