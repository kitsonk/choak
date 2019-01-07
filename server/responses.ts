export interface Room {
  id: string;
  name: string;
}

export type Rooms = Room[];

export interface RoomMessage {
  id: number;
  body: string;
}

export type RoomMessages = RoomMessage[];
