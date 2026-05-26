/** PM2 config for Hostinger VPS — run: pm2 start ecosystem.config.cjs */
module.exports = {
  apps: [
    {
      name: "alitworld",
      cwd: __dirname,
      script: "node",
      args: ".next/standalone/server.js",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        HOSTNAME: "0.0.0.0",
      },
      instances: 1,
      autorestart: true,
      max_memory_restart: "500M",
    },
  ],
};
