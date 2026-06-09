---
title: Smart Collections Overview
description: An introduction to Smart Collections — what it does, who it's for, and how it fits into your Shopify store.
sidebar:
  order: 1
---

Smart Collections is a Shopify app that gives you precise, automated control over which products appear in your collections and in what order. It replaces the need to manually sort or maintain collections as your catalogue changes.

![Smart Collections dashboard showing collection list with sync status badges and last-synced timestamps](SCREENSHOT_PLACEHOLDER)

## What it does

Smart Collections manages two things inside each collection you hand over to it:

- **Membership** — which products belong in the collection, evaluated automatically from rules you define
- **Sort order** — how those products are ordered, applied on every sync

Shopify continues to own everything else: the collection's title, description, image, SEO fields, and handle. You can edit those from your Shopify admin or from within Smart Collections at any time.

## How it works

When you connect a collection to Smart Collections, the app takes responsibility for keeping it correct. It evaluates your rules against your full product catalogue, adds or removes products as needed, and sorts the result — automatically, every time a relevant product changes in your store.

You do not need to edit your theme or write any code.

## What you can configure

| What | How |
| --- | --- |
| Which products belong | Rule conditions based on tags, type, vendor, title, price, inventory, status, and creation date |
| How products are ordered | Sort key (price, title, vendor, type, inventory, or creation date) with direction |
| Fixed product positions | Top pins and bottom pins that survive all re-sorts |
| Out-of-stock handling | Toggle to automatically push out-of-stock products to the end of the collection |
| Composed collections | Aggregate products from multiple other collections into one |

## What Smart Collections does not control

The following are owned by Shopify and are not affected by Smart Collections:

- Collection title, description, and image
- SEO title, SEO description, and handle
- Theme templates and publication state
- Individual product data (title, tags, price, inventory)

## Key terms

| Term | Meaning |
| --- | --- |
| Managed collection | A collection whose membership and sort order are controlled by Smart Collections |
| Rule-based collection | Membership is determined by conditions you define |
| Composed collection | Membership is aggregated from one or more other managed collections |
| Sync | One pass of evaluation and sorting for a collection |
| Top pin | A product held at a fixed position at the top of a collection |
| Bottom pin | A product held at a fixed position at the end of a collection |

## Related topics

- [Getting Started](/smart-collections/getting-started/)
- [Creating & Taking Over Collections](/smart-collections/creating-and-taking-over-collections/)
- [Rule-Based Collections](/smart-collections/rule-based-collections/)
- [Composed Collections](/smart-collections/composed-collections/)
- [Sorting & Automation](/smart-collections/sorting-and-automation/)
