import { asycHandler } from "../utils/asyncHandler.js";

const registerUser = asycHandler(async (req, res) => {
  res.status(200).json({ message: "Mytube" });
});

export { registerUser };
