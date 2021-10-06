<script lang="ts">
  import Home from './components/pages/Home/Home.svelte';

  type WasmData = {
    greet: (name: string) => string;
  };

  export let wasm: WasmData;
</script>

<main>
  <Home {wasm} />
</main>

<style lang="scss">
  @import './styles/main';
</style>
