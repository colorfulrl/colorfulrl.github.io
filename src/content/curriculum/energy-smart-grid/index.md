---
domain: "Energy & Smart Grid"
description: "Lộ trình RL cho năng lượng: điều khiển liên tục đa mục tiêu (chi phí ↔ tiện nghi ↔ ổn định). Từ survey, qua HVAC/data-center cooling, demand response, vận hành lưới điện, tới sạc EV. Mảng survey-heavy — tầng survey là điểm vào."
descriptionEn: "An RL-for-energy path: multi-objective continuous control (cost ↔ comfort ↔ stability). From surveys, through HVAC/data-center cooling, demand response, grid operation, to EV charging. A survey-heavy field — the survey tier is the entry point."
order: 9
draft: false
stages:
  - id: survey
    label: "Survey & Nền tảng"
    labelEn: "Surveys & Foundations"
    items:
      - ref: ddpg
      - ref: sac
      - ref: demand-response-review
        after: [sac]
  - id: hvac
    label: "Điều khiển HVAC & Cooling"
    labelEn: "HVAC & Cooling Control"
    items:
      - ref: data-center-cooling
        after: [ddpg]
      - ref: citylearn
        after: [data-center-cooling]
  - id: demand-response
    label: "Demand Response"
    labelEn: "Demand Response"
    items:
      - ref: demand-response-rl
        after: [sac]
  - id: grid-operation
    label: "Vận hành Lưới điện"
    labelEn: "Grid Operation"
    items:
      - ref: l2rpn-grid
        after: [ddpg]
  - id: ev-storage
    label: "Sạc EV & Lưu trữ"
    labelEn: "EV Charging & Storage"
    items:
      - ref: ev-charging-rl
        after: [sac]
---

Năng lượng là sân chơi của **điều khiển liên tục đa mục tiêu**: tối ưu chi phí ↔
tiện nghi ↔ ổn định, thường có mô hình vật lý sẵn để mô phỏng an toàn trước khi
deploy. Đây là mảng **survey-heavy** — nên tầng đầu là survey để lấy bản đồ.

Năm nhánh ứng dụng:

- **HVAC & Cooling**: sưởi/làm mát chiếm phần lớn điện năng tòa nhà & data center.
  Mốc nổi bật: **DeepMind điều khiển cooling thương mại** (Luo 2022, tiết kiệm
  ~9-13% trên cơ sở thật) — và benchmark **CityLearn** cho quản lý năng lượng đô thị.
- **Demand Response**: dịch tải theo giá/đỉnh để giảm chi phí và san phụ tải.
- **Vận hành Lưới điện**: điều khiển topology lưới, tích hợp năng lượng tái tạo
  biến động — thách thức **L2RPN** (Learning to Run a Power Network, Grid2Op).
- **Sạc EV & Lưu trữ**: lập lịch sạc xe điện / pin, bidding thị trường điện.

> **Prerequisite**: DDPG, SAC từ [Core-RL graph](/research) (điều khiển liên tục).
> *Mảng này mình verify được ít — phần lớn paper/survey đang STUB, metadata chờ
> Khoa cung cấp (Khoa đã nói mảng này nhiều survey). Chỉ DeepMind cooling là đã
> verified.*
