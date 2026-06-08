---
title: Creating & Taking Over Collections
description: How to create new Shopify collections through Smart Collections, and how to take over management of existing ones.
sidebar:
  order: 3
---

:::caution[Work in progress]
This page is a placeholder. Full content is coming soon.
:::

## Overview

Smart Collections can manage collections in two ways:

1. **Create new** — Smart Collections creates a new Shopify collection and manages it entirely
2. **Take over** — Smart Collections takes management of an existing Shopify collection

## Creating a new collection

When you create a collection through Smart Collections, a corresponding Shopify collection is created automatically. Smart Collections owns the membership and sorting of that collection from the start.

![New collection form](SCREENSHOT_PLACEHOLDER)

### Steps

1. Click **New Collection** in the dashboard
2. Select **Create new collection**
3. Enter a name and optional description
4. Configure rules (see [Rule-Based Collections](/smart-collections/rule-based-collections/))
5. Click **Save and sync**

## Taking over an existing collection

You can hand off an existing Shopify collection to Smart Collections for automated management.

:::note
Taking over a collection does not delete or modify existing products immediately. Smart Collections will apply your rules on the next sync.
:::

### Steps

1. Click **New Collection** in the dashboard
2. Select **Take over existing collection**
3. Search for and select the Shopify collection
4. Review current membership and configure rules
5. Click **Save and sync**

### What "taking over" changes

| Before takeover | After takeover |
|---|---|
| Membership managed in Shopify admin | Membership managed by Smart Collections |
| Manual sorting in Shopify admin | Sorting managed by Smart Collections rules |
| No automation | Automation applied on configured schedule |

## Releasing a collection

To stop managing a collection with Smart Collections without deleting it from Shopify:

1. Open the collection in Smart Collections
2. Click **Release collection**
3. Confirm — the collection remains in Shopify but Smart Collections will no longer sync it

![Release collection confirmation dialog](SCREENSHOT_PLACEHOLDER)
