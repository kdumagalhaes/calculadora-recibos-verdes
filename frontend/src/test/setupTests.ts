// this config will handle the animate.css screen changes
import * as ResizeObserverModule from 'resize-observer-polyfill'
;(global as any).ResizeObserver = ResizeObserverModule.default

// jsom doesn't support window.matchMedia
global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    }
  }
