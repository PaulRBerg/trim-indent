import * as vscode from "vscode";
import { trimIndent } from "./trim-indent";

export function activate(context: vscode.ExtensionContext): void {
  const command = vscode.commands.registerCommand("extension.trimIndent", () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;

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

  context.subscriptions.push(command);
}

export function deactivate(): void {}
