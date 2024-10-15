document.addEventListener("DOMContentLoaded", function () {
    // Fetch account balances from the backend
    fetch("/balances")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            // Extract accounts from the data
            const accounts = data.accounts;

            // Variables to track if each account type is found
            let checkingAccountFound = false;
            let investmentAccountFound = false;
            let savingsAccountFound = false;

            // Populate the account information
            if (accounts.length > 0) {
                accounts.forEach(account => {
                    // Checking Account
                    if (account.accountName === "Checking Account") {
                        checkingAccountFound = true;  // Mark that Checking Account exists

                        // If balance is 0 or not provided, show an alert
                        if (!account.balance || account.balance === 0 || account.balance == "") {
                            document.querySelector(".chequing-account .text-wrapper-8").textContent = account.accountName;
                            document.querySelector(".chequing-account .text-wrapper-11").textContent = account.AccountNumber;
                            document.querySelector(".chequing-account .text-wrapper-13").textContent = `(${account.AmountInWords})`;
                            alert("No balance available for Checking Account!");
                        } else {
                            document.querySelector(".chequing-account .text-wrapper-8").textContent = account.accountName;
                            document.querySelector(".chequing-account .text-wrapper-12").textContent = `$${account.balance.toLocaleString()} ${account.currency}`;
                            document.querySelector(".chequing-account .text-wrapper-11").textContent = account.AccountNumber;
                            document.querySelector(".chequing-account .text-wrapper-13").textContent = `(${account.AmountInWords})`;
                        }
                    }

                    // Investment Account
                    else if (account.accountName === "Investment Account") {
                        investmentAccountFound = true;  // Mark that Investment Account exists

                        // If balance is 0 or not provided, show an alert
                        if (!account.balance || account.balance === 0 || account.balance == "") {
                            document.querySelector(".investment-account .text-wrapper-15").textContent = account.accountName;
                            document.querySelector(".investment-account .text-wrapper-16").textContent = account.AccountNumber;
                            document.querySelector(".investment-account .text-wrapper-17").textContent = `(${account.AmountInWords})`;
                            alert("No balance available for Investment Account!");
                        } else {
                            document.querySelector(".investment-account .text-wrapper-15").textContent = account.accountName;
                            document.querySelector(".investment-account .text-wrapper-14").textContent = `$${account.balance.toLocaleString()} ${account.currency}`;
                            document.querySelector(".investment-account .text-wrapper-16").textContent = account.AccountNumber;
                            document.querySelector(".investment-account .text-wrapper-17").textContent = `(${account.AmountInWords})`;
                        }
                    }

                    // Savings Account
                    else if (account.accountName === "Savings Account") {
                        savingsAccountFound = true;  // Mark that Savings Account exists

                        // If balance is 0 or not provided, show an alert
                        if (!account.balance || account.balance === 0 || account.balance == "") {
                            document.querySelector(".saving-account .text-wrapper-22").textContent = account.accountName;
                            document.querySelector(".saving-account .text-wrapper-20").textContent = account.AccountNumber;
                            document.querySelector(".saving-account .text-wrapper-23").textContent = `(${account.AmountInWords})`;
                            alert("No balance available for Savings Account!");
                        } else {
                            document.querySelector(".saving-account .text-wrapper-22").textContent = account.accountName;
                            document.querySelector(".saving-account .text-wrapper-19").textContent = `$${account.balance.toLocaleString()} ${account.currency}`;
                            document.querySelector(".saving-account .text-wrapper-20").textContent = account.AccountNumber;
                            document.querySelector(".saving-account .text-wrapper-23").textContent = `(${account.AmountInWords})`;
                        }
                    }
                });

                // Alerts if any account type is not found
                if (!checkingAccountFound) {
                    alert("Checking Account not found in the data.");
                }
                if (!investmentAccountFound) {
                    alert("Investment Account not found in the data.");
                }
                if (!savingsAccountFound) {
                    alert("Savings Account not found in the data.");
                }
            }
        })
        .catch(function (error) {
            console.error("Error fetching balances:", error);
            document.getElementById("balance").innerHTML = "<p>Failed to load account balances.</p>";
        });
});
document.addEventListener("DOMContentLoaded", function () {
    // Fetch account balances from the backend
    fetch("/transaction")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(function (data) {
            console.log(data.transactions);  // Ensure you log the transactions array

            // Assuming 'data.transactions' is an array of transactions
            const container = document.querySelector('.overlap-7'); // Select the container to append data

            // Clear the container before appending new data
            container.innerHTML = '';

            // Loop through the transactions array and create table rows dynamically
            data.transactions.forEach(function (transaction) {
                let rectangleClass = ''; // Class to handle different rectangle styles
                let textWrapper = '';

                // Determine the rectangle class based on the transaction status
                if (transaction.status === 'Completed') {
                    rectangleClass = 'rectangle-9'; // For Completed status
                    textWrapper = 'text-wrapper-42';
                } else if (transaction.status === 'Processing') {
                    rectangleClass = 'rectangle-8'; // For Processing status
                    textWrapper = 'text-wrapper-50';
                } else if (transaction.status === 'Failed') {
                    rectangleClass = 'rectangle-5'; // For Failed status
                    textWrapper = 'text-wrapper-37';
                }
                // Create the transaction row using the existing structure
                const transactionRow = `
                <div class="overlap-group-4">
                    <img class="rectangle-4" src="img/rectangle-7.svg" />
                    <div class="text-wrapper-31">${transaction.date}</div>
                    <div class="text-wrapper-33">${transaction.refNo}</div>
                    <div class="text-wrapper-34">${transaction.description}</div>
                    <div class="text-wrapper-32">$${transaction.amount}</div>
                    <div class="text-wrapper-49">${transaction.account}</div>
                    <div class="${rectangleClass}"></div>
                    <div class="${textWrapper}">${transaction.status}</div>
                </div>`;

                // Append the new row to the container
                container.insertAdjacentHTML('beforeend', transactionRow);
            });
        })
        .catch(function (error) {
            console.error("Error fetching balances:", error);
            document.getElementById("balance").innerHTML = "<p>Failed to load account balances.</p>";
        });
});

