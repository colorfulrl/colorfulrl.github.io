---
domain: "Networking, Wireless & IoT"
description: "Lộ trình RL cho mạng/hệ thống: điều khiển trực tuyến dưới bất định. Từ survey, qua congestion control, adaptive streaming & resource scheduling (Pensieve, DeepRM), tới cấp phát tài nguyên không dây và biên IoT."
descriptionEn: "An RL-for-networking/systems path: online control under uncertainty. From a survey, through congestion control, adaptive streaming & resource scheduling (Pensieve, DeepRM), to wireless resource allocation and IoT edge."
order: 10
draft: false
stages:
  - id: survey
    label: "Survey & Nền tảng"
    labelEn: "Survey & Foundations"
    items:
      - ref: dqn
      - ref: ppo
      - ref: a3c
      - ref: luong-survey
        after: [dqn]
  - id: congestion
    label: "Điều khiển Nghẽn (Transport)"
    labelEn: "Congestion Control (Transport)"
    items:
      - ref: aurora-congestion
        after: [ppo]
  - id: systems
    label: "Streaming & Lập lịch Tài nguyên"
    labelEn: "Streaming & Resource Scheduling"
    items:
      - ref: pensieve
        after: [a3c]
      - ref: deeprm
        after: [a3c]
  - id: wireless
    label: "Cấp phát Tài nguyên Không dây"
    labelEn: "Wireless Resource Allocation"
    items:
      - ref: wireless-resource-allocation
        after: [dqn]
  - id: edge-iot
    label: "Biên & IoT Offloading"
    labelEn: "Edge & IoT Offloading"
    items:
      - ref: edge-offloading
        after: [ppo]
---

Mạng và hệ thống là bài toán **điều khiển trực tuyến dưới bất định**: lưu lượng và
điều kiện mạng thay đổi liên tục, mô hình giải tích khó — RL học policy bắt được
mẫu phức tạp từ dữ liệu. Nhóm MIT (Mao, Alizadeh) khởi xướng phần lớn dòng
"systems + RL".

Năm nhánh:

- **Congestion Control**: điều tiết tốc độ gửi để dùng hết băng thông mà không gây
  nghẽn — **Aurora** (Jay 2019) đóng khung thành RL, nêu thách thức thật: fairness,
  safety, generalization.
- **Adaptive Streaming (ABR)**: **Pensieve** (Mao 2017) dùng A3C chọn bitrate video
  theo throughput/buffer quá khứ, học từ mô phỏng, vượt heuristic thủ công.
- **Lập lịch Tài nguyên**: **DeepRM** (Mao 2016) đóng gói job lên cụm tài nguyên đa
  chiều như bài toán RL (reward = -slowdown). Mốc systems-RL đầu tiên.
- **Cấp phát Không dây**: phổ/công suất/băng thông, dynamic channel access.
- **Biên & IoT**: offloading tính toán từ thiết bị IoT lên edge/cloud, điều phối UAV.

> **Prerequisite**: DQN, PPO, A3C từ [Core-RL graph](/research). *Aurora + Luong
> survey đã verified; Pensieve/DeepRM mô tả từ kiến thức (không trên arXiv); 2 nhánh
> wireless/edge đang stub — metadata chờ Khoa cung cấp survey.*
