import express from 'express'

const app = express()
const port = 3000

let todoList = []

app.use(express.static('public'))
app.use(express.urlencoded({exnteded: true}))


app.get('/', (req, res) => {
    res.render('index.ejs', {todoList})
})

app.post('/list', (req, res) => {
    todoList.push(req.body.todoItem)
    res.redirect('/')
})

app.post('/delete', (req, res) => {
    let item = req.body.item
    todoList.splice(item, 1)
    res.redirect('/')
})

app.post('/update', (req, res) => {
    console.log(req.body)
    todoList[req.body.item] = req.body.todo
    res.redirect('/')
})

app.listen(port, () => {
    console.log(`Connected to ${port}`)
})