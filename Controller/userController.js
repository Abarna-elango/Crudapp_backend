// 1. add user Router 
export const addUser = (req,res)=>{
    res.status(200).json({message: "add user Router"});
}
// 2. get user Router 
//     get all user 
export const getAllUser = (req,res)=>{
    res.status(200).json({message: "getAll user Router"});
}

// or get single user
export const getbyIdUser = (req,res)=>{
    res.status(200).json({message: "getbyId user Router"});
}

// 3. update user Router 

export const updateUser = (req,res)=>{
    res.status(200).json({message: "update user Router"});
}
// 4. delete user Router

export const deleteUser = (req,res)=>{
    res.status(200).json({message: "delete user Router"});
}