function numbersToStars(num, faStar, faStarHalf) {
    let arr = Array(Math.floor(num)).fill(faStar)
    if (String(num).length > 2) {
        let numAfterDot = Number(String(num).split(".")[1].substring(0, 1))
        if (numAfterDot > 0 && numAfterDot < 4) {
            return arr
        }
        else if ((numAfterDot >= 4 && numAfterDot <= 7)) {
            arr.push(faStarHalf)
        }
        else if ((numAfterDot > 7 && numAfterDot <= 9)) {
            arr.push(faStar)
        }
        else {
            return arr
        }
        return arr
    }
    else {
        return arr
    }

}
export default numbersToStars;