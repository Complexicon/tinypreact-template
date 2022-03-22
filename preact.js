import * as preact from 'https://unpkg.com/preact@latest?module';
import * as hooks from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
window.React = { createElement: preact.h, Fragment: preact.Fragment };
export {hooks};
export {preact};