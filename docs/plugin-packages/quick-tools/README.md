# Quick Tools

Official installable plugin package for Snippets Code.

Quick Tools adds lightweight utility results to the global quick search box.
After installing and enabling the plugin, open quick search and type the
expression directly. No command prefix is required.

## Examples

Calculator:

```text
12 * (3 + 4)
计算 128 / 8
```

Unit conversion:

```text
一吨等于多少千克
1吨
1平方
1纳米
1厘米
2kg g
10公里 米
500ml L
1平方米 平方厘米
1亩 平方米
```

When only one unit is provided, Quick Tools uses a common default target unit,
for example `1吨` to `千克`, `1厘米` to `米`, and `1平方` to `平方厘米`.

Currency conversion:

```text
25欧元
25 EUR
100 USD CNY
25欧元 美元
1000日元 人民币
```

When only one currency is provided, Quick Tools converts it to CNY by default.

Currency conversion uses the Frankfurter API and needs network access to
`https://api.frankfurter.dev`.

## Install

Use the official plugin marketplace in Snippets Code, or install this repository
archive directly:

```text
https://github.com/GigaPuddings/snippets-code-plugin-quick-tools/archive/refs/heads/main.zip
```

Versioned package:

```text
https://github.com/GigaPuddings/snippets-code-plugin-quick-tools/archive/refs/tags/2.0.5.zip
```

This repository is synchronized from the main application repository by
`pnpm plugins:sync-repos`. Manual edits should be made in the main source
package, then synchronized again.
