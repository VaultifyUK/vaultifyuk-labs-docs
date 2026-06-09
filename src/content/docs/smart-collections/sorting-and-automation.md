---
title: Sorting & Automation
description: Control how products are ordered within collections and configure automatic sync schedules.
sidebar:
  order: 7
---

:::caution[Work in progress]
This page is a placeholder. Full content is coming soon.
:::

## Introduction

Smart Collections manages two distinct concerns for each collection:

1. **Membership** — which products are in the collection (defined by rules or composition)
2. **Sort order** — how those products are ordered (defined by sort configuration)

Both can be automated independently.

## Sort options

| Sort mode | Description |
|---|---|
| Manual | You control product order via the Smart Collections dashboard |
| Best selling | Products ordered by historical sales volume |
| Price ascending | Lowest price first |
| Price descending | Highest price first |
| Title A–Z | Alphabetical by product title |
| Title Z–A | Reverse alphabetical |
| Newest first | Products ordered by creation date, most recent first |
| Custom score | Weighted score combining multiple signals (see below) |

![Sort configuration panel for a collection](SCREENSHOT_PLACEHOLDER)

## Custom score sorting

Custom score sorting lets you weight multiple signals to produce a ranked order. Available signals include:

- Sales velocity (last 7, 14, 30, 90 days)
- Inventory level
- Margin (requires cost data)
- Review score (requires integration)
- Product age

Each signal is assigned a weight. The final score is the weighted sum, and products are sorted highest score first.

## Automation schedules

Collections can be set to re-sync automatically on a schedule:

| Schedule | Use case |
|---|---|
| Hourly | Inventory-sensitive collections |
| Daily | Standard merchandising |
| Weekly | Stable catalogues |
| Manual only | Full control, no automatic changes |

## Event-triggered syncs

In addition to scheduled syncs, collections can be configured to re-evaluate when:

- A product's inventory changes
- A product is created or updated in Shopify
- A product tag is added or removed

![Automation triggers configuration panel](SCREENSHOT_PLACEHOLDER)

## Interaction with pins

Pins always take precedence over sort order. See [Product Pins](/smart-collections/product-pins/).
