
/**
 * Question: Given a number print out two or more consecutive prime numbers
 * which makes up the number.
 * Example: 15 will have 3 
 */

function consecutive(num) {
    let count = 0, devidend = num, devisor = 1;
    while (devisor <= devidend) {
        if (devidend % devisor == 0) count++;
        devidend = devidend - devisor;
        devisor++;
    }
    return count-1;
}
