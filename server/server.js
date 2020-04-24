const Koa = require('koa');
const { db } = require('./db/');
const send = require('koa-send');
const Router = require('koa-router');
const logger = require('koa-logger');
const static = require('koa-static');
const session = require('koa-session');
const passport = require('koa-passport');
const bodyParser = require('koa-bodyparser');

//Sub-route folders
const apiRouter = require('./api');
const authRouter = require('./auth');


//Intialize app.  
const app =  new Koa();

// Session CONFIG
const CONFIG =  {
  key: 'koa:sess',
  maxAge: 86400000,
  overwrite: true,
  httpOnly: true,
  signed: false,
  rolling: false,
  renew: false
}

// Logger Middleware
app.use(logger());
// Body Parser Middleware
app.use(bodyParser());

// Error Middleware
app.use(async (ctx, next) => {
  try {
    console.log('here')
    await next();
  } catch (err) {
    console.error(err);
    ctx.throw(err.status || 500, err.message || 'Internal Server Error');
  }
});

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findByPk(id);
  done(null, user);
});

app.use(session(CONFIG, app));

app.use(passport.initialize());
app.use(passport.session());

// Static middlware
app.use(static('./public'));

const router = new Router();

router.get('*', async ctx => { 
  console.log('here too')
  await send(ctx, '../public/index.html');
});

// Sends index.html
app.use( async (ctx) => {
  await send(ctx, ctx.path, { root: __dirname + '/public' });
})

// app.use(async (ctx) => {
//   await send(ctx, '../public/index.html');
// })

// // Router Middleware
app.use(router.routes());
app.use(apiRouter.routes());
app.use(authRouter.routes());


module.exports = app;