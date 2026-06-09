---
title: Product Pins
description: Pin specific products to fixed positions in a collection, regardless of sort order or automation rules.
sidebar:
  order: 6
---

:::caution[Work in progress]
This page is a placeholder. Full content is coming soon.
:::

## Introduction

Product pins let you hold specific products at defined positions in a collection. Pinned products are not moved by sort order changes or automation runs — they stay exactly where you place them.

![Product pin UI showing pinned products at top of collection with drag handles](SCREENSHOT_PLACEHOLDER)

## How pinning works

When a collection is sorted or re-synced, pinned products are extracted first, placed at their configured positions, and the remaining products fill the rest of the collection in sort order.

Example:

```
Position 1: Pinned Product A   ← always position 1
Position 2: Pinned Product B   ← always position 2
Position 3: Best seller (sorted)
Position 4: Next best seller (sorted)
...
```

## Adding a pin

1. Open the collection in Smart Collections
2. Click **Manage Pins**
3. Search for the product to pin
4. Drag it to the desired position, or enter a position number
5. Save

## Pin positions

- Positions are 1-indexed
- Multiple products can share a position (they will be ordered amongst themselves)
- Gaps in pin positions are filled by sorted products

## Removing a pin

1. Open **Manage Pins**
2. Click the remove icon next to the pinned product
3. Save — the product re-enters the sorted pool on next sync

## Limits

Maximum pins per collection: documented in [Billing & Plans](/smart-collections/billing-and-plans/).
