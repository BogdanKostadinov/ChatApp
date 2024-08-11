export enum STATUSES {
  AWAY = 'away',
  BUSY = 'busy',
  ONLINE = 'online',
  OFFLINE = 'offline',
}

export class User {
  ws: any;
  id = Math.random();
  constructor(
    public name: string = '',
    public status: STATUSES = STATUSES.OFFLINE,
    public img: string = '',
  ) {}
}
