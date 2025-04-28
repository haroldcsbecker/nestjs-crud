import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findAll() {
    return 'all';
  }

  findOne(id: number) {
    return id;
  }

  create(user: { email: string }) {
    return user;
  }

  update(id: number, userUpdated: { email?: string }) {
    return { id, ...userUpdated };
  }

  delete(id: number) {
    return id;
  }
}
