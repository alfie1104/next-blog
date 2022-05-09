function handler(req, res) {
  if (req.method === "POST") {
    const {
      body: { email, name, message },
    } = req;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    // Store data in a database
    const newMessage = {
      email,
      name,
      message,
    };

    console.log(newMessage);

    res
      .status(201)
      .json({ message: "Successfully stored message!", data: newMessage });
  } else {
  }
}

export default handler;
