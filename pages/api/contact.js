import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    console.log("Handing API api/contact")
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({
        message: "Invalid input.",
      });
      return;
    }

    // Store it in a database
    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://test:123@udemy-next.m9tdv89.mongodb.net/?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database" });
      return;
    }

    const db = client.db("my-site");
    
    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({message: 'Storing message failed'});
      return;
    }

    client.close();

    res.status(201).json({
      message: "Successfully stored message!",
      message: newMessage,
    });
  }
}

export default handler;