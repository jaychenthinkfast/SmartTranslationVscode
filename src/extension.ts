import * as vscode from 'vscode';
import { TranslationService } from './services/translationService';
import { SettingsManager } from './settings/settingsManager';

function detectLanguage(text: string): 'zh-CN' | 'en' {
  if (!text.trim()) return 'en';
  const chineseCharCount = (text.match(/[\u4e00-\u9fa5]/g) || []).length;
  const chineseRatio = chineseCharCount / Math.max(text.length, 1);
  return chineseRatio > 0.1 ? 'zh-CN' : 'en';
}

function getLanguageName(lang: string): string {
  switch (lang) {
    case 'zh-CN': return '中文';
    case 'en': return '英文';
    default: return lang;
  }
}

export function activate(context: vscode.ExtensionContext) {
  const translationService = new TranslationService();
  const settingsManager = new SettingsManager();

  // 注册翻译命令
  let disposable = vscode.commands.registerCommand('smart-translation.translate', async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage('请先打开一个编辑器');
      return;
    }

    const selection = editor.selection;
    const text = editor.document.getText(selection);
    if (!text) {
      vscode.window.showErrorMessage('请先选择要翻译的文本');
      return;
    }

    try {
      const settings = await settingsManager.getSettings();
      const sourceLang = detectLanguage(text);
      const targetLang = sourceLang === 'zh-CN' ? 'en' : 'zh-CN';
      
      const systemPrompt = `你是一个翻译助手，只需将输入内容从${getLanguageName(sourceLang)}翻译为${getLanguageName(targetLang)}，不要添加任何解释或说明，只输出翻译结果。`;
      const userPrompt = text;

      const translation = await translationService.translate(text, settings, systemPrompt, userPrompt);

      // 显示翻译结果弹窗
      const engineName = settings.translationEngine === 'glm' ? 'GLM' : 'DeepSeek';
      const message = `原文 (${getLanguageName(sourceLang)}):\n${text}\n\n译文 (${getLanguageName(targetLang)}):\n${translation}\n\n翻译引擎: ${engineName}`;
      
      vscode.window.showInformationMessage(message, { modal: true });
    } catch (error) {
      vscode.window.showErrorMessage(`翻译失败: ${error}`);
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {} 