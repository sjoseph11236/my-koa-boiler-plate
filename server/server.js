const Koa = require('koa');
const { db } = require('./db/');
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
const PORT = process.env.PORT ||3000; 

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


// // Router Middleware
app.use(apiRouter.routes());
app.use(authRouter.routes());


// // Start the app..
// app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));

db.sync({force: true})
  .then(() => {
    console.log('db synced');
    app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));
  });