## HTML
- Hyper Text Markup Language: structure of a webpage

1. `header`: can be ann introduction to a page or section, it can contain things like - logo, site title, navigation, search form

```html
<header>
    <h1>Website</h1>
</header>
```

2. `nav`: navigation in a website

```html
<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/support">Support</a>
</nav>
```

* We can use simply `<p>` tags but `<nav>` tags are easier for broswer to understand and find, they are good for - Accessibility, SEO, Readability

3. `main`: unique content of a page (only one per page)
* having multiple is a syntax issue and htmlvalidators can give issues, though browser will not give an issue majorly, but SEOs and Screen readers can have problems

```html
<main>
  <h1>Hello</h1>
  <p>This is a unique content to this page only</p>
</main>
```

* Do not place it inside <header>, <nav>, or <footer> - same issue and explanation as aboe

4. `section`: when a separate content has its own heading and content has to form multiple groups in a single page, usually has a heading
* different from `<div>` as div is a generic container, and section has a semantic meaning, where div is just a container box

```html
<main>
    <section>
        <p>
            About
        </p>
    </section>

    <section>
        <p>
            FAQs
        </p>
    </section>
</main>
```

5. `article`: sections group related content, an article content makes sense on its own
* basically making easier work for SEOs and Screen Readers

- Blogs
- News articles
- Product review
- Forums
- User Comments

* article cann be reused


6. `footer`: info at the end of page

```html
<footer>
  <p>2026 My Website</p>
</footer>
```


## CSS
- Cascading Style Sheets: visual of how webpage looks

```html
<h1>Header1</h1>
<p>Para</p>
```

```css
h1 {
    color: blue;
    font-size: 40px;
}
/* heading gets blue and larger */
```

- basically a css has three parts: selector, property and value

```
selector {
    property: value
}
```

1. `Selector`: selects which element to style
- `Tag selector`: directly on html tags like h1, h2, p etc.

```css
p {
    color: blue;
}
```

- `Class selector (.)`: styles classes

```html
<p class="important">Hello</p>
```

```css
.important {
    color: red;
}
```

- `ID selector (#)`: styles ids

```html
<h1 id="title">Welcome</h1>
```

```css
#title {
    color: green;
}
```

* Rule: An ID should be unique on a page, while a class can be shared by many elements.


2. `Property`: the part of element that selector has to change
- examples:

```
color
background-color
font-size
width
height
margin
padding
border
```

3. `Value`: how much that the property has to change
- Examples from above


### CSS Box Model
- Every html element is treated as a rectangle (box)
- Margin{Border{Padding{Content}}} - four layers

1. `Content`: the actual image or text
```html
<button>Submit</button>
```
- word submit is the content

2. `Padding`: space inside the element
```css
padding: 20px;
```
- larger button

3. `Border`: line around the padding

```css
border: 2px solid black;
```

4. `Margin`: space outside the element
- separation between elements

## Flex-Box
Flexbox is a one-dimensional CSS layout system that makes arranging, aligning, spacing, and sizing elements in a row or a column much easier

- The parent becomes a **flex container**, and its direct children become **flex items**.

```css
.container {
    display: flex;
}
```

Without Flexbox:

```
A
B
C
```

With Flexbox:

```
A   B   C
```

---

### Common Flexbox Properties

1. `display: flex`
- turns an element into a flex container.

```css
.container {
    display: flex;
}
```

2. `flex-direction`
- controls the direction of the flex items.

```css
flex-direction: row;
```

```
A  B  C
```

```css
flex-direction: column;
```

```
A
B
C
```

---

3. `justify-content`
- Aligns items along the **main axis** (the direction set by `flex-direction`).

```css
justify-content: center;
```

```
|     A B C     |
```

```css
justify-content: space-between;
```

```
A          B          C
```

> values can be
- `flex-start`
- `center`
- `flex-end`
- `space-between`
- `space-around`
- `space-evenly`

4. `align-items`
- Aligns items along the cross axis

```css
align-items: center;
```

> values can be
- `flex-start`
- `center`
- `flex-end`
- `stretch`


## Responsive Desing

- Adjustment to different screen sizes like Desktop, Laptop, Tablet, Phone etc.

### Media Query `(@media)`

```css
.container {
    display: flex;
}

@media (max-width: 600px) {
    .container {
        flex-direction: column;
    }
}
```

- basically on screens wider than 600px, the items are in a row and screens 600px or narrower, the items stack in a column.

Desktop:

```
A  B  C
```

Phone:

```
A
B
C
```