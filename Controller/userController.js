import userModel from "../Model/userModel.js";

// 1. add user Router
export const addUser = async (req, res) => {
  try {
    const { name, email, district, state } = req.body;
    const newUser = new userModel({
      name,
      email,
      district,
      state,
    });
    await newUser.save();
    console.log(req.body);

    res.status(200).json({ message: "User Added Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// 2. get user Router
//     get all user
export const getAllUser = async (req, res) => {
  try {
    const AllUser = await userModel.find();
    res.status(200).json(AllUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// or get single user
export const getbyIdUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 3. update user Router
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.body;
    const updateduser = await userModel.findByIdAndUpdate(id, user, {
      new: true,
    });
    res.status(200).json(updateduser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// 4. delete user Router
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await userModel.findByIdAndDelete(id);
    res.status(200).json({ message: "user deleted succussfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
