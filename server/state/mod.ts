interface Room {
  name: string;
  messages: {
    [id: number]: RoomMessage;
  };
}

interface RoomMessage {
  body: string;
  user_id: string;
}

export interface State {
  rooms: {
    [id: string]: Room;
  };
  users: {
    [id: string]: User;
  };
}

export interface User {}

export const state: State = {
  rooms: {
    deno: {
      name: "deno",
      messages: {
        1: {
          body: "Hello World!",
          user_id: "kitsonk"
        }
      }
    },
    oak: {
      name: "oak",
      messages: {}
    }
  },
  users: {
    kitsonk: {}
  }
};
