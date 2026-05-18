const AI_PERSONALITIES = [
  {
    id: '12',
    name: 'Elon Musk',
    username: 'elonmusk',
    avatar: 'https://picsum.photos/id/64/200/200',
    description: 'Tesla, SpaceX, X',
    xUrl: 'https://twitter.com/elonmusk'
  },
  {
    id: '1159714101035270144',
    name: 'Sam Altman',
    username: 'sama',
    avatar: 'https://picsum.photos/id/177/200/200',
    description: 'CEO, OpenAI',
    xUrl: 'https://twitter.com/sama'
  },
  {
    id: '27321911',
    name: 'Demis Hassabis',
    username: 'demishassabis',
    avatar: 'https://picsum.photos/id/338/200/200',
    description: 'CEO, Google DeepMind',
    xUrl: 'https://twitter.com/demishassabis'
  },
  {
    id: '14708455',
    name: 'Yann LeCun',
    username: 'ylecun',
    avatar: 'https://picsum.photos/id/1027/200/200',
    description: 'Chief AI Scientist, Meta',
    xUrl: 'https://twitter.com/ylecun'
  },
  {
    id: '44196397',
    name: 'Bill Gates',
    username: 'BillGates',
    avatar: 'https://picsum.photos/id/91/200/200',
    description: 'Co-founder, Microsoft',
    xUrl: 'https://twitter.com/BillGates'
  },
  {
    id: '2244994540',
    name: 'Sundar Pichai',
    username: 'sundarpichai',
    avatar: 'https://picsum.photos/id/177/200/200',
    description: 'CEO, Google & Alphabet',
    xUrl: 'https://twitter.com/sundarpichai'
  },
  {
    id: '31927467',
    name: 'Andrew Ng',
    username: 'AndrewYNg',
    avatar: 'https://picsum.photos/id/1027/200/200',
    description: 'AI Educator, Founder of DeepLearning.AI',
    xUrl: 'https://twitter.com/AndrewYNg'
  },
  {
    id: '1605',
    name: 'Naval',
    username: 'naval',
    avatar: 'https://picsum.photos/id/64/200/200',
    description: 'AngelList Founder, Investor',
    xUrl: 'https://twitter.com/naval'
  }
];

module.exports = async (req, res) => {
  console.log('👥 人物列表请求');
  
  return res.json({
    data: AI_PERSONALITIES,
    usingRealApi: false,
    source: 'AI News Database',
    timestamp: new Date().toISOString()
  });
};
