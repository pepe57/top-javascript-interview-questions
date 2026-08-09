import { ConfigType } from 'langnostic';

export default {
  ai: {
    provider: 'google',
  },
  localeConfig: {
    source: 'en-US',
    target: ['zh-CN'],
  },
  groups: [
    {
      name: 'quiz-js',
      plugin: 'mdx',
      paths: [
        {
          source: './questions/*/en-US.mdx',
          target: './questions/*/{locale}.mdx',
        },
        {
          source: './questions/*/exercises/en-US.mdx',
          target: './questions/*/exercises/{locale}.mdx',
        },
      ],
    },
  ],
} satisfies ConfigType;
