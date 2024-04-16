const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const mongoose = require('mongoose');
const uri = "mongodb+srv://bleronatmava12:iUlQeuONSrxb3Cvf@fullstackapp.ee05osq.mongodb.net/?" +
        "retryWrites=true&w=majority&appName=FullStackApp"
mongoose
    .connect(uri)
    .then(() => console.log('Connect to mongodb'))
    .catch(err => console.error('Could not connect to MongoDB', err))

    // const UserSchema = new mongoose.Schema({
    //     name: String,
    //     gender: String
    // });
    
    // const User = mongoose.model('User', UserSchema);
    // app.get('/api/test', async(req, res) => {
        //krijimi i userave te ri
    
    //     await User.findByIdAndDelete('660be69057c7d9adcaddf960');
    //     res.json('User deleted successfully!');
    // });
    
    
    
    // Routes
    // Me marr ni user t'ri
    // app.get('/api/users', async(req, res) => {
    //     const users = await User.find({});
    //     res.json(users);
    // });
    
    //Me shtu ni user t'ri
    // app.post('/api/user',async(req,res)=>{
    //     const newUser=new User  ({name: 'Altin', gender: 'm'});
    //     const savedUser=await newUser.save();
    //     res.json(savedUser);
    // })
  
    
    //Me bo update ni user
    // app.put('api/user/:id', async (req, res) => {
    //     const {id} = req.params;
    //     const updateUser = await User
    //     .findByIdAndUpdate(id, req.body, {new: true})     //ose const  id = req.params.id
    // })
    
    //Me fshi ni user
    // app.delete('api/users/:id', async (req, res) => {
    //     const {id} = req.params;
    //     await User.findByIdAndDelete(id);
    //     res.json({message: 'User deleted succesfully!'});
    // })
    
    // Listen for requests
    // app.listen(port, () => {
    //     console.log(`Server running on port ${port}`);
    // });
// krijimi i taskave 

const TaskSchema = new mongoose.Schema({
    name: String,
    description: String
});

const Task = mongoose.model('Task', TaskSchema);
 app.get('/api/testi1', async(req, res) => {
    //krijimi i userave te ri

    await Task.findByIdAndDelete('661d9465e4f84a550bfce358');
    res.json('User deleted successfully!');
});
//e kam fshi ni task ka mbet 1


// Routes
// Me marr ni user t'ri
app.get('/api/tasks', async(req, res) => {
    const tasks = await Task.find({});
    res.json(tasks);
});

//Me shtu ni user t'ri
app.post('/api/task',async(req,res)=>{
    const newTask=new Task  ({id:3,name: 'Task3', description: 'NodeJs'});
    const savedTask=await newTask.save();
    res.json(savedTask);
})

//Me bo update ni task
app.put('api/task/:id', async (req, res) => {
    const {id} = req.params;
    const updateTask = await Task
    .findByIdAndUpdate(id, req.body, {new: true}) 
        //ose const  id = req.params.id
})

//Me fshi ni task
app.delete('api/tasks/:id', async (req, res) => {
    const {id} = req.params;
    await User.findByIdAndDelete(id);
    res.json({message: 'User deleted succesfully!'});
})

// Listen for requests
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
// krijimi i taskave 



/*
npx create-react-app client
cd client
npm install axios
*/