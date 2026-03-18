import * as vscode from "vscode";
import { trimIndent } from "./trim-indent";

export function activate(context: vscode.ExtensionContext): void {
  const trimCommand = vscode.commands.registerCommand("extension.trimIndent", () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) { return; }

    const selection = editor.selection;
    if (selection.isEmpty) {
      vscode.window.showInformationMessage("Select text to trim indent.");
      return;
    }

    const text = editor.document.getText(selection);
    const trimmed = trimIndent(text);

    editor.edit((editBuilder) => {
      editBuilder.replace(selection, trimmed);
    });
  });

  const copyTrimmedCommand = vscode.commands.registerCommand("extension.copyTrimmed", async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) { return; }

    const selection = editor.selection;
    if (selection.isEmpty) {
      vscode.window.showInformationMessage("Select text to trim indent and copy.");
      return;
    }

    const text = editor.document.getText(selection);
    const trimmed = trimIndent(text);
    await vscode.env.clipboard.writeText(trimmed);
  });

  context.subscriptions.push(trimCommand, copyTrimmedCommand);
}

// biome-ignore lint/suspicious/noEmptyBlockStatements: required by VS Code extension API
export function deactivate(): void {}
