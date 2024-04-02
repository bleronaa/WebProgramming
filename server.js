const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const mongoose = require('mongoose');
const uri = "mongodb+srv://bleronatmava12:Re0kljNaNcvWwUJC@fullstackapp.ee05osq.mongodb.net/?" +
        "retryWrites=true&w=majority&appName=FullStackApp"
mongoose
    .connect(uri)
    .then(() => console.log('Connect to mongodb'))
    .catch(err => console.error('Could not connect to MongoDB', err))

    const UserSchema = new mongoose.Schema({name: String, gender: String})
const User = mongoose.model('User', UserSchema);

app.get('/api/test', async(req, res) => {
    //krijimi i userave te ri

    await User.findByIdAndDelete('660bf6b8c58943c29c68701c')

    res.json("users deleted successfully");

  


})
// Routes
app.get('/api/users', async(req, res) => {
    const users = await User.find({});
    res.json(users);
});


app.post('/api/user', async(req, res) => {
    const newUSer = new User(req.body);
    const savedUser = await newUSer.save();
    res.json(savedUser);
})


app.put('/api/user',async(req,res)=>{
    const {id}=req.params;
    const updateUser=await User 
    .findByIdAndUpdate(id,req,body, {new:true})
})


app.delete('/api/user',async(req,res)=>{
    const {id}=req.params;
    const updateUser=await User 
    .findByIdAndDelete(id);
    res.json({message:"User delete successfully"})
})



app.listen(port, () => {
    console.log(`Server running on port ${port}`);

})

/*
npx create-react-app client
cd client
npm install axios
*/