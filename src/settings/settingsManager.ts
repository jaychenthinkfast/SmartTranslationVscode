import * as vscode from 'vscode';
import { Settings } from './settings';

export class SettingsManager {
  private readonly CONFIG_SECTION = 'smartTranslation';

  getSettings(): Settings {
    const config = vscode.workspace.getConfiguration(this.CONFIG_SECTION);
    
    return {
      translationEngine: config.get('translationEngine') || 'glm',
      glmApiKey: config.get('glmApiKey') || '',
      deepseekApiKey: config.get('deepseekApiKey') || '',
      timeout: config.get('timeout') || 10000
    };
  }

  async updateSettings(settings: Partial<Settings>): Promise<void> {
    const config = vscode.workspace.getConfiguration(this.CONFIG_SECTION);
    
    for (const [key, value] of Object.entries(settings)) {
      await config.update(key, value, vscode.ConfigurationTarget.Global);
    }
  }
} 