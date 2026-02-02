# Dummy

`@gonzo-engineering/dummy` is (or soon will be) a publishing engine for independent journalism.

A publisher repository shouldn't need to look like much more than this:

```
dummy.config.ts
netlify.toml
package.json
```

With `package.json` kept similarly trim:

```json
{
  "name": "acme-news",
  "private": true,
  "scripts": {
    "build": "dummy build",
    "dev": "dummy dev"
  },
  "dependencies": {
    "@gonzo-engineering/dummy": "^0.0.1"
  }
}
```

Feed in config and Dummy will take care of the rest, building a fast, optimised, news-focused website and content management system that costs smaller publications nothing to run.

That's the idea anyway.