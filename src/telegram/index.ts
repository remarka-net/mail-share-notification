import Telegraf from "telegraf";
import { error } from "@service/logging";
import session from "telegraf/session";
import startCb from "@commands/start";
import connectGmailCb from "@commands/connectGmail";
import setChatsId from "@commands/setChatsId";
import getId from "@commands/getId";
import help from "@commands/help";
import deleteTokenCb from "@commands/deleteToken";
import { stage as authGmailStage } from "@commands/connectGmail";

export const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use(session());
bot.use(authGmailStage.middleware());
bot.start(startCb);
bot.command("connect_gmail", connectGmailCb);
bot.command("set_chats", setChatsId);
bot.command("get_id", getId);
bot.command("delete_token", deleteTokenCb);
bot.help(help);

bot.catch((err: Error) => error(err));
