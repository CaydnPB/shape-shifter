/**
 * Find the area of a rectangle given the four corners.
 * The base of the rectangle is assumed to be horizontal.
 * Note: The corners can be given in any order.
 * @param {{ x: number, y: number }[]} points - an array of 4 points, e.g. { x: 3, y: 5 }
 * @return {number} the area
*/

function rectangleAreaFromCoords (points) {
  points.sort(function(a, b) {
    return a.x - b.x;
  });
  const width = points[3].x - points[0].x;
  
  points.sort(function(a, b) {
    return a.x - b.x;
  });
  const height = points[3].y - points[0].y;

  return width * height;
}

module.exports = rectangleAreaFromCoords
