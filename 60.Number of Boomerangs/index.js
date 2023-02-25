function distance(p1, p2) {
    return Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2);
  }
  
  function numberOfBoomerangs(points) {
    let count = 0;
    for (let i = 0; i < points.length; i++) {
      const distMap = {};
      for (let j = 0; j < points.length; j++) {
        if (i !== j) {
          const d = distance(points[i], points[j]);
          distMap[d] = (distMap[d] || 0) + 1;
        }
      }
      for (const k of Object.values(distMap)) {
        count += k * (k - 1);
      }
    }
    return count;
  }
  