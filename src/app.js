import express from "express"

const app = express()

//accept data that is sent via URL
app.use(express.urlencoded())

//server will accept json data
app.use(express.json())

app.use(express.static("public/"))

//POST --> json format
// {
//     "email": "andri@gmail.com",
//     "password": "*****"
// }

app.get("/", (req, res) => {
    res.json({
        name: "Andri",
        role: "Student"
    })
})

app.get("/login", (req, res) => {
    res.send("Enter your email & password to login!")
})

app.get("/purchase", (req, res) => {
    res.send("Purchase Page!")
})

export default app