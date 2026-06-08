---
title: Troubleshooting
description: Solutions to common issues with Smart Collections — sync problems, missing products, and unexpected behaviour.
sidebar:
  order: 9
---

:::caution[Work in progress]
This page is a placeholder. Full content is coming soon.
:::

## Products not appearing in a collection

**Symptom:** Products that should match your rules are not appearing in the collection.

**Steps to diagnose:**

1. Open the collection in Smart Collections
2. Click **Debug rules** to see which products matched and which did not
3. Check that the product has the expected tags, type, or other attributes in Shopify Admin
4. Verify the last sync time — if a sync has not run recently, click **Sync now**

![Debug rules panel showing product match results](SCREENSHOT_PLACEHOLDER)

**Common causes:**

- Product tags contain a typo or extra whitespace
- The product is set to **Draft** status and draft products are excluded by your settings
- A rule condition is too restrictive — try temporarily relaxing one condition to test

---

## Products appearing that should not be in a collection

**Symptom:** Products you did not expect appear in the collection.

**Steps to diagnose:**

1. Open **Debug rules** and locate the unexpected product
2. Review which rule condition it matched
3. Adjust the rule to be more specific

---

## Sync is not running

**Symptom:** The collection has not updated despite new products being added or rule changes being saved.

**Steps:**

1. Check the **Last synced** timestamp on the collection detail screen
2. Click **Sync now** to force an immediate sync
3. If the sync appears to run but nothing changes, check the **Sync log** for errors

---

## Sort order is not being applied

**Symptom:** Products are not appearing in the expected sort order.

**Common causes:**

- The collection sort mode in Shopify Admin has been changed — Smart Collections will re-apply on next sync
- Product pins may be affecting positions — see [Product Pins](/smart-collections/product-pins/)

---

## Contacting support

If these steps do not resolve your issue, contact VaultifyUK Labs support through the app:

1. Open Smart Collections
2. Click **Help** in the navigation
3. Select **Contact support**

Include your store URL, the affected collection name, and a description of the issue.
