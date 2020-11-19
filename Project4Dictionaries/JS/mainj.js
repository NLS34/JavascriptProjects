function my_Dictionary() { //initially creating the dictionary
    var Letter = { //filling the dictionary
        A:1,
        B:2,
        C:3,
        D:4,
    }
    delete Letter.B; //deleting a key from the dictionary
    document.getElementById("Dictionary").innerHTML = Letter.A; //expressing a value from our dictionary
}