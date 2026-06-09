---
title: Rule-Based Collections
description: Define collection membership using product conditions — tags, type, vendor, title, price, inventory, status, and creation date.
sidebar:
  order: 4
---

A rule-based collection populates automatically based on conditions you define. Every time Smart Collections syncs, it evaluates your full product catalogue against those conditions and updates membership accordingly — adding products that now match and removing products that no longer do.

![Rule builder interface showing multiple conditions with an AND/OR toggle and a live product count](SCREENSHOT_PLACEHOLDER)

## How conditions work

Each condition targets one product field and checks it against a value using an operator. A product is included in the collection if it passes the conditions, according to the logic mode you choose (AND or OR).

### Logic modes

At the top of the rule builder you choose one of two modes:

- **All conditions must match (AND)** — a product is included only if it satisfies every condition
- **Any condition must match (OR)** — a product is included if it satisfies at least one condition

### Live product count

As you add or change conditions, a live count shows how many products currently match your rules. Use this to confirm your rules are working as expected before saving.

## Available conditions

### Tags

| Operator | Behaviour |
| --- | --- |
| includes | Product has this tag |
| does not include | Product does not have this tag |
| includes any of | Product has at least one of the listed tags |
| includes all of | Product has every one of the listed tags |

### Product type

| Operator | Behaviour |
| --- | --- |
| equals | Product type exactly matches |
| does not equal | Product type does not match |
| is one of | Product type matches any of a list of values |

### Vendor

| Operator | Behaviour |
| --- | --- |
| equals | Vendor name exactly matches |
| does not equal | Vendor name does not match |
| is one of | Vendor matches any of a list of values |
| contains | Vendor name includes the value as a substring |
| does not contain | Vendor name does not include the value |

### Title

| Operator | Behaviour |
| --- | --- |
| contains | Title includes the value |
| does not contain | Title does not include the value |
| equals | Title exactly matches |
| starts with | Title begins with the value |

### Status

| Value | Matches |
| --- | --- |
| Active | Published, active products |
| Draft | Products in draft status |
| Archived | Archived products |

### Price

| Operator | Behaviour |
| --- | --- |
| greater than | Price is above the value |
| less than | Price is below the value |
| between | Price is within the given range (inclusive) |

Price conditions use the product's lowest variant price.

### Inventory (total)

| Operator | Behaviour |
| --- | --- |
| in stock | Total inventory across all variants is greater than zero |
| out of stock | Total inventory is zero |
| greater than N | Total inventory exceeds N |
| less than N | Total inventory is below N |
| between N and M | Total inventory is within the range |

### Created date

| Operator | Behaviour |
| --- | --- |
| within last N days | Product was created in the last N days |
| before | Product was created before a specific date |
| after | Product was created after a specific date |

## Example rules

### All in-stock active products from a specific vendor

```plain
Status = Active
AND
Vendor = Acme Co
AND
Inventory = In stock
```plain

### Sale products under £100, or clearance with low stock

Switch to **Any condition must match (OR)** mode and add:

```plain
Tag includes "sale" AND Price less than 100
```plain

```plain
Tag includes "clearance" AND Inventory less than 5
```plain

:::note
Nested condition groups (for combining AND and OR within the same rule) are not yet available in the rule builder UI. Each rule currently operates with a single root-level AND or OR. More complex nested logic is coming in a future update.
:::

### New arrivals (last 30 days)

```plain
Created date = within last 30 days
AND
Status = Active
```plain

## Saving and syncing

When you click **Save**, Smart Collections saves your rules and immediately enqueues a full evaluation sync. The collection updates in Shopify within seconds for most stores.

If a sync is already running when you save, the new rules are applied on the next evaluation cycle.

## What happens when a product stops matching

If a product's attributes change (for example, a tag is removed, the price changes, or it goes out of stock) and it no longer satisfies your rules, Smart Collections removes it from the collection on the next sync. The product itself is not affected — only its membership in this collection changes.

Similarly, if a product changes to match your rules, it is added to the collection automatically.

## Related topics

- [Composed Collections](/smart-collections/composed-collections/)
- [Product Pins](/smart-collections/product-pins/)
- [Sorting & Automation](/smart-collections/sorting-and-automation/)
- [Troubleshooting](/smart-collections/troubleshooting/)
