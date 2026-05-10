---
name: css-best-practices
description: Skill for creating state-of-art, production-grade and optimized CSS. Use when create or refactor CSS files.
---

# CSS Best Practices

This is a guideline of best practices that we can apply to our front-end project.

## Follow conventions

Use AirBnb's CSS / Sass style guide for naming conventions, formatting, and organization.


## Follow a CSS methodology

Use BEM methodology for naming conventions, formatting, and organization.


## Alphabetize CSS properties

## Cross-browser compatibility

## Prefer CSS over JavaScript

## Avoid undoing styles

CSS that unsets styles should start ringing alarm bells right away.
Rulesets should only ever inherit and add to previous ones, never undo.

## Avoid magic numbers

## Avoid qualified selectors

Qualified selectors are ones like:

```css
ul.nav {}

a.button {}

div.header {}
```

Basically, selectors who are needlessly prepended by an element.
Those selectors can, and should be:

```css
.nav {}

.button {}

.header {}
```

Which will help us to save actual amounts of code, increase performance, allow greater portability and reduce specificity.

## Avoid hard-coded values

Not unlike magic numbers, hard-coded values are also bad news.
A hard-coded value might be something like this:

```css
h2 {
  font-size: 24px;
  line-height: 32px;
}
```

`line-height: 32px;` here is not cool, it should be `line-height: 1.333;`.
Line heights should always be set relatively to make them more forgiving and flexible.
Hard-coded values are not very future proof, flexible or forgiving, and thus should be avoided.

## Avoid brute forcing

This one is in a similar vein to hard-coded numbers, but a little more specific.
Brute forcing CSS is when we use hard-coded magic numbers and a variety of other techniques to force a layout to work.

```css
.foo {
  margin-left: -3px;
}
```

This type of CSS is indicative of either a poorly coded layout that requires this kind of manipulation, a lack of understanding of box-model and layout, or both.
Well coded layouts should never need brute-forcing, and a solid understanding of box model, layout and looking at our computed styles more often should mean that we'd rarely end up in a situation like this.

## Avoid dangerous selectors

A dangerous selector is one with far too broad a reach.
An obvious and simple example of a dangerous selector might be:

```css
div {
  background-color: #ffc;
}
```

Our styles will leak out into areas they shouldn't as soon as we start trying to use that element again.

## Avoid extra selectors

It's easy to unknowingly add extra selectors to our CSS that clutters the stylesheet.
One common example of adding extra selectors is with lists.

```css
body #container .someclass ul li {}
```

In this instance, just the `.someclass li` would have worked just fine.

```css
.someclass li {}
```

Adding extra selectors won't bring the end of the world, but they do keep our CSS from being as simple and clean as possible.

## Avoid reactive !important

`!important` is fine and it's a, well, important tool.
However, should only be used in certain circumstances.
`!important` should only ever be used proactively, not reactively.
For example, we will always want errors to be red, so this rule is totally fine.
Where is bad is when it is used reactively, that is, it's used to get someone out of a specificity problem and force things to work.

## Avoid IDs

They are of no use to anyone and should never be used in CSS.

## Avoid loose class names

A loose class name is one that is not specific enough to define what is its purpose.
Classes like `.board` and `.user` and suchlike are far too loose, making them hard to quickly understand, and easy to accidentally reuse/override.

## Avoid string concatenation for classes

## Avoid duplicated key selectors

The key selector is the selector that gets targeted/styled.

## Avoid using inline styles

We should avoid using it because it mixes up content and presentation, which can lead to more trouble.
Inline styles are considered as bad practice due to poor scalability and maintainability.
It leads to messy code where each HTML file will need to be updated in the event of a style change, instead of a global change in a single external stylesheet.
As a rule of thumb, define all styles in the CSS files.

## Avoid classes in wrong components

## Avoid @mixin everywhere

## Avoid @extend everywhere


## Avoid shorthand syntax everywhere
It might be more keystrokes, it might be more repetitive, it might be less DRY, but it's more accurate.
Only write as much as we need and not a single bit more.


