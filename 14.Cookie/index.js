var findContentChildren = function (g, s) {
    if (s.length > g.length) {
      return g.length;
    }
    return g.length - s.length;
  };