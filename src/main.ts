import { Application } from "pixi.js";

/** The PixiJS app Application instance, shared across the project */
export const app = new Application();

/** Set up a resize function for the app */
function resize() {

}

/** Setup app and initialise assets */
async function init() {

    await app.init({
        resolution: Math.max(window.devicePixelRatio, 2),
        backgroundColor: 0xffffff,
    });

    // Add pixi canvas element to the document's body
    document.body.appendChild(app.canvas);
}

// Init everything
init();
