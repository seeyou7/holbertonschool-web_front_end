# Cookies and Web Storage with JavaScript

This project explores how to use cookies and web storage (local storage and session storage) in JavaScript. It demonstrates cookie manipulation with vanilla JavaScript and the js-cookie library, as well as how to store and retrieve data using both local and session storage.

## Learning Objectives

- Understand how to create cookies using JavaScript
- Set specific cookie settings (e.g., expiration, path)
- Learn how to read cookies with JavaScript
- Use the `js-cookie` library for easy cookie manipulation
- Explore the browser web storage (local storage and session storage)
- Understand the differences between local storage and session storage

## Prerequisites

- Basic knowledge of JavaScript and HTML
- Node.js and npm installed on your system
- Webpack for running the development server

## Requirements

- All JavaScript must be written inside the `<script>` tag in the HTML files.
- Use vanilla JavaScript for the tasks unless otherwise specified.
- All your files must end with a new line.
- Your code will be compiled/executed on Ubuntu 18.04 using Node.js 12.x and npm 6.x.
- Use allowed editors: `vi`, `vim`, `emacs`, or Visual Studio Code.

## Project Structure

#Cookies_local_storage/ ├── package.json ├── src/ │ └── index.js # Empty file; all code goes in HTML <script> tags ├── 0-index.html # Task 0: Basic Cookie Creation ├── 1-index.html # Task 1: Cookie with Expiration and Path ├── 2-index.html # Task 2: Read Cookie ├── 3-index.html # Task 3: Delete Cookie and Mini Application ├── 4-index.html # Task 4: Use js-cookie ├── 5-index.html # Task 5: Local Storage ├── 6-index.html # Task 6: Session Storage └── 7-index.html # Task 7: Advanced Cart System using Session Storage


## Tasks

### Task 0: Create Basic Cookie
In `0-index.html`:
- Two text inputs for `firstname` and `email`
- Buttons to set and display cookies
- Use `setCookies` to store input values as cookies and `showCookies` to display them.

### Task 1: Create Cookie with Expiration Date and Specific Path
In `1-index.html`:
- Modify cookie creation to include a 10-day expiration.

### Task 2: Read Cookie
In `2-index.html`:
- Use the `getCookie` function to return a cookie value by name and display it.

### Task 3: Delete Cookie and Mini Application
In `3-index.html`:
- Add a login form with the option to delete cookies and display a welcome message.

### Task 4: Use js-cookie
In `4-index.html`:
- Replace vanilla JavaScript cookie functions with the `js-cookie` library for manipulation.

### Task 5: Local Storage
In `5-index.html`:
- Create a shopping cart using local storage to track selected items.

### Task 6: Session Storage
In `6-index.html`:
- Adapt the shopping cart from Task 5 to use session storage instead of local storage.

### Task 7: Advanced Use of Session Storage
In `7-index.html`:
- Build a more advanced cart system using session storage to manage item quantities and provide options to add, remove, or clear items.

### Author : Younes SABER
