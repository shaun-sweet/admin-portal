const Query = {
  dogs(parent, args, ctx, info) {
    return [{ name: 'snickers' }, { name: 'athena ' }];
  },
};

module.exports = Query;
