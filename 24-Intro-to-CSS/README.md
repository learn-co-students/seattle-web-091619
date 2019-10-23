# CSS Fundamentals

## Objectives

* Discuss what CSS does and why it's important
* Differentiate between inline, internal, and external stylesheets
* Understand how to use class, id, and element selectors, and selector order of importance
* Demonstrate the use of the box model, floats, clear, positioning, and CSSS grid in page layout
* Introduce CSS Frameworks like Bootstrap and Semantic UI

## CSS Basics
What does CSS stand for?
What does CSS do?
What mades good CSS vs what makes bad CSS?
What is CSS Reset vs CSS Normalize? IE, Chrome, Firefox, Opera, Safari, Vivaldi, Torch, Brave Browser

[CSS Reset or CSS Normalize](https://medium.com/@elad/normalize-css-or-css-reset-9d75175c5d1e)
[CSS Reset GitHub](https://gist.github.com/DavidWells/18e73022e723037a50d6)


## HTML Basics
**HTML** is Hyper Text Markup Language. HTML uses tags and attributes to tell the web browser how to dsiplay text, hyperlinks, images and various other mediums. 
**HTML Tags** are the opening statement without additional attributes such as:
* ```<p>``` defines a paragraph
* ```<div>``` defines a division on the page
* ```<ul id="unordered list>``` defines an unoredered list that has an ID attribute
* ```<a hfref="about.html>``` -  ```<a>``` is an anchor tag used to define a hypertext link, href is **H**ypertext **REF**erence HTML code used to create a link to another page
**Elements** in HTML refers to a tag (such as ```<head>```, ```<body>```, and ```<p>```) or element of structure of a document(such as body, title, and paragraph). They are the basic building blocks of HTML.
- An HTML element is the opening and closing tag ```<p></p>```</br>
**Singleton or Void** elements do not need a closing tag ```</>```</br>
-Example: ```<img src="file_source/image.jpg">```

## Stylesheets and Selectors

How do we add CSS to our HTML page?
* Inline
* Internal 
* External 

Types of CSS selectors
* HTML tags
* Classes
* Ids

HTML Tag:
```
h1 {
  font-size: 20px;
}
```
</br>

CSS Class Selector:
```
.example {
  margin-bottom: 0px;
}
```

CSS ID Selector:
```
#main-page-title {
  font-family: sans-serif;
}

```

The difference between an ID and a class is that an ID can be used to identify one element, whereas a class can be used to identify more than one.

## HTML.ERB Sample
```
<!DOCTYPE html>
<html>
  <body>
    <p>Hello, <%= user.first_name %>.</p>
  </body>
</html>
```

## The Box Model
[The Box Model Reference](https://internetingishard.com/html-and-css/css-box-model/)</br>
4 Elements of the box model:
* Content
* Padding
* Border
* Margin

(Use Chrome Web Developer to explore!)

## Layouts & Positioning - Floats & Clear
Floats - take our elements outside of the standard flow of the webpage
```
.grand-canyon-image {
  width: 400px;
  float: left;
}
```
Use clear to make your elements 'clear' any floats and sit inline with the regular flow of the page
```
.park-info {
  clear: both;
}
```
## Layouts & Positioning - CSS Grid
Grid-based layout system</br>
Makes it easy to create well-designed and responsive pages</br>
**CSS-TRICKS** is your friend!</br>
[CSS Grid Tutorial](https://css-tricks.com/snippets/css/complete-guide-grid/)<br>


## CSS Frameworks

Does a lot of the CSS work for us
[Semantic UI](https://semantic-ui.com/)
[Bootstrap](https://getbootstrap.com/)

## Resources

- [HTML Terms Glossary](http://www.scriptingmaster.com/html/HTML-terms-glossary.asp)
- [CSS Diner](https://flukeout.github.io/)
- [CSS Flexbox Froggy](https://flexboxfroggy.com/)
- [CSS Grid Garden](http://cssgridgarden.com/)
- [Awwwards](https://www.awwwards.com/)
- [codrops](https://tympanus.net/codrops/css_reference/)
- [CSS Tricks](https://css-tricks.com/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
