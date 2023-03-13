const coverOneLitter = 12;
function calculateMain() {
    const wallHeight = document.getElementById('height').value;
    const wallWidth = document.getElementById('width').value;
    const wallHands = document.getElementById('hands').value;
    
    const wallArea = calculateAreaRectangle(wallWidth, wallHeight);
    const wallLitters = calculateLittersWall(wallArea, coverOneLitter, wallHands);
    showResults(wallLitters);
    return
}
function calculateAreaRectangle(width, height) {
    return (width * height)
}
function calculateLittersWall(area, coverOneLitter, hands) {
    return ((area / coverOneLitter) * hands)
}
function showResults(results) {
    document.getElementById('paintNecessary').innerHTML = `We need ${results} litters`
}
