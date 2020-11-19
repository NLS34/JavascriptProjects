function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 50) ? "You are too small":"You are big enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}