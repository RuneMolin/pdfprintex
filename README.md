
# Client side PDF generation example

This is a small example, showing how to generate PDF client-side in Javascript.

Relies on [html2canvas](https://html2canvas.hertzen.com/) and [pdfkit](https://github.com/devongovett/pdfkit)

Basically, this example takes a screenshot of the browser and inserts the image on a page in a PDF document.


## Building and running

    npm install
    npm run build && npm run serve

## Compatibility
This example is in ES6. Specifically because of the _fat arrow_  syntax used, this will not run in Safari 9 or IE 8/11.

Check http://caniuse.com/#feat=arrow-functions
