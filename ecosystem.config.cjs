module.exports = {
  apps: [
    {
      name: "ginantara-fe",
      script: "npm",
      args: "run start", 
      interpreter: "none",
      env: {
        PORT: 3102,
      },
    },
  ],
};
