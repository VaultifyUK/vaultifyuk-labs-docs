---
title: Composed Collections
description: Build collections by combining, intersecting, or excluding products from other collections.
sidebar:
  order: 5
---

:::caution[Work in progress]
This page is a placeholder. Full content is coming soon.
:::

## Introduction

Composed collections let you build a collection from the membership of other collections using set operations. Instead of defining product rules directly, you reference existing collections and define how their products combine.

![Composed collection builder showing source collections and operations](SCREENSHOT_PLACEHOLDER)

## Set operations

| Operation | Result |
|---|---|
| Union (include) | All products from all source collections |
| Intersection | Only products that appear in all source collections |
| Difference (exclude) | Products from one collection with another removed |

## Use cases

### Combine multiple product types into one collection

Include all products from "Trading Cards", "Board Games", and "Collectible Figures" into a single "All Products" collection.

```
Union of:
  → Trading Cards
  → Board Games
  → Collectible Figures
```

### Feature in-stock items from a curated selection

Intersect a curated "Featured Products" collection with an automated "In Stock" collection so only available featured products display.

```
Intersection of:
  → Featured Products
  → In Stock
```

### Exclude a category from a broader collection

Show all Pokémon products except sealed products.

```
All Pokémon
MINUS
Sealed Pokémon
```

## Source collections

Source collections can be:

- Other Smart Collections–managed collections
- Native Shopify collections (automated or manual)

## Ordering and pins in composed collections

Composed collections respect [Product Pins](/smart-collections/product-pins/) and [Sorting & Automation](/smart-collections/sorting-and-automation/) rules in the same way as rule-based collections.
