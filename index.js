// console.log('hello')
// let joke = require('give-me-a-joke')
// console.log(joke,'hijih')

// joke.getRandomDadJoke((jiiii)=>{
// console.log(jiiii)
// })



///  In Synchronus Manner    ///


//let fs = require('fs')
// fs.writeFileSync('index.txt','HEllo THis is TExt file')
// fs.renameSync('index.txt','index.html')
// let data = fs.readFileSync('index.html')
// console.log(data.toString())

// fs.writeFileSync('index.html', 'For NOde JS backend Environment')





/// In SYnchronus Manner ///

// fs.writeFile('kohli.rcb','<h2>VIRAT KOHLI COMES IN OPENING PLATFORM</h2>',((err)=>{
// if(err) throw err
// console.log("KOHLI DEFINATELY MAKES HER SANTUARY")
// }))

// fs.rename('kohli.rcb','kohli.txt',((err)=>{
// if(err) throw err
// console.log('File Name Is Updated')
// }))

// fs.readFile('kohli.txt',(data,err)=>{
//     if(err) throw err
//     console.log(data.toString())
// })



/// creating our own Web server page   ///
//  END = server  se response dene ke kaam me aata h client ke


// let http =require('http')
// //console.log(http,'TUmse nhi HOga')
// let server = http.createServer((req,res)=>{
// res.end('Hello GUys')
// })
// server.listen(5500,()=>{
//     console.log('Server is now Running on localHost : 5500')
// })



/// Creating and taking responsne from server using express  //

// const express = require('express')
// let app = express()
// let port = 4500

// app.get('/',(req,res)=>{
// res.send('Welcome to our Webpage')
// })
// app.get('/chotu',(req,res)=>{
//     res.send('<h2>Chota patakha Don</h2>')
//     })

//     app.get('/chIO',(req,res)=>{
//        res.send('<BUTTON>Chota Don</BUTTON>')
//        })

//        app.get('*',(req,res)=>{
//           res.send('GHAR JAO BETA')
//           })

// app.listen(port,()=>{
// console.log('Your server is running i port Node. 4500')
// })



// -------------------------------- 15-05-2024 ------------------------------------------//


// pathparameter routing
// const express = require('express')
// let  app = express()
// let port = 5000

// app.get('/',(req,res)=>{
// res.send('Hello Guys')
// })
// app.get('/:a',(req,res)=>{
//    let {a} = req.params
//    res.send(a)
// })

// app.listen(port,()=>{
// console.log('server is running in high Speed')
// })


//after doing this goto brower and write after   localhost:5000/dog cat but with the help of '/ '.

// app.get('/:r/:a',(req,res)=>{
//      let {r,a} = req.params
// console.log(req.params,"hilo")
//       res.send(r,a)
// })

// app.listen(port,()=>{
//    console.log('server is running in high Speed')
//    })
   


// query parameters //


// const express = require('express')
// let  app = express()
// let port = 5000

// app.get('/search',(req,res)=>{
//    let {firstName,lastName} = req.query
//     res.send(`${firstName}  ${lastName}`)
// })

// app.listen(port,()=>{
// console.log('first')
// })


///  ejs templating librery   ///

// app .set('view engine','ejs')
// app.get('/',(req,res)=>{
//    res.render('index')
// })

// app.listen(port,()=>{
// console.log('server is running : 5000')
// })


const express = require('express')
let  app = express()
let port = 5000
app.set()
app.get('/',(req,res)=>{
res.render('index')
})
app.listen(port,()=>{
   console.log('server is running : 5000')
   })
   

