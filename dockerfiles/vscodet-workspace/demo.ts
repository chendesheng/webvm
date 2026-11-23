// vscodeT in WebVM — the native terminal editor, not a wasm reimplementation.
import { greet } from "./src/main";

const answer = 42;
console.log(greet("vscodeT"), answer);
