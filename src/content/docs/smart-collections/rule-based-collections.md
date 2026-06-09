---
title: Rule-Based Collections
description: Define collection membership using product conditions — tags, types, vendors, metafields, and more.
sidebar:
  order: 4
---

:::caution[Work in progress]
This page is a placeholder. Full content is coming soon.
:::

## Introduction

Rule-based collections populate automatically based on conditions you define. When Smart Collections syncs, it evaluates every product in your catalogue against your rules and updates collection membership accordingly.

![Rule builder interface showing condition groups](SCREENSHOT_PLACEHOLDER)

## Condition types

| Condition | Description |
|---|---|
| Tag | Product has (or does not have) a specific tag |
| Product type | Product type matches a value |
| Vendor | Product vendor matches a value |
| Title | Product title contains, starts with, or equals a value |
| Price | Product price is greater than, less than, or equal to a value |
| Inventory | Product is in stock / out of stock |
| Metafield | A product metafield matches a value |

## Condition logic

Conditions can be combined with:

- **All conditions must match** (AND logic)
- **Any condition must match** (OR logic)

You can also build condition groups to create more complex AND/OR combinations.

## Match modes

| Mode | Behaviour |
|---|---|
| Exactly | Strict equality match |
| Contains | Partial string match |
| Starts with | Prefix match |
| Ends with | Suffix match |
| Regex | Regular expression match |

## Examples

### All sale products

```
Tag contains "sale"
```

### Premium products from a specific vendor

```
Vendor equals "Funko"
AND
Price is greater than 50
```

### In-stock products of a specific type

```
Product type equals "Trading Card"
AND
Inventory is in stock
```

## Limits

- Maximum conditions per collection: documented in [Billing & Plans](/smart-collections/billing-and-plans/)
- Metafield conditions require metafields to be indexed — see Indexing settings
