import { Context } from '../utils';

export const Query = {
  async users(parent, args, ctx: Context, info) {
    const users = await ctx.db.query.users({});
    return users;
  },
};
