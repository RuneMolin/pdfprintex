"use strict";

var $ = require("jquery-browserify");
var PDFDocument = require("pdfkit");
var html2canvas = require("html2canvas");
var blobStream = require('blob-stream');

$("#saveAsPDF").click(() => {
    $('body').scrollTop(0);

    let content = $("#content");
    html2canvas(content).then((canvas) => {
        let img = canvas.toDataURL('image/png');
        let doc = new PDFDocument({
          size: "A4",
          layout: "landscape",
          info: {
            Title: "This document is created client side",
            Author: "Rune Molin, rmo@nine.dk"
          }
        });

        let stream = doc.pipe(blobStream());

        doc.image(img, 0, 0, {width: doc.page.width, height: doc.page.height});

        doc.end();

        stream.on("finish", () => {
            let url = stream.toBlobURL("application/pdf");
            window.open(url);
        });
    });

});
