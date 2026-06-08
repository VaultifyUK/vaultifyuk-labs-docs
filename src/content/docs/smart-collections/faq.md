---
title: FAQ
description: Frequently asked questions about Smart Collections.
sidebar:
  order: 10
---

:::caution[Work in progress]
This page is a placeholder. Full content is coming soon.
:::

## General

### Does Smart Collections work with all Shopify themes?

Yes. Smart Collections manages collection membership and sort order through the Shopify API. It does not modify your theme files or require any theme customisation.

### Will Smart Collections affect my existing Shopify collections?

Smart Collections only manages collections you explicitly assign to it. Unmanaged collections are not touched.

### Can I use Smart Collections alongside Shopify's built-in automated collections?

Yes. Smart Collections–managed collections co-exist with native Shopify automated collections. You can choose to migrate existing automated collections to Smart Collections at any time.

---

## Rules & Membership

### How often are rule-based collections updated?

Collection membership updates run on the schedule you configure. The minimum supported frequency depends on your plan — see [Billing & Plans](/smart-collections/billing-and-plans/).

### Can I use metafield values as rule conditions?

Yes. Smart Collections supports metafield-based conditions. Metafields must be indexed before they can be used in rules. See [Rule-Based Collections](/smart-collections/rule-based-collections/) for details.

### What happens to a product if it stops matching the rules?

It is removed from the collection on the next sync. The product itself is not affected — only its membership in that specific collection changes.

---

## Sorting & Pins

### Can I pin products and still use automated sorting?

Yes. Pinned products are placed first, and the automated sort applies to the remaining products. See [Product Pins](/smart-collections/product-pins/).

### Does Smart Collections override the sort order I set in Shopify Admin?

Yes, when a collection is managed by Smart Collections, it controls sort order. If you change the sort manually in Shopify Admin, Smart Collections will overwrite it on the next sync.

---

## Billing

### Is there a free trial?

Yes — see [Billing & Plans](/smart-collections/billing-and-plans/) for details.

### What happens to my collections if I cancel?

Your collections remain in Shopify. Smart Collections will stop syncing them, but all existing products and their positions are preserved.

### Can I change plans at any time?

Yes. Plan changes take effect immediately. If you downgrade and your current usage exceeds the new plan's limits, you will need to reduce usage before the next sync runs.
