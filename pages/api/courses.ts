// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import conn from "../../lib/db";

type Data = {
  data: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Handle POST
  if (req.method === "POST") {
    try {
      const query = "INSERT INTO courses (name, instructor) VALUES($1, $2);";
      const values = req.body.content;
      const result = await conn.query(query, values);
      console.log("Message:", result);
    } catch (error) {
      console.log(error);
    }
  }
}
