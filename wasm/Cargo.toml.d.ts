type Exports = typeof import("../front/target/wasm-pack/back/index");
declare const exports: () => Promise<Exports>;
export default exports;
