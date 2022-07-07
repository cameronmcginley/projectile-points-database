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
      // Desired SQL, takes 1st and 2nd vals from 'values' list defined below
      const query = "INSERT INTO courses (name, instructor) VALUES($1, $2);";
      // List of values
      const values = req.body.content;
      // Get and display resulting message
      const result = await conn.query(query, values);
      console.log("ttt", result);
    } catch (error) {
      console.log(error);
    }
  }
}
