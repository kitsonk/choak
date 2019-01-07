import { RouterMiddleware, RouteParams } from "../../deps.ts";
import { state } from "../mod.ts";
import { Room, Rooms } from "../../responses.ts";

export interface RoomParams extends RouteParams {
  room_id: string;
}

export const getRooms: RouterMiddleware = ({ response }) => {
  const rooms: Rooms = [];
  for (const [id, { name }] of Object.entries(state.rooms)) {
    rooms.push({ id, name });
  }
  response.body = rooms;
};

export const getRoomById: RouterMiddleware<RoomParams> = context => {
  const { room_id } = context.params;
  if (room_id in state.rooms) {
    context.response.body = {
      id: room_id,
      name: state.rooms[room_id].name
    } as Room;
  } else {
    context.throw(404, `Room "${room_id}" not found.`);
  }
};
