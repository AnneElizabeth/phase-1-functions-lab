function distanceFromHqInBlocks(blockNum) {  

    let blockDistance = blockNum - 42;

    if (blockDistance < 0) {
        return blockDistance * -1
    } else {
        return blockDistance;
    }
}

function distanceFromHqInFeet(feetDistance) {
    feetDistance = distanceFromHqInBlocks(feetDistance);
    return feetDistance * 264;
}

function distanceTravelledInFeet(startBlock, endBlock) {
    let blocksTravelled = startBlock - endBlock;

    let feetTravelled = blocksTravelled * 264;

    if (feetTravelled < 0) {
        return feetTravelled * -1
    } else {
        return feetTravelled;
    }
}

function calculatesFarePrice (startBlock, endBlock){
    
    let rideLength = distanceTravelledInFeet(startBlock, endBlock);
    
    
    if (rideLength > 2500) {
        return 'cannot travel that far';
    } else if (rideLength >= 2001 && rideLength <= 2499) { 
        return 25.00;
    } else if (rideLength >= 401 && rideLength <= 2000){
        return (rideLength - 400) * .02;
    } else if (rideLength <= 400) {
        return rideLength * 0;
    }

}

