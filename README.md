# Tauri + React + Typescript

This template should help get you started developing with Tauri, React and Typescript in Vite.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)


## Compiling on Windows

First, ensure that you have the following installed

 - Rust (with Cargo)
 - NPM

After those are installed, download the source code in any way that makes sense for your (zip, tar.gz, using git, etc).

Open the code directory in a terminal and install the node packages

```
npm install
```

now verify that you can run the project

```
npm run tauri dev
```

If you're able to run the projct, you're ready to build

```
cargo tauri build
```

The executable will be saved to

```
src-tauri/target/release/warframe-weapons
```

Use the exe to run locally without having to open a terminal every time.
