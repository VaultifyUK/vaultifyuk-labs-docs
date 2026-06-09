---
title: Troubleshooting
description: Diagnose and resolve common issues with Smart Collections — products missing, unexpected membership, sync errors, and sort order problems.
sidebar:
  order: 9
---

This page covers the most common issues merchants encounter and how to resolve them.

## Products missing from a collection

**Symptom:** Products you expect to see in a collection are not appearing, or the collection has fewer products than expected.

**Steps:**

1. Open the collection in Smart Collections and check the **Last synced** time. If a sync has not run recently, click **Sync now**.
2. Check the live product count in the rule builder. If the count is lower than expected, your rules may be filtering out products you want to include.
3. Review each rule condition carefully:
   - Tags must match exactly, including capitalisation and spaces
   - Status conditions: if you have `Status = Active`, draft and archived products are excluded
   - Inventory conditions: "In stock" requires inventory greater than zero across all variants
   - Date conditions: "Within last N days" is relative to the current date

**Common causes:**

- A product has a tag typo or slight difference from what the rule expects (e.g. `sale-item` vs `sale_item`)
- The product is in Draft status and the rule requires Active status
- A product just changed in Shopify — wait a few seconds and click **Sync now** if the change is not yet reflected
- The rule uses OR logic but you need AND, or vice versa — check the logic toggle at the top of the rule builder

---

## Products appearing that should not be in the collection

**Symptom:** Products you did not intend to include are appearing in the collection.

**Steps:**

1. Open the rule builder and review your conditions carefully.
2. Switch the logic mode temporarily if needed: if "All conditions must match" seems too broad, try "Any condition must match" to see the difference.
3. Check for overly broad conditions — for example, a tag condition of "includes any of" with a common tag may match far more products than expected.

**Common cause:** OR logic is set when AND logic was intended, causing products that match any single condition to be included.

---

## A sync is not running

**Symptom:** The collection has not updated despite recent product changes or a rule save.

**Steps:**

1. Check the **Sync history** on the collection detail page. If no recent sync is shown, the webhook for the product change may not have arrived yet — wait 30 seconds and click **Sync now**.
2. If the collection shows **Error** status, check the error message in the sync history. Common errors are shown below.
3. If the error message says "Collection no longer exists in Shopify", the Shopify collection was deleted. See [Collection shows an error after being deleted in Shopify](#collection-shows-an-error-after-being-deleted-in-shopify).

---

## Collection shows an error after being deleted in Shopify

**Symptom:** A collection shows Error status because it was deleted in Shopify admin rather than through Smart Collections.

**Resolution:**

1. Open the collection in Smart Collections
2. Scroll to the **Danger Zone** section
3. Click **Stop managing collection** (or Release)
4. Smart Collections detects that the Shopify collection is gone and clears the record cleanly — no error occurs

The sync history is preserved for reference.

---

## Sort order is not being applied

**Symptom:** Products are not appearing in the expected order, or the order keeps reverting.

**Common causes and resolutions:**

**Cause: The sort mode was changed in Shopify admin.**
Smart Collections sets the sort mode to Manual for all managed collections. If you change the sort mode in Shopify admin, Smart Collections restores it to Manual on the next sync. The sort order Smart Collections configured then re-applies.

**Cause: Product pins are affecting positions.**
Top-pinned products always appear first, regardless of sort key. Bottom-pinned products always appear last. If specific products seem stuck at unexpected positions, check the pin settings. See [Product Pins](/smart-collections/product-pins/).

**Cause: Out-of-stock demotion is moving products.**
If out-of-stock demotion is enabled, zero-inventory products are moved to the end of the collection after all in-stock products are sorted. Check the demotion toggle in the sort settings if this is unexpected.

**Cause: A sync has not run since the sort was changed.**
Click **Sync now** to immediately re-apply the current sort configuration.

---

## A composed collection is empty or has unexpected membership

**Symptom:** A composed collection shows no products, or has products you did not expect.

**Steps:**

1. Open the collection in Smart Collections and check the **Sources** section. At least one source must be in Active status.
2. Check the composition health notices on the collection detail page. These show specific issues such as disabled sources or sources that have never synced.
3. If all sources are active but the collection is still empty, check whether the source collections themselves have products. If a source collection's rules match nothing, it contributes nothing to the composed collection.
4. If you have local rule conditions on the composed collection, check that they are not filtering out all products. The local rules filter the union of source products — if no source products match the local conditions, the composed collection will be empty.

See [Composed Collections](/smart-collections/composed-collections/) for how composed evaluation works.

---

## Sync history shows frequent failures

**Symptom:** Many entries in the sync history show Failed status.

**Steps:**

1. Open the failed sync entry (click the row in the sync history to expand it) and read the error message.
2. For errors mentioning "Collection not found" — the Shopify collection no longer exists. Release the collection from Smart Collections (see above).
3. For other errors — click **Sync now** to try again. If failures continue, contact support (see below).

The **Sync** section in the main navigation shows all sync activity across all your managed collections, which is useful for spotting patterns (e.g. one collection that repeatedly fails).

---

## The live product count does not match the actual collection

**Symptom:** The live count shown while editing rules differs from the number of products in the collection after syncing.

This can happen briefly if:
- A sync is in progress when you are viewing the rule builder
- Products changed in Shopify between when the count was shown and when the sync ran

Click **Sync now** and wait for it to complete, then check the count again. The sync history will show the exact number of products added, removed, and reordered.

---

## Contacting support

If the steps above do not resolve your issue:

1. Open Smart Collections
2. Click **Help** in the navigation
3. Select **Contact support**

When contacting support, include:
- Your store URL
- The name of the affected collection
- The error message from the sync history (if any)
- A description of the expected vs actual behaviour

## Related topics

- [Creating & Taking Over Collections](/smart-collections/creating-and-taking-over-collections/)
- [Rule-Based Collections](/smart-collections/rule-based-collections/)
- [Composed Collections](/smart-collections/composed-collections/)
- [Sorting & Automation](/smart-collections/sorting-and-automation/)
- [FAQ](/smart-collections/faq/)
