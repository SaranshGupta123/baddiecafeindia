import express from "express";
import cors from "cors";
import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
});

const TOKEN = process.env.DISCORD_TOKEN || "YOUR_BOT_TOKEN_HERE";
const GUILD_ID = "1499437545363083499";

const ROLE_MAPPING = {
  ROLE_ID_FOR_OWNER: "1499641885093003324",
  ROLE_ID_FOR_COOWNER: "1519611401264697514",
  ROLE_ID_FOR_CREATIVE: "1521416374071590942",
  ROLE_ID_FOR_GAMING_MOD: "1519760285290725578",
  ROLE_ID_FOR_MINECRAFT: "1521808153354698812",
  ROLE_ID_FOR_ART_MOD: "1519925736616493086",
};

client.once("clientReady", () => {
  console.log(`🤖 Staff API Bot logged in as ${client.user.tag}`);
});

client.login(TOKEN);

app.get("/api/staff", async (req, res) => {
  try {
    const guild = await client.guilds.fetch(GUILD_ID);

    // Instead of fetching all members globally (which triggers rate limits),
    // look through the members currently in cache.
    const staffList = [];

    guild.members.cache.forEach((member) => {
      member.roles.cache.forEach((role) => {
        if (ROLE_MAPPING[role.id]) {
          staffList.push({
            id: member.id,
            name: member.displayName,
            role: ROLE_MAPPING[role.id],
            avatar: member.user.displayAvatarURL({ dynamic: true, size: 512 }),
            desc: "Active server staff member maintaining the vibes.",
          });
        }
      });
    });

    const uniqueStaff = Array.from(new Set(staffList.map((s) => s.id))).map(
      (id) => staffList.find((s) => s.id === id),
    );

    res.json(uniqueStaff);
  } catch (error) {
    console.error("Error fetching staff from Discord:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch staff data from Discord API" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Staff backend running on http://localhost:${PORT}`);
});
