# Trim Indent

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![VS Marketplace](https://img.shields.io/visual-studio-marketplace/v/prberg.trim-indent)](https://marketplace.visualstudio.com/items?itemName=prberg.trim-indent)
[![Open VSX](https://img.shields.io/open-vsx/v/prberg/trim-indent)](https://open-vsx.org/extension/prberg/trim-indent)

VS Code extension that removes common leading whitespace from the selected text, preserving relative indentation.

VS Code has built-in commands to indent and outdent lines, but no command to trim the common leading whitespace from a
selection. This has been an [open request since 2018](https://github.com/microsoft/vscode/issues/45751). Trim Indent
fills that gap.

## 🚀 Usage

1. Select indented text in the editor
2. Open the Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`)
3. Run **Trim Indent**

### Before

```
        if (isReady) {
          console.log("Start");
          if (hasWarnings) {
            console.warn("Warnings detected");
          }
        }
```

### After

```
if (isReady) {
  console.log("Start");
  if (hasWarnings) {
    console.warn("Warnings detected");
  }
}
```

### Behavior

- Finds the minimum leading whitespace shared by all non-empty lines
- Removes exactly that amount from each line
- Blank and whitespace-only lines are ignored when computing the common indent
- Works with both spaces and tabs
- If nothing is selected, shows a friendly message

## 📦 Installation

### VS Code / Cursor

```bash
ext install prberg.trim-indent
```

Or search for "Trim Indent" in the Extensions sidebar.

### Open VSX

Available on [Open VSX Registry](https://open-vsx.org/extension/prberg/trim-indent).

## 🛠️ Development

```bash
bun install
just build    # Bundle with esbuild
just test     # Run tests
just watch    # Watch mode
just package  # Build VSIX
```

Press `F5` in VS Code to launch the Extension Development Host.

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
