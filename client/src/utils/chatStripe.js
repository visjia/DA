import botIcon from "../assets/bot.svg";
import userIcon from "../assets/user.svg";
import copyIcon from "../assets/copy.svg";
import playIcon from "../assets/play.svg";

function chatStripe(isAi, value, uniqueId) {
  return `<Box class="wrapper ${isAi && "ai"}">
      <div class="chat">
        <div class="profile">
          <img src="${isAi ? botIcon : userIcon}" alt="${
    isAi ? "bot-icon" : "user-icon"
  }" />
        </div>
        <div class="message" id="${uniqueId}">${value}</div>
        ${
          isAi
            ? `<div class="copy-play"><img title="play" class="play" src="${playIcon}" /> <img title="copy" class="copy" src="${copyIcon}" /></div>`
            : ""
        }
      </div>
    </Box>`;
}
export default chatStripe;
