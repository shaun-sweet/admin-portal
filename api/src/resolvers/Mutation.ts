import { Context } from '../utils';

export const Mutation = {
  async createUser(parent, args, ctx: Context, info) {
    const user = await ctx.db.mutation.createUser(
      {
        data: {
          ...args,
        },
      },
      info,
    );
    return user;
  },
};
