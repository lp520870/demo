const Koa = require("koa");

const app = new Koa();

app.use((ctx, next) => {
  ctx.body = "你好，中国";
});

app.listen(8000, () => {
  console.log("==>server is running on http://10.0.22.68:8000");
});
