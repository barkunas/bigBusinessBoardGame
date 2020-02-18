var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation, rootLib;
        function init() {
            canvas = document.getElementById("canvas");
            anim_container = document.getElementById("animation_container");
            dom_overlay_container = document.getElementById("dom_overlay_container");
            var comp = AdobeAn.getComposition("915F48D7493A9947A2E697D8A433BA25");
            var lib = comp.getLibrary();
            rootLib = lib;
            var loader = new createjs.LoadQueue(false);
            loader.addEventListener("fileload", function (evt) { handleFileLoad(evt, comp) });
            loader.addEventListener("complete", function (evt) { handleComplete(evt, comp) });
            var lib = comp.getLibrary();
            loader.loadManifest(lib.properties.manifest);
        }
        function handleFileLoad(evt, comp) {
            var images = comp.getImages();
            if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
        }
        function handleComplete(evt, comp) {
            //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
            var lib = comp.getLibrary();
            var ss = comp.getSpriteSheet();
            var queue = evt.target;
            var ssMetadata = lib.ssMetadata;
            for (i = 0; i < ssMetadata.length; i++) {
                ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
            }
            var preloaderDiv = document.getElementById("_preload_div_");
            preloaderDiv.style.display = 'none';
            canvas.style.display = 'block';
            exportRoot = new lib.main();
            stage = new lib.Stage(canvas);
            stage.addChild(exportRoot);
            //Registers the "tick" event listener.
            fnStartAnimation = function () {
                createjs.Ticker.setFPS(lib.properties.fps);
                createjs.Ticker.addEventListener("tick", stage);
            }
            //Code to support hidpi screens and responsive scaling.
            function makeResponsive(isResp, respDim, isScale, scaleType) {
                var lastW, lastH, lastS = 1;
                window.addEventListener('resize', resizeCanvas);
                resizeCanvas();
                function resizeCanvas() {
                    var w = lib.properties.width, h = lib.properties.height;
                    var iw = window.innerWidth, ih = window.innerHeight;
                    var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
                    if (isResp) {
                        if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                            sRatio = lastS;
                        }
                        else if (!isScale) {
                            if (iw < w || ih < h)
                                sRatio = Math.min(xRatio, yRatio);
                        }
                        else if (scaleType == 1) {
                            sRatio = Math.min(xRatio, yRatio);
                        }
                        else if (scaleType == 2) {
                            sRatio = Math.max(xRatio, yRatio);
                        }
                    }
                    canvas.width = w * pRatio * sRatio;
                    canvas.height = h * pRatio * sRatio;
                    canvas.style.width = anim_container.style.width = dom_overlay_container.style.width = preloaderDiv.style.width = w * sRatio + 'px';
                    canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = preloaderDiv.style.height = h * sRatio + 'px';
                    stage.scaleX = pRatio * sRatio;
                    stage.scaleY = pRatio * sRatio;
                    lastW = iw; lastH = ih; lastS = sRatio;
                }
            }
            makeResponsive(true, 'both', true, 1);
            AdobeAn.compositionLoaded(lib.properties.id);
            fnStartAnimation();
        }