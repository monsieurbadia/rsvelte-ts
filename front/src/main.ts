import App from './App.svelte';
// @ts-ignore
import wasm from '../../wasm/Cargo.toml';

export default (async () => {
  return new App({
    target: document.body,
    props: {
      wasm: await wasm(),
    },
  });
})();
