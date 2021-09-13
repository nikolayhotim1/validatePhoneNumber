'usestrict';
// option of solution #1
function validate1(phoneNumber) {
    if (phoneNumber.length !== 8) {
        return false;
    }

    for (let i = 0; i < phoneNumber.length; i++) {
        if (i === 3) {
            if (phoneNumber.charAt(i) !== '-') {
                return false;
            }
        } else if (isNaN(phoneNumber.charAt(i))) {
            return false;
        }
    }

    return true;
}

// option of solution #2
function validate2(phoneNumber) {
    if (phoneNumber.length !== 8) {
        return false;
    }

    let first = phoneNumber.substring(0, 3);
    let second = phoneNumber.substring(4);

    if (phoneNumber.charAt(3) !== '-' || isNaN(first) || isNaN(second)) {
        return false;
    }

    return true;
}

// option of solution #3
function validate3(phoneNumber) {
    if (phoneNumber.length > 8 ||
        phoneNumber.length < 7) {
        return false;
    }

    for (let i = 0; i < phoneNumber.length; i++) {
        if (i === 3) {
            if (phoneNumber.length === 8 &&
                phoneNumber.charAt(i) !== '-') {
                return false;
            } else if (phoneNumber.length === 7 &&
                isNaN(phoneNumber.charAt(i))) {
                return false;
            }
        } else if (isNaN(phoneNumber.charAt(i))) {
            return false;
        }
    }

    return true;
}

// option of solution #4
function validate4(phoneNumber) {
    if (phoneNumber.length > 8 ||
        phoneNumber.length < 7) {
        return false;
    }

    let first = phoneNumber.substring(0, 3);
    let second = phoneNumber.substring(phoneNumber.length - 4);

    if (isNaN(first) || isNaN(second)) {
        return false;
    }

    if (phoneNumber.length === 8) {
        return (phoneNumber.charAt(3) === '-');
    }

    return true;
}

// option of solution #5
function validate5(phoneNumber) {
    if (phoneNumber.length > 8 ||
        phoneNumber.length < 7) {
        return false;
    }

    else if (phoneNumber.length === 8) {
        if (phoneNumber.charAt(3) !== '-') {
            return false;
        }

        let numbers = phoneNumber.split('-');

        if (isNaN(numbers[0]) || numbers[0] === '   ' || isNaN(numbers[1] || numbers[1] === '    ')) {
            return false;
        }

    } else {
        if (phoneNumber.charAt(3) === '-') {
            return false;
        }

        let first = phoneNumber.substring(0, 3);
        let second = phoneNumber.substring(phoneNumber.length - 4);

        if (isNaN(first) || first === '   ' || isNaN(second) || second === '    ') {
            return false;
        }
    }

    return true;
}

// option of solution #6
function validate6(phoneNumber) {
    return phoneNumber.match(/^\d{3}-?\d{4}$/);
}

console.log(validate5('1111111'));
