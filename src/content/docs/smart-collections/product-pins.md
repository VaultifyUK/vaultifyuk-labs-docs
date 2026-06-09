---
title: Product Pins
description: Pin specific products to fixed positions at the top or bottom of a collection, regardless of sort order or sync activity.
sidebar:
  order: 6
---

Product pins let you hold specific products at fixed positions in a collection. A pinned product is never moved by a sort or sync — it stays exactly where you placed it.

Smart Collections supports two types of pins:

- **Top pins** — products held at the beginning of the collection, in the order you define
- **Bottom pins** — products held at the end of the collection, in the order you define

![Pin management panel showing two top-pinned products and one bottom-pinned product with drag handles](SCREENSHOT_PLACEHOLDER)

## How pinning works

When Smart Collections sorts a collection, it processes pins first:

1. Top-pinned products are placed at positions 1, 2, 3, … in the order you have configured
2. The remaining (un-pinned) products are sorted according to the sort configuration
3. Bottom-pinned products are placed at the last positions in the order you have configured

Pins are absolute — no sort key, demotion rule, or sync can override them. If out-of-stock demotion is enabled, it applies only to un-pinned products.

### Example

```plain
Position 1: [TOP PIN] Featured Product A
Position 2: [TOP PIN] New Launch Product B
Position 3: Best seller (sorted)
Position 4: Next product (sorted)
...
Position N-1: [BOTTOM PIN] Discontinued Product C
Position N:   [BOTTOM PIN] Clearance Item D
```

## Pinning a product to the top

1. Open the collection in Smart Collections
2. Open the sort settings panel
3. Under **Top pins**, click **Add product**
4. Search for the product by name and select it
5. Drag it to set its position relative to other top pins (if you have more than one)
6. Click **Save sort**

The pin takes effect on the next sync. You can trigger an immediate sync by clicking **Sync now**.

## Pinning a product to the bottom

The process is identical to top pinning, using the **Bottom pins** section in the sort settings panel.

## Changing pin order

If you have multiple top pins or multiple bottom pins, you can drag them within their respective lists to change the order. The position numbers update to reflect the new arrangement.

## Removing a pin

1. Open the sort settings panel
2. Find the pin in the **Top pins** or **Bottom pins** list
3. Click the remove icon next to it
4. Click **Save sort**

After removal, the product re-enters the sorted pool on the next sync. It will be placed according to the collection's sort configuration — it is no longer held at a fixed position.

## Pins and rule evaluation

Pins do not affect whether a product is a member of a collection — that is determined by the collection's rules. However:

- A top or bottom pin has no effect if the product is not a member of the collection. The product must match the collection's rules to appear in it; the pin only controls its position once it is a member.
- If a product is removed from a collection because it no longer matches the rules, its pin is preserved in the configuration. If the product later re-enters the collection (because its attributes change), the pin will be re-applied.

:::tip
You can use pins alongside any sort configuration. For example: pin your newest product at position 1 and use "Best selling" sort for everything else. The best sellers fill positions 2 onwards, and your pinned product stays at the top regardless of its sales volume.
:::

## Pins and out-of-stock demotion

Out-of-stock demotion pushes un-pinned out-of-stock products to the bottom of the sorted pool. Pinned products are exempt from demotion — a top-pinned product remains at its pinned position even when out of stock.

If you want an out-of-stock product to be demoted despite being pinned, remove its pin first.

## Related topics

- [Sorting & Automation](/smart-collections/sorting-and-automation/)
- [Rule-Based Collections](/smart-collections/rule-based-collections/)
- [FAQ](/smart-collections/faq/)
