import { Application } from "pixi.js";
import { Assets } from "pixi.js";
import manifest from './manifest.json';

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

    initAssets();
}

async function initAssets(){
  // Init PixiJS assets with this asset manifest
  await Assets.init({ manifest, basePath: 'assets'});

  // Load assets for the load screen
  await Assets.loadBundle(['preload', 'default']);

  // List all existing bundles names
  const allBundles = manifest.bundles.map((item) => item.name);

  // Start up background loading of all bundles
  Assets.backgroundLoadBundle(allBundles);
}
// Init everything
init();
