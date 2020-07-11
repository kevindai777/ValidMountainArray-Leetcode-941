//Objective is to see whether a 1D array contains a mountain peak.

let A = [0,2,1]


//O(n) solution that goes all the way up the mountain, then all the way down.

let i = 0
    
//Go all the way up the increasing slope
while ((i < A.length - 1) && (A[i] < A[i + 1])) {
    i++
}

//Make sure the peak isn't at the beginning or end
if (i == 0 || i == A.length - 1) {
    return false
}

//Go all the way down the decreasing slope
while ((i < A.length - 1) && (A[i] > A[i + 1])) {
    i++
}

return i == A.length - 1