## Use multiple classes

Sometimes it's beneficial to add multiple classes to an element.
Let's say that we have a `<div>` "box" that we want to display a warning and we've already a `.warning` class in our CSS.
We can simply add an extra class in the declaration, like so:

```html
<div class="box warning"></div>
```

We can add as many classes as we'd like (space separated) to any declaration.

## Use nested declarations

Using CSS preprocessor not only adds some useful functions to our toolset, but also helps with code organization.
The best example is styles' declaration nesting.
In Sass it's possible to nest selector in other selectors, so that we can see what's the relation between them.
It´s suggested not to go more than 3 levels deep.
This rule applies both for selectors specificity and selectors nesting in CSS preprocessors.
Going beyond that limit not only increases selector's strength, but also can make reading our code more difficult.

## Use "Margin: 0 auto" to center layouts

Unfortunately, we'll need to use the `margin: 0 auto`; to center divs, paragraphs or other elements in our layout.
By declaring that both the left and the right margins of an element must be identical, they have no choice but to center the element within its containing element.

## Use Hex Code instead of Name Color

It has been pointed out by experts and professionals that when using "hex code", they found that it is faster for 4-5 runs.
Try a performance test run and check for yourself.
So rather than using the "name color", go for "#hex code" instead.
Besides that, it´s recommended to use naming conventions for our color variables.
This way we'll get to give our colors names that a human can understand.

## Use a CSS reset

Applying a reset stylesheet should be the first step in any app design.

## Use a design system

A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.
A design system allows us to build for the future because it allows us to define our general design rules and specifications, follow an organization, modularize, define best practices, etc.
The reason it is a future proof strategy is that it is much easier to introduce changes, fix and configure things on a global scale.

## Use relative units

We should really try to use relative units.
Things like `em`, `rem`, `%`, `vw`, `vh`, `fr`, etc. Setting fix values with `px` and `pt` should be things for static design although there are cases that call for these value units.
The browser is flexible, so should our website and units.

## Use CSS variables

## Write descriptive media queries

Example:
```scss
$medium: 768px;
$screen-medium-wide: 'only screen and (min-width: #{$medium}) and (max-device-aspect-ratio: 9 / 16)';

@media #{$screen-medium-wide} {
  body {
    font-size: 20px;
  }
}
```

## Understand Block vs Inline Elements

Block elements are elements that naturally clear each line after they're declared, spanning the whole width of the available space.
Inline elements take only as much space as they need, and don't force a new line after they're used.
Here are the lists of elements that are either inline or block:

```html
span, a, strong, em, img, br, input, abbr, acronym
```

And the block elements:

```html
div, h1…h6, p, ul, li, table, blockquote, pre, form
```

## Minimize expensive properties

The browsers are super-fast, however, on complex websites, there are some painting issues related to setting `box-shadow`, `border-radius`, `position`, `filter`, and even `width` and `height`, especially for complex animations or repetitive changes.
These require the browser to do complex re-calculations and repaint the view again down to every nested child.
The "will-change" is used as a performance boost to tell the browser about how a property is expected to change.
However, its use is a last resort.

## Let the content define the size

Instead of setting the `width` and `height` of a button for example, consider setting some padding for spacing and including a `max-width` instead and `max-height` instead unless the design calls for a strict size.
This approach will reduce layout bugs and create reusable elements.

## Let the parent take care child position

When styling a component meant to be used in the content flow, let the content and inner spacing define the size and do not include things like `position` and `margin`.
Let the container where this component will be used to decide the position and how far apart this component is from others.
This approach, among other benefits, allows us to create reusable elements.

## Combine elements with same styles

Elements in a stylesheet sometimes share properties.
Instead of re-writing previous code, why not just combine them?
For example, the `h1`, `h2`, and `h3` elements might all share the same font and color:

```css
h1,
h2,
h3 {
  font-family: 'Times New Roman', Times, serif;
}
```

We could add unique characteristics to each of these header styles if we wanted (ie. `h1 {size: 2.1em;}`) later in the stylesheet.