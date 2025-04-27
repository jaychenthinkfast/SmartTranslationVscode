import axios from 'axios';
import { Settings } from '../settings/settings';

export class TranslationService {
  private readonly GLM_API_URL = 'https://open.bigmodel.cn/api/paas/v4/chat/completions';
  private readonly GLM_PROXY_URL = 'https://glmproxy.chenjie.info/v1/chat/completions';
  private readonly DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions';

  async translate(text: string, settings: Settings, systemPrompt: string, userPrompt: string): Promise<string> {
    try {
      if (settings.translationEngine === 'glm') {
        return await this.translateWithGLM(text, settings.glmApiKey, systemPrompt, userPrompt);
      } else {
        return await this.translateWithDeepSeek(text, settings.deepseekApiKey, systemPrompt, userPrompt);
      }
    } catch (error) {
      throw new Error(`翻译失败: ${error}`);
    }
  }

  private async translateWithGLM(text: string, apiKey: string, systemPrompt: string, userPrompt: string): Promise<string> {
    const url = apiKey ? this.GLM_API_URL : this.GLM_PROXY_URL;
    const headers: any = { 'Content-Type': 'application/json' };
    if (apiKey) {
      headers['Authorization'] = `Bearer ${apiKey}`;
    }
    const response = await axios.post(
      url,
      {
        model: 'glm-4',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ]
      },
      { headers }
    );
    return response.data.choices[0].message.content;
  }

  private async translateWithDeepSeek(text: string, apiKey: string, systemPrompt: string, userPrompt: string): Promise<string> {
    const response = await axios.post(
      this.DEEPSEEK_API_URL,
      {
        model: 'deepseek-chat',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ]
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data.choices[0].message.content;
  }
} 