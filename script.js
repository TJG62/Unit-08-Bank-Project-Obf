var deposit;
var name;
var usernames = [];
var moneys = [];
var totalDeposit;
$(".newDeposit").click(function() {
    totalDeposit = 0;
    
    deposit = $(".accountDeposit").val();
    name = $(".accountName").val();
    $(".ledger").append("<p>" + name + "</p><p class='ledgerBorder'>$" + deposit + "</p>");
    
    var amount = (parseInt(deposit));
    console.log(amount);
    moneys.push(amount);
    usernames.push(name);
    console.log(usernames);
   
    moneys.forEach(function(Amount) {
        totalDeposit = totalDeposit + Amount;
         if( Number.isNaN(totalDeposit)) {
    totalDeposit=0;
}
    $(".number").text("Number of Transactions "+ usernames.length + "");
    $(".total").text(" Total Amount Deposited: " + totalDeposit );
    console.log(totalDeposit);
    
    
    });
});
$(".update").click(function() {
    alert(usernames[usernames.length - 1] + " Deposited $" + moneys[moneys.length - 1]);
    
    
});
    
    
    
    
    
    
    
    
    