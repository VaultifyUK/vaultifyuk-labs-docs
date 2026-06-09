---
title: FAQ
description: Frequently asked questions about Smart Collections — how it works, what it affects, and what to expect.
sidebar:
  order: 10
---

## General

### Does Smart Collections work with all Shopify themes?

Yes. Smart Collections manages collection membership and sort order through the Shopify API. It does not modify your theme files or require any theme customisation. Your storefront displays whatever products Shopify has in each collection — Smart Collections controls what those are.

### Will Smart Collections affect my collections that I have not connected to it?

No. Smart Collections only manages collections you explicitly connect to it, either by creating a new collection through the app or by taking over an existing one. All other Shopify collections — automated or manual — are untouched.

### Can I use Smart Collections alongside Shopify's built-in automated collections?

Yes. Smart Collections–managed collections and native Shopify automated collections can coexist in the same store without conflict. You can migrate an existing Shopify automated collection to Smart Collections at any time by taking it over.

### What permissions does Smart Collections use?

Smart Collections requests the **Products** permission, which covers reading your product catalogue and managing collection membership and sort order (add products, remove products, reorder, update sort order). No theme access, no customer data, and no order data permissions are required at this stage.

### Who can manage collections?

Any Shopify admin user on your store can:

- Create new collections through Smart Collections
- Take over existing collections
- Edit rules and sort settings
- Trigger manual syncs
- Edit collection title, description, and other content fields

Only the **store owner** can:

- Release (stop managing) a collection
- Delete a collection through Smart Collections

---

## Rules & Membership

### How quickly does a collection update after a product change?

Typically within a few seconds. When a product is created, updated, or deleted in your Shopify store, Smart Collections receives a webhook and re-evaluates all affected collections automatically. For stores with large catalogues (thousands of products), evaluation may take a little longer.

### What happens to a product if it stops matching the collection rules?

It is removed from the collection on the next sync. The product itself is not affected in any way — only its membership in that specific collection changes. It will be re-added automatically if it later changes to match the rules again.

### Can I force a product to always be included, even if it does not match the rules?

Per-product overrides (always include / always exclude) are a planned feature. In the current version, all products are included or excluded based on the rule evaluation. Pinning a product to the top or bottom does not override rule evaluation — it only controls position for products that are already members.

### Why does my live product count differ from what ends up in the collection?

The live count in the rule builder reflects the products in your catalogue at that moment. If the count changes between when you view it and when the sync runs, it may be because a product's attributes changed (a tag was added or removed, a price changed, etc.) in the intervening time. This is expected behaviour — Smart Collections always uses the current state of each product at sync time.

### Does Smart Collections evaluate draft products?

Draft products are included in evaluation and can appear in a collection if your rules do not exclude them. To exclude draft products, add a condition `Status = Active` to your rules.

### What is the difference between a rule-based collection and a composed collection?

A **rule-based collection** evaluates your full product catalogue against conditions you define (tags, type, price, etc.) to decide membership.

A **composed collection** takes its membership from other Smart Collections–managed collections — specifically, the union of all their products. You can optionally add local rule conditions to filter that union down further. Composed collections do not query the full catalogue directly; they inherit from their source collections.

See [Rule-Based Collections](/smart-collections/rule-based-collections/) and [Composed Collections](/smart-collections/composed-collections/) for details.

---

## Sorting & Pins

### Can I pin products and still use automated sorting?

Yes. Top-pinned products are placed first, bottom-pinned products are placed last, and the automated sort applies to everything in between. Pins and sort configuration work together. See [Product Pins](/smart-collections/product-pins/).

### Does Smart Collections override the sort order I set in Shopify admin?

Yes. When a collection is managed by Smart Collections, it sets Shopify's sort mode to Manual and controls all product positions. If you change the sort mode or reorder products in Shopify admin, Smart Collections will restore its configuration on the next sync.

To control positions in a managed collection, use the pin settings in Smart Collections instead of reordering in Shopify admin.

### What does out-of-stock demotion do exactly?

When enabled, any product with zero total inventory (across all variants) is moved to the end of the collection, after all in-stock products are sorted. Within the out-of-stock group, products remain in their relative sort order. Pinned products are exempt — they stay in their pinned positions regardless of stock level.

### Will pinned products be removed if they stop matching the rules?

Yes. A pin controls position, not membership. If a pinned product no longer satisfies the collection's rules, Smart Collections removes it from the collection (and it disappears from its pin position). If the product later re-matches the rules, it re-enters the collection and its pin is restored.

---

## Billing & Plans

### Is there a free tier?

Yes. The Free plan allows up to 2 managed collections with no time limit and no payment required.

### Is there a free trial for paid plans?

Yes. All paid plans include a 14-day free trial. You are not charged until the trial ends.

### What happens to my collections if I cancel?

Your Shopify collections are not deleted. Smart Collections stops managing them, and the products and sort order that were in place at the time of cancellation remain. You regain full manual control of each collection in Shopify admin.

### What happens when I reach my plan's collection limit?

Smart Collections continues to sync all collections currently under management. You will see a prompt to upgrade when you try to add an additional collection. Existing collections are never paused or disrupted.

### Can I downgrade my plan?

Yes. If you downgrade to a plan with a lower collection limit, your existing managed collections continue to sync. You will not be able to add new collections until your active count is within the new plan's limit.

---

## Related topics

- [Getting Started](/smart-collections/getting-started/)
- [Rule-Based Collections](/smart-collections/rule-based-collections/)
- [Composed Collections](/smart-collections/composed-collections/)
- [Billing & Plans](/smart-collections/billing-and-plans/)
- [Troubleshooting](/smart-collections/troubleshooting/)
