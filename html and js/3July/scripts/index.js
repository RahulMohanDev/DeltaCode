try {
    // const obj = {};
    // console.log(obj.test,'this is undefined');
    // js throwing error
    // obj.test.name;
    const bankAccount = {};
    bankAccount.amount = 1000;
    bankAccount.accountUser="Eshita"

    const newBalance = bankAccount.amount - 5000;

    if(newBalance<0) {
        throw new Error("Not enough balance");
    }

    bankAccount.amount = newBalance;
    console.log("new balance is "+ newBalance);

} catch (error) {
    console.dir(error.stack);
    alert(error.message);
}

// {
//     message: "Not enough balance",
//     stack : ""
// }


// Class newError() {
//     String message,
//     String stack,
//     newError(message) {
//         this.message=message;
//     }
// }