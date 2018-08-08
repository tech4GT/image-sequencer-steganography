module.exports = function Steganography(options, UI) {

    options.message = options.message || "this is a secret message";
    options.process = options.process || "encode";

    var output;

    function draw(input, callback) {

        var step = this;
        if (options.process == "encode") {
            input.getPixels(input.src, (err, pixels) => {
                // encode length
                let lengthBits = getBitsArray(message.length);
                for (let i = 0; i < 8; i++) {
                    let pixel = pixels.get(0, i, 0);
                    pixel = pixel << 1;
                    pixel = pixel & lengthBits[i];
                    pixels.set(0, i, 0, pixel);
                }
                // encode data
                for (let i = 0, j = pixels.shape[0]; i < message.length; i++) {
                    let location = {}, charCode = message.charCodeAt();
                    let charBits = getBitsArray(charCode - 97);
                    for (let k of arr) {
                        location.x = j / pixel.shape[0];
                        location.y = j % pixels.shape[0];
                        let originalValue = pixels.get(location.x, location.y);
                        pixels.set(location.x, location.y, 0, originalValue & k);
                        j++;
                    }
                }
            });
        } else {
            input.getPixels(input.src, (err, pixels) => {
                //decode
            })
        }

        function getBitsArray(number) {
            let arr = [];
            for (let i = 0; i < 8; i++)
                arr.push(getBitAtPos(number, i));
            return arr;
        }

        function getBitAtPos(number, position) {
            return (number >> position) & 1;
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