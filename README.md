# spongebobify-text
Simple, browser-based interface for sPonGEbOBifYinG tEXt input.

## Why?
This project started out as a simple `javascript` file that I was using to practice functional programming with arrow functions and `map`. I then decided that something like this would be more useful if packaged as a Google Chrome extension.

Decided to learn how to make simple extensions by studying and recreating some of the [Sample Apps](https://developer.chrome.com/apps/samples) on Google's documentation, and then built this. 

## Improvements
- Need to figure out a way to fix the width and positioning of the extension. 
- Styling could definitely use some work. 
- The JS file seems to skip not only characters such as `<` that aren't alphabets, but also any letters between two such characters e.g. it will skip `<iostream>` entirely. Not sure why. Must fix. 
