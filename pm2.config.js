module.exports = {
  apps: [
    {
      name: 'Thinknetica React Basic',
      script: './initializers/server/index.js',
      cwd: '/home/dima/thinknetica-react-basic/current',
      instances: 2,
      exec_mode: 'cluster',
    },
  ],
  deploy: {
    production: {
      user: 'root',
      host: ['51.158.76.7'],
      ref: 'origin/task-9',
      repo: 'https://github.com/selivanov-d/thinknetica-react-basic.git',
      'post-deploy': 'yarn install && yarn build && pm2 startOrRestart pm2.config.js --env production',
      path: '/home/dima/thinknetica-react-basic',
      ssh_options: 'StrictHostKeyChecking=no',
    },
  },
};
