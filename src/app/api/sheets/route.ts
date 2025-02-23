import { google } from "googleapis";
import { JWT } from "google-auth-library";

export const revalidate = 0;

export async function GET() {
  try {
    const privateKey = (process.env.GOOGLE_PRIVATE_KEY || "").replace(
      /\\n/g,
      "\n"
    );

    const credentials = {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: privateKey,
    };

    const auth = new JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
      range: "entries",
    });

    return Response.json(response.data.values || []);
  } catch (error) {
    console.error("Sheets API Error:", error);
    return Response.json([], { status: 500 });
  }
}

export async function POST(request: Request) {
  const { realName, entryName, rep, generation, genre, instagram } =
    await request.json();

  const privateKey = (process.env.GOOGLE_PRIVATE_KEY || "").replace(
    /\\n/g,
    "\n"
  );

  const credentials = {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: privateKey,
  };

  const auth = new JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
    range: "entries",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[0, realName, entryName, rep, generation, genre, instagram]],
    },
  });

  return Response.json(response.data);
}
