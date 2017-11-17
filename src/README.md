# Pages

All pages (except for the homepage) should be placed in their own folders and named index.nunjucks.
This will allow for cleaner url paths.

You can easily create new pages (for example an about page) using:

```
yo yeogurt:page about
```

This will create this structure:

```
└── src
    └── about
        └── index.nunjucks
```

So when you go to `/about` you will see your new page.

### Specifying a layout

We can create new pages that use different layouts. By default, a new page extends from `base.nunjucks`.
You can extend from a different layout (for example two-col) using:

```
yo yeogurt:page about --layout=two-col
```
