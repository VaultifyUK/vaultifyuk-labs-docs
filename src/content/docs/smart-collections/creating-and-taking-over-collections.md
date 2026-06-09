---
title: Creating & Taking Over Collections
description: How to create new Shopify collections through Smart Collections, and how to take over management of existing ones.
sidebar:
  order: 3
---

Smart Collections can manage a collection in two ways: by creating a new one from scratch, or by taking over an existing collection you already have in Shopify. Both result in the same outcome — a collection whose membership and sort order are controlled automatically by the app.

## Creating a new collection

When you create a collection through Smart Collections, it creates a matching Shopify collection and immediately takes ownership of its membership and sorting.

### Steps

1. Click **New Collection** in the dashboard
2. Select **Create new collection**
3. Enter a title — this becomes the Shopify collection title
4. Optionally add a description, SEO title, SEO description, and handle
5. Configure your rules (see [Rule-Based Collections](/smart-collections/rule-based-collections/))
6. Click **Save and sync**

The collection appears in your Shopify store immediately. Smart Collections runs an initial sync to populate it based on your rules.

:::note
After creation, Shopify owns the collection's title, description, image, SEO fields, and handle. You can edit any of these from your Shopify admin or from the collection's detail page in Smart Collections. Smart Collections only controls membership (which products are in it) and sort order.
:::

## Taking over an existing collection

You can hand off an existing Shopify collection to Smart Collections without disrupting it. The collection stays live in your store throughout the process.

### Steps

1. Click **New Collection** in the dashboard
2. Select **Take over existing collection**
3. Search for the collection by name and select it
4. Configure rules for the collection
5. Click **Save and sync**

Smart Collections immediately sets the collection to manual sort order (required for automated management) and runs an initial evaluation.

:::caution
When a sync runs after takeover, Smart Collections will add or remove products based on your rules. Products that do not match your rules will be removed from the collection on the next sync. Review your rules carefully before saving.
:::

### What changes when you take over a collection

| Area | Before takeover | After takeover |
| --- | --- | --- |
| Membership | Managed manually or by Shopify automation | Managed by Smart Collections rules |
| Sort order | Shopify-controlled | Smart Collections-controlled (set to Manual in Shopify) |
| Title, description, image, SEO | Shopify-owned | Shopify-owned (unchanged) |
| Automatic updates | None, or limited to Shopify's built-in automation | Real-time sync on product changes |

## The collection detail page

Once a collection is managed, its detail page in Smart Collections shows:

- Current sync status and last sync time
- Rule configuration
- Sort configuration and pin settings
- Sync history (last 10 syncs, with products added, removed, and reordered)

A **Sync now** button lets you trigger an immediate re-evaluation and re-sort at any time.

![Collection detail page showing sync status, rule summary, and recent sync history](SCREENSHOT_PLACEHOLDER)

## Stopping management (Release)

Releasing a collection stops Smart Collections from managing it, without deleting it from Shopify. The collection remains in your store with its current products and positions intact.

:::note
Releasing a collection restores the sort order that was in place when you took over. The sort order in Shopify will change to that original value. Products themselves are not moved or deleted — only the sort mode is restored.
:::

To release a collection:

1. Open the collection in Smart Collections
2. Scroll to the **Danger Zone** section
3. Click **Stop managing collection**
4. Confirm in the dialog

After release, the collection returns to full merchant control in Shopify. You can take it over again at any time.

:::caution
Only the store owner can release a collection. Staff members with Shopify admin access can manage rules, sort settings, and syncs, but cannot release or delete collections.
:::

## Deleting a collection

You can permanently delete a Shopify collection directly from Smart Collections. This removes the collection from your store entirely.

To delete a collection:

1. Open the collection in Smart Collections
2. Scroll to the **Danger Zone** section
3. Click **Delete collection**
4. Confirm in the dialog — this action cannot be undone

:::caution
Deleting a collection permanently removes it from Shopify. This cannot be undone. Sync history records are preserved in Smart Collections for reference, but the Shopify collection and all its associations (navigation links, storefront references) will be gone.

Only the store owner can delete a collection.
:::

If you only want to stop automating a collection without removing it from your store, use **Stop managing collection** instead.

## What happens if a collection is deleted in Shopify admin?

If a managed collection is deleted from your Shopify admin rather than from within Smart Collections, Smart Collections detects this automatically. The collection is removed from your Smart Collections dashboard. Any sync history is preserved for reference.

If the collection appears stuck with an error status after being deleted, you can clear the record by releasing it from the Smart Collections danger zone — Smart Collections will detect that the collection no longer exists and clean up without error.

## Related topics

- [Rule-Based Collections](/smart-collections/rule-based-collections/)
- [Composed Collections](/smart-collections/composed-collections/)
- [Sorting & Automation](/smart-collections/sorting-and-automation/)
- [Troubleshooting](/smart-collections/troubleshooting/)
