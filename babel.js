var babel = require("@babel/core");
//  require("@babel/register")( {
//    presets: ['@babel/preset-react']
// });

// console.log(require('./index'))
babel.transformFile('index.js',{
   "presets": [
     [
       "@babel/preset-env",
       {
         "useBuiltIns": "entry"
       }
     ]
   ]
 },(err,result,...a)=>{
   console.log(result,err)
})