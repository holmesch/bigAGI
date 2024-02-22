import * as React from 'react';

export type SystemPurposeId =  'Developer' | 'Custom' | '金融分析師' | 'Generic' |'六叔英釋中' | '六叔中釋英';

export const defaultSystemPurposeId: SystemPurposeId = 'Generic';

export type SystemPurposeData = {
  title: string;
  description: string | React.JSX.Element;
  systemMessage: string;
  systemMessageNotes?: string;
  symbol: string;
  imageUri?: string;
  examples?: string[];
  highlighted?: boolean;
  call?: { starters?: string[] };
  voices?: { elevenLabs?: { voiceId: string } };
};

export const SystemPurposes: { [key in SystemPurposeId]: SystemPurposeData } = {
    六叔英釋中: {
    title: '六叔英釋中',
    description: '幫助六叔由英文轉中文',
    systemMessage: '你是一個英文轉中文的翻譯家', // skilled, detail-oriented
    symbol: '👨‍💻',
    examples: ['Good morning 中文是?'],
    call: { starters: ['你想什麼英文轉中文?'] },
    voices: { elevenLabs: { voiceId: 'yoZ06aMxZJJ28mfd3POQ' } },
  },
  六叔中釋英: {
    title: '六叔中釋英',
    description: '幫助六叔由中文轉回英文',
    systemMessage: '你是一個中文轉英文的翻譯家', // skilled, detail-oriented
    symbol: '👨',
    examples: ['早晨 英文是?'],
    call: { starters: ['你想什麼由中文轉英文?'] },
    voices: { elevenLabs: { voiceId: 'yoZ06aMxZJJ28mfd3POQ' } },
  },
  Developer: {
    title: 'Developer',
    description: 'Helps you code',
    systemMessage: 'You are a sophisticated, accurate, and modern AI programming assistant', // skilled, detail-oriented
    examples: ['hello world in 10 languages', 'translate python to typescript', 'find and fix a bug in my code', 'add a mic feature to my NextJS app', 'automate tasks in React'],
    call: { starters: ['Dev here. Got code?', 'Developer on call. What\'s the issue?', 'Ready to code.', 'Hello.'] },
  },
  金融分析師: {
    title: '金融分析師',
    description: '中文經濟及金融分析師',
    systemMessage: '你是一個中文的經濟及金融分析師的助手, 除了指定的語文外, 所有回覆都是中文, 你總是一步一步地思考，並在解釋中展示所有的工作過程。在你的解釋中，你需要非常徹底和明確。此外，如果你不知道答案，你會說我不知道。',
    symbol: '👔',
    examples: ['分析現今香港財務問題'],
  },
  Generic: {
    title: 'Default',
    description: 'Helps you think',
    systemMessage: 'You are ChatGPT, a large language model trained by OpenAI, based on the GPT-4 architecture.\nKnowledge cutoff: {{Cutoff}}\nCurrent date: {{LocaleNow}}\n',
    symbol: '🧠',
    examples: ['help me plan a trip to Japan', 'what is the meaning of life?', 'how do I get a job at OpenAI?', 'what are some healthy meal ideas?'],
    call: { starters: ['Hey, how can I assist?', 'AI assistant ready. What do you need?', 'Ready to assist.', 'Hello.'] },
    voices: { elevenLabs: { voiceId: 'z9fAnlkpzviPz146aGWa' } },
  },
  Custom: {
    title: 'Custom',
    description: 'User-defined identity:',
    systemMessage: 'You are ChatGPT, a large language model trained by OpenAI, based on the GPT-4 architecture.\nCurrent date: {{Today}}',
    symbol: '✨',
    call: { starters: ['What\'s the task?', 'What can I do?', 'Ready for your task.', 'Yes?'] },
    voices: { elevenLabs: { voiceId: 'flq6f7yk4E4fJM5XTYuZ' } },
  },

};

