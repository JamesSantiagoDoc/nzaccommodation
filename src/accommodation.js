let accTypes = [
    {
        id: 1,
        name: "Hotel",
        numPerson: [1, 2],
        costPerNight: 157,
        minNight: 1,
        maxNight: 5,
        image: "hotel.jpg",
        reserve: "Reserve this hotel",
        info: "info for Hotel",
        mealPrice: 35
    },
    {
        id: 2,
        name: "Hostel",
        numPerson: [1],
        costPerNight: 30,
        minNight: 1,
        maxNight: 10,
        image: "hostel.jpg",
        reserve: "Reserve this hostel",
        mealPrice: 15
    },
    {
        id: 3,
        name: "Motel",
        numPerson: [2, 3, 4],
        costPerNight: 90,
        minNight: 3,
        maxNight: 10,
        image: "motel.jpg",
        reserve: "Reserve this motel",
        mealPrice: 25
    },
    {
        id: 4,
        name: "House",
        numPerson: [1, 2, 3, 4],
        costPerNight: 240,
        minNight: 2,
        maxNight: 15,
        image: "house.jpg",
        reserve: "Reserve this house",
        mealPrice: 20
    }
];

// let mealPrice = 15;

$(() => {

    let numPersonInput;
    let numNightsInput;

    $("input[name='numPerson']").click(function () {
        $("#accomodationOptions").html("");
        numPersonInput = this.value;
        showAccomodationOptions(accTypes, numPersonInput, numNightsInput);
    });

    $("#numNights").change(function () {
        $("#accomodationOptions").html("");
        numNightsInput = this.value;
        showAccomodationOptions(accTypes, numPersonInput, numNightsInput);

        // if (numPersonInput == accTypes[0].numPerson[0]) {
        //     console.log(accTypes[0]);
        // } 

        // if (numPersonInput == accTypes[1].numPerson[0]) {
        //     console.log(accTypes[1]);
        // } 

        $("input[name='accType']").click(function () {
            console.log('aaa');
            $("#info").modal({
                showClose: false
            });
            //     let accTypeId = +this.value - 1;
            //     console.log(accTypeId);
            //     $("#mealOptions").html("");
            //     let mealOptions = `
            // <label for="numMeal-1">Meal for $15</label>
            //     <select name ="numMeal"id="numMeal">
            //     <option value ="0">0</option>
            //     <option value ="1">0</option>
            //     <option value ="2">0</option>
            //     <option value ="3">0</option>
            //     <option value ="4">0</option>
            // <select>

            // `;
            //     $("#mealOptions").append(mealOptions);
        });
    });

    // $("#inputbtn").click(function () {
    //     let var1 = $("#input").val();
    //     console.log(var1);
    // });

    // $("#numMeal").change(function () {

    //     mealQty = +this.value;
    //     console.log("Number of Person: " + numPersonInput);
    //     console.log("Number of nights: " + numNightsInput);
    //     console.log("Accomodation: " + accTypes[accTypeID].name);
    //     console.log("cost/Night: " + accTypes[accTypeID].costPerNight);
    //     console.log("Meal Price: " + mealPrice);
    //     console.log("Meal Quantity: " + mealQty);
    //     console.log("============================================================");
    //     console.log("Accomodation Cost: $" + accTypes[accTypeID].costPerNight);
    //     let totalMeal = mealPrice * mealQty;
    //     console.log(

    //         "Meal cost: $" + mealPrice + "x" + mealQty + "= $" + totalMeal

    //     );
    //     console.log("================================================")

    //     let total = totalMeal + accTypes[accTypeId].costPerNight;
    //     console.log("Total to pay: $" + total);
    // });
}); // ready

function showAccomodationOptions(accTypes, numPersonInput, numNightsInput) {
    $("#accomdodationOptions").html("");

    for (let i = 0; i < accTypes.length; i++) {
        if (accTypes[i].numPerson.includes(+numPersonInput) &&
            numNightsInput >= accTypes[i].minNight &&
            numNightsInput <= accTypes[i].maxNight
        ) {
            // console.log(accTypes[i].name);

            let accomodation = `
        <div class="card">
            <label for="accType-${accTypes[i].id}">${accTypes[i].reserve}</label>
            <input type="radio" name="accType" id="accType-${accTypes[i].id}" value="1-${accTypes[i].id}">
            <h3>${accTypes[i].name}</h3>
            <h4>$${accTypes[i].costPerNight} per night</4><br/>  
            <img src="./src/images/${accTypes[i].image}" width="400" height="320" class="card-img-top" alt="Sample Title" /> 
        </div>  
   
        <div id="info" class="modal">
            <a href="#" rel="modal:close">Close</a>
            <label for="tentacles">Number of Meals (1-10):</label>

            <input type="number" id="tentacles" name="tentacles" 
            min="0" max="10">

            <input type="button" name="calculate" class="modalbtn" value="submit" id="${accTypes[i].id}">
            
            <div> Accomodation Type: ${accTypes[i].name}</div>
                    <hr />
            <div id="calcwrap" class="hidden">
                <div >Cost /night: $${accTypes[i].costPerNight} per night</div>
                <div>Meal price: $${accTypes[i].mealPrice}</div>
                    <hr />
                <div>Meal quantity: <span class="mealquantity"></span></div>
                <div>Meal Cost: ${accTypes[i].mealPrice} x <span class="mealquantity"></span></div>
                <div>Total meal price: $<span class="totalmealprice"></span></div>
                <div>Total Price:  ${accTypes[i].costPerNight} + <span class="totalmealprice"></span> = $<span class="totalprice"></span> </div>
            </div>
        </div>
        `
            $("#accomodationOptions").append(accomodation);
        }
    }

    var numFieldVal = document.getElementById("tentacles"); // creates variable from id tentacles 

    $("input[name='calculate']").click(function () {

        let accTypeID = +this.id - 1; // gets the id to match the accom id
      
        let mealQty = +numFieldVal.value;  // gets id tentacles value number
        
        let totalMeal = +accTypes[accTypeID].mealPrice * mealQty; // total meal cost 

        let total = +totalMeal + +accTypes[accTypeID].costPerNight; // total cost for all 
      
        // console.log("Total ===" + +total);

        $(".totalmealprice").html(totalMeal);  //inserts the number value into the html @ class "totalmealprice"
        $(".mealquantity").html(mealQty); // inserts the number value into the html @ class "mealquantity"
        $(".totalprice").html(total); // inserts the number value into the html @ class "totalprice" 
    });
};

