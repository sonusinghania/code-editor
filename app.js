function initialize() {
    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var js = document.getElementById("js");
    var code = document.getElementById("code").contentWindow.document;

    // Copy Button here
    document.getElementById("copyBtn").addEventListener("click", function () {
        // Create a textarea to copy the content of the code 
        var tempTextarea = document.createElement("textarea");
        tempTextarea.value = code.documentElement.outerHTML;
        document.body.appendChild(tempTextarea);
        tempTextarea.select();
        document.execCommand("copy");
        document.body.removeChild(tempTextarea);
        alert("Code copied to clipboard!");
    });

    // Save Button
    document.getElementById("saveBtn").addEventListener("click", function () {
        // Create a Blob with the HTML content
        var blob = new Blob([code.documentElement.outerHTML], { type: "text/html" });

        // Created a download link here
        var a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "code_output.html";
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        alert("Code saved to file!");
    });

    document.body.onkeyup = function () {
        code.open();
        code.write(
            "<html><head>" +
            "<style>" + css.value + "</style>" +
            "</head><body>" +
            html.value +
            "<script> " + js.value + "</script>" +
            "</body></html>"
        );

        code.close();
    }
}

initialize();
