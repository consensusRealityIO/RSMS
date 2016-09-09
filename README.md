# Real Simple Merchant System (RSMS)

##Premis: Merchants should be able to accept payment for their product or service from anyone at nearly zero cost using open source software and cryptocurrency. 

* The Real Simple Merchant System (RSMS) is a simple web based mechanism to help merchants easily accept cryptocurrency payments and review their transactions. 

* The system is designed with no reliance on proprietary centralized software services. 

* All code is free and open source and all runtime dependencies will have multiple implementations and redundant delivery options so that there is no single source of failure.

##User Facing Components

1. Data Entry Screen - This screen is the first to be seen and displays the Merchant name, currency choice (USD, IDR, EUR etc.), displays price data entry box, displays PAY button, and displays Transaction History Link. 

2. Payment Screen - This screen is presented to the user after pressing the PAY button. It displays a QR code which encodes a Bitcoin URI, displays the current bitcoin price, displays pricing source (i.e. Bitcoinaverage.com), displays the amount of Bitcoin requested for payment, displays the merchant being paid, displays a payment countdown timer, displays Transaction History Link. This screen also displays a payment acknowledgement when payment is received with QR code of transaction ID.  

3. Transaction History Screen - This screen requires login. This screen is presented when user chooses the Transaction History Link. This page lists merchant transactions and displays payment status per tranaction. Also displayed are meta data about each transaction. Displays price at time of transaction. Displays pricing source used.