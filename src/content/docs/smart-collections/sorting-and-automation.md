---
title: Sorting & Automation
description: Control how products are ordered within collections, configure out-of-stock demotion, and understand how Smart Collections keeps collections in sync automatically.
sidebar:
  order: 7
---

Smart Collections manages two things for every collection: which products belong (determined by rules), and in what order they appear (determined by sort configuration). This page covers sort order and the automatic sync that keeps collections up to date.

## Sort keys

Each collection is sorted by a single field, in a direction you choose.

| Sort key | Direction options |
| --- | --- |
| Created date | Newest first, Oldest first |
| Price | Low to High, High to Low |
| Title | A to Z, Z to A |
| Vendor | A to Z, Z to A |
| Product type | A to Z, Z to A |
| Inventory quantity | High to Low, Low to High |

![Sort configuration panel showing the sort key dropdown and direction toggle](SCREENSHOT_PLACEHOLDER)

Price sorting uses the lowest variant price for each product. Inventory sorting uses the total inventory across all variants and locations.

### Saving a sort change

Changes to sort configuration are saved separately from rule changes. Click **Save sort** to apply. Smart Collections enqueues a sort job immediately — the collection updates in Shopify within seconds.

## Out-of-stock demotion

Out-of-stock demotion is a toggle in the sort settings. When enabled, any product with zero inventory is moved to the end of the collection, after all in-stock products. Within the demoted group, products remain in their normal sort order relative to each other.

Out-of-stock demotion is enabled by default for all new collections.

:::tip
Out-of-stock demotion works alongside any sort key. For example, if your sort is "Price: Low to High", in-stock products will appear in price order, followed by out-of-stock products also in price order.
:::

Pinned products are exempt from out-of-stock demotion. A product pinned to the top stays at the top regardless of its stock level. See [Product Pins](/smart-collections/product-pins/) for details.

## The sort stack

When Smart Collections sorts a collection, it applies rules in this order — higher layers take absolute precedence:

1. **Top pins** — placed first, at fixed positions, in the order you configured
2. **Sort key** — applied to all un-pinned products
3. **Out-of-stock demotion** — out-of-stock products moved to the end of the sorted pool
4. **Bottom pins** — placed last, at fixed positions, in the order you configured

## Automatic sync

Smart Collections keeps collections in sync automatically. You do not need to trigger re-syncs manually for day-to-day product changes.

### What triggers a sync

| Event | What happens |
| --- | --- |
| Product created | All managed collections for your store are re-evaluated |
| Product updated (title, tags, price, status, inventory, vendor, type) | All managed collections for your store are re-evaluated |
| Product deleted | The product is removed from all collections; affected collections are re-sorted |
| You save rules | The affected collection is re-evaluated and re-sorted |
| You save sort settings | The affected collection is re-sorted |
| You change a collection's content in Shopify admin (title, sort mode, etc.) | The affected collection is re-evaluated to restore app ownership |

Syncs triggered by product changes typically complete within a few seconds. For stores with very large catalogues (thousands of products), evaluation may take longer.

### Manual sync

You can trigger an immediate sync at any time from the collection detail page by clicking **Sync now**. This runs a full evaluation and sort regardless of whether anything has changed.

### Sort order in Shopify admin

When Smart Collections manages a collection, it sets Shopify's sort mode to **Manual** for that collection. This is required for the app to control product positions. If you change the sort mode back in Shopify admin, Smart Collections will restore it to Manual on the next sync.

:::note
Any manual reordering you do in Shopify admin for a managed collection will be overwritten the next time Smart Collections runs a sort. To control product positions in a managed collection, use [Product Pins](/smart-collections/product-pins/) in Smart Collections instead.
:::

## Sync history

The collection detail page shows the last 10 syncs for that collection. Each entry shows:

- What triggered the sync (product update, manual trigger, rule change, etc.)
- When it ran and how long it took
- How many products were added, removed, or reordered
- Whether the sync succeeded or failed

For a shop-wide view of all sync activity, use the **Sync** section in the main navigation. See [Troubleshooting](/smart-collections/troubleshooting/) for how to use sync history to diagnose issues.

## Related topics

- [Product Pins](/smart-collections/product-pins/)
- [Rule-Based Collections](/smart-collections/rule-based-collections/)
- [Troubleshooting](/smart-collections/troubleshooting/)
- [FAQ](/smart-collections/faq/)
