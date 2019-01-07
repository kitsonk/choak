import { RouterMiddleware } from "../../../deps.ts";
import { RoomParams } from "../mod.ts";
import { state } from "../../mod.ts";
import { RoomMessage, RoomMessages } from "../../../responses.ts";

export interface MessageParams extends RoomParams {
  message_id: string;
}

export const getMessages: RouterMiddleware<RoomParams> = context => {
  const { room_id } = context.params;
  if (room_id in state.rooms) {
    const messages: RoomMessages = [];
    for (const [id, message] of Object.entries(state.rooms[room_id].messages)) {
      messages.push({
        id: parseInt(id),
        ...message
      });
    }
    context.response.body = messages;
  } else {
    context.throw(404, `Room "${room_id}" not found.`);
  }
};

export const getMessageById: RouterMiddleware<MessageParams> = context => {
  const { room_id, message_id } = context.params;
  if (room_id in state.rooms) {
    if (message_id in state.rooms[room_id].messages) {
      const message = state.rooms[room_id].messages[parseInt(message_id)];
      context.response.body = {
        id: parseInt(message_id),
        ...message
      } as RoomMessage;
    } else {
      context.throw(
        404,
        `Message "${message_id}" in room "${room_id}" not found.`
      );
    }
  } else {
    context.throw(404, `Room "${room_id}" not found.`);
  }
};
