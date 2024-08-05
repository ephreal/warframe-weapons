# Warframe Weapon Tracker

Have you ever been trying to track which Lich or Sister of Parvos weapons you've seen while hunting for a specific weapon, and then ran out of ink, paper, patience, or just plain forgot which ones you've already seen? I can confidently say I've done one of those things.

No more will you need lists written on paper! No mare will your memory fail you! No more will your ink-stained hand knock over your cup of freshly brewed Jasmine tea (two tea-spoons of sugar, stirred precisely 10 times) when you go to grab your mouse! Not even shall you fall to the depridations of memory loss, for this program will remember all for you (provided all you need to remember is which weapons you've seen in the past several minutes). Simply open the app and click on the weapons you've seen. It tracks it for you!

## Usage

I you're on Linux, simply download the executable from the releases tab, and run. While I hope there are no additional dependencies required, there may be. If you happen to run into any, please open an issue with which distribution you're on, and the steps you took to resolve it. I'll link to the steps from here.

If you're on Windows, proceed below and follow the compilation steps. I don't have a windows device to compile on.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)


## Compiling on Windows

First, ensure that you have the following installed

 - [Visual Studio](https://visualstudio.microsoft.com/downloads/)
 - [Rust (with Cargo)](https://www.rust-lang.org/tools/install)
 - NPM

After those are installed, download the source code in any way that makes sense for your (zip, tar.gz, using git, etc).

Open the code directory in a terminal and install the node packages

```
npm install
```

and verify that you can run the project.

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
