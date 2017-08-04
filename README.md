# stockSearch

Stock Search is a web application built using NodeJS, ExpressJS, Mongoose, and my first using EmberJS.

This stock application allows the user to search for a stock symbol and retrieves current information for that stock.
Information is retrieved from Yahoo's Finance API which nol loger supports Historical data.
Note: while working on this project EmberJS' model wasn't cooperating and thus had to create some dummy data that is computed for each specific stock.

1. To run you need to install mongo database.

2. Once you have mongo running you can download and click on the dbSetup executable file which will load all of the dataset into the database. After that run the database by using the "mongod" command.

3. You will also need to start the NodeJS server by manuvering to the emberServer folder within your terminal, there you can run the command "node server" to start our backend server which will act as a restful API server to retrieve our queries.

4. Finally, you need to maneuver into the twStockApp folder which is where our ember files are and within your terminal run the command "ember serve" to start the ember application.

6. **Please run in Google Chrome as there is a bug I am trying to fix in both Safari and Firefox.**
