---
title: "Between MDPs and Semi-MDPs: A Framework for Temporal Abstraction in Reinforcement Learning"
authors: ["Richard S. Sutton", "Doina Precup", "Satinder Singh"]
year: 1999
venue: "Artificial Intelligence 112(1-2)"
abstract: "Learning, planning, and representing knowledge at multiple levels of temporal abstraction are key, longstanding challenges for AI. In this paper we consider how these challenges can be addressed within the mathematical framework of reinforcement learning and Markov decision processes (MDPs). We extend the usual notion of action in this framework to include options — closed-loop policies for taking action over a period of time. Examples of options include picking up an object, going to lunch, and traveling to a distant city, as well as primitive actions such as muscle twitches and joint torques. Overall, we show that options enable subgoal-based planning, as well as learning of hierarchical plans, and that they enable temporal abstraction in a way that does not require the prior discovery of useful subgoals. We also develop a theory of subgoal-based temporal abstraction based on the option-value function, which has several desirable properties not found in previous accounts. We also develop options-based versions of Q-learning, Dyna, and SMDP planning to show that the options framework can be used in a range of problems and algorithms in a straightforward manner."
draft: true
graphEdges:
  - target: hierarchical-rl
    label: formalises
  - target: temporal-abstraction
    label: implements
  - target: model-based-rl
    label: extends
graphLabel: "Options Framework"
graphDescription: "Sutton, Precup & Singh (1999). Formalises options (closed-loop temporally extended actions) within MDPs, providing Bellman equations and planning algorithms for hierarchical RL."
---
