function distanceFromHqInBlocks (thisBLOCK){

    if (thisBLOCK >= 42){
        return (thisBLOCK - 42);
    }
    else (thisBLOCK <= 42);
        return (42 - thisBLOCK);
}        

function distanceFromHqInFeet (fEEt) {

    if (fEEt >= 42){
        return ((fEEt - 42) * 264);
    }
    else (fEEt <= 42);
        return ((42 - fEEt) * 264);

}

function distanceTravelledInFeet (begin, end){

    if (begin >= end){
        return ((begin - end) * 264);
    }
    else (begin <= end);
        return ((end - begin) * 264);

}

function calculatesFarePrice (start, destination) {

    let feetblock = 264;

    let distance = Math.abs ((destination - start) * 264);

    if (distance <= 400){
        return 0;
    }
    else if (distance <= 2000){ 
        return ((distance -400) * 0.02);
    }
    else if (distance >= 2000 && distance <=2500){
        return 25;

    }else {
        return 'cannot travel that far';
    }

}