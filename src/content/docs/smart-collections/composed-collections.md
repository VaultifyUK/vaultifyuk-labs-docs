---
title: Composed Collections
description: Build a collection by aggregating products from multiple other Smart Collections–managed collections, with optional filtering on top.
sidebar:
  order: 5
---

A composed collection draws its products from one or more other managed collections rather than from a rule that runs directly against your full catalogue. This is useful when you want to combine the memberships of several targeted collections into a single place, or when a source collection's own rules are complex and you want to reuse them rather than duplicate them.

![Composed collection detail page showing two source collections and a local filter rule with the live product count](SCREENSHOT_PLACEHOLDER)

## How it works

When a composed collection is evaluated, Smart Collections:

1. Collects all products that are currently members of each active source collection
2. Combines them into a single pool (duplicates are automatically removed)
3. If you have added local rule conditions to the composed collection, filters the pool down to only the products that match those conditions
4. Sorts the result according to the collection's sort configuration

The composed collection then reflects exactly this set of products in Shopify.

### Automatic updates

Whenever a source collection changes — because a product matched or stopped matching its rules — Smart Collections automatically re-evaluates all composed collections that use it as a source. You do not need to trigger this manually.

:::tip
Composed collections work well for building "aggregator" or "best of" collections. For example, if you have a collection for each brand and you want a single "All Products" collection, you can compose it from all the individual brand collections. Any future changes to the brand collections propagate automatically.
:::

## Adding a source collection

Only managed collections (collections already owned by Smart Collections) can be added as sources.

1. Open the composed collection in Smart Collections
2. In the **Sources** section, click **Add source**
3. Select a managed collection from the list
4. Click **Save** — a sync runs immediately to incorporate the new source

The first time you add a source to a rule-based collection, it converts to a composed collection. This cannot be reversed automatically — see [Converting back to rule-based](#converting-back-to-rule-based).

### Which collections can be added as sources

The candidates list shows active managed collections that are not already linked as sources. A collection cannot be a source for itself.

:::note
Collections that are part of a collection hierarchy (parent-child relationships) cannot be added as composition sources, and vice versa. Hierarchy and composition are separate features and cannot be mixed on the same collection.
:::

## Removing a source collection

1. Open the composed collection in Smart Collections
2. In the **Sources** section, find the source to remove and click **Remove**
3. Confirm — a sync runs to update the collection without that source's products

You cannot remove the last remaining source from a composed collection. To remove all sources, use **Convert to rule-based** instead.

## Adding local rule conditions

You can optionally add rule conditions directly to a composed collection. These act as a filter on top of the aggregated source products — only products that are in at least one source collection **and** satisfy the local conditions will be included.

This is useful when you want to narrow down a broad union. For example, you might compose from three brand collections and then add an "In stock" condition so only available products appear.

Local rule conditions follow the same format as those in a standard rule-based collection. See [Rule-Based Collections](/smart-collections/rule-based-collections/) for the full list of available conditions.

:::tip
If a composed collection has no local conditions, it simply reflects the full union of its sources. Adding local conditions does not change this — products must first be in a source collection, then they are filtered by local rules. Local rules cannot add products that are not already in a source.
:::

## Disabled sources

If a source collection is disabled (paused), it stops contributing products to any composed collections that use it. The link between the collections is preserved, so re-enabling the source restores its contribution on the next sync.

A source that is released or deleted is automatically unlinked from all composed collections it fed.

## Composition health

If a composed collection is behaving unexpectedly, the collection detail page shows any issues detected. Common issues include:

| Issue | Meaning |
| --- | --- |
| No active sources | All sources are currently disabled, so the collection would be empty |
| Source sync failed | A source collection encountered an error on its last sync |
| Source never synced | A source was added but has not completed its first sync yet |

These notices appear with their severity (issue, warning, or note) on the collection detail page.

![Composed collection detail page showing a source health warning](SCREENSHOT_PLACEHOLDER)

## Converting back to rule-based

A composed collection can be converted back to a rule-based collection. This removes all composition links and the collection will be evaluated using only its local rule conditions (if any are configured).

1. Open the composed collection
2. Click **Convert to rule-based** in the Sources section
3. Confirm in the dialog

After conversion, the collection behaves as a standard rule-based collection. If no local rule conditions are configured, the collection will be empty after the next sync.

:::caution
Converting to rule-based removes all source links. This cannot be automatically undone. If you want to re-add sources, you can do so from the Sources section after conversion.
:::

## Pins and sort order

Composed collections respect [Product Pins](/smart-collections/product-pins/) and [Sorting & Automation](/smart-collections/sorting-and-automation/) in the same way as rule-based collections. Pins survive re-sorts and sync cycles regardless of which source a product came from.

## Related topics

- [Rule-Based Collections](/smart-collections/rule-based-collections/)
- [Product Pins](/smart-collections/product-pins/)
- [Sorting & Automation](/smart-collections/sorting-and-automation/)
- [Troubleshooting](/smart-collections/troubleshooting/)
