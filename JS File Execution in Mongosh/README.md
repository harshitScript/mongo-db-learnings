## JS FILE EXECUTION IN MONGOSH
The scripts written in .js files can be executed in the mongosh shell to
perform operation that is not directly possible with mongosh.

### How to run ?
1. Connect to your mongodb server 
    `mongosh <connection-string>`
2. Load the js file to execute
    `load(<js-file-path>)`