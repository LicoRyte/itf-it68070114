const example_input = document.getElementById("example_input")
let operation = 1

let current_account = 0   // use let
let current_cash = 0      // use let

function add(num) {
    operation = operation + Number(num);
}

function log(account_amount, cash_amount) {
    const history = document.getElementById("historylog");
    history.value += operation + ", Current Account Balance: " + account_amount + ", Current Cash Balance: " + cash_amount + "\n";
    history.scrollTop = history.scrollHeight;
}

function errorlog() {
    const history = document.getElementById("historylog");
    history.value += "<----OPERATION ERROR, TRANSACTION DENIED---->" + "\n";
}


function change() {
    const account_setter = document.getElementById("account-setter");
    const cash_setter = document.getElementById("cash-setter");
    const acc_value = Number(account_setter.value);
    const cash_value = Number(cash_setter.value);
    
    current_account = acc_value;   // now allowed
    current_cash = cash_value;
    log(current_account, current_cash);
    add(1);

}

function banking() {
    const operation_selector = document.getElementById("operation");
    const selected_option = operation_selector.value;
    const money_box = document.getElementById("money")
    const money = Number(money_box.value)

    if (selected_option === "deposit") {
        if (money <= current_cash){
            current_account += money
            current_cash -= money
            log(current_account, current_cash)
        }
        else {
            errorlog();
        }
    }
    else {
        if (money <= current_account){
            current_account -= money
            current_cash += money
            log(current_account, current_cash)
        }
        else {
            errorlog();
        }

    }
    
    add(1)
}
