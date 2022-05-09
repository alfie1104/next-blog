import { MongoClient } from "mongodb";

async function handler(req, res) {
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

    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://nextjs:test@cluster0.xp3cg.mongodb.net/my-site?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }

    const db = client.db();

    // Store data in a database
    const newMessage = {
      email,
      name,
      message,
    };

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "Successfully stored message!", data: newMessage });
  } else {
  }
}

export default handler;
