module.exports = function Steganography(options, UI) {

    options.message = options.message || "this is a secret message";
    options.process = options.process || "encode";

    var output;

    function draw(input, callback) {

        var step = this;
        if (options.process == "encode") {
            input.getPixels(input.src, (err, pixels) => {
                //encode
            })
        } else {
            input.getPixels(input.src, (err, pixels) => {
                //decode
            })
        }
        function output(image, datauri, mimetype) {
            step.output = { src: datauri, format: mimetype };
        }

    }

    return {
        options: options,
        draw: draw,
        output: output,
        UI: UI
    }
}