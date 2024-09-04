
// ### Simple Guide for Running the Project and Creating Multiple Items

// #### Step 1: Set Up the Project

// 1. Clone the Repository: Download the project files to your local machine.
// 2. Install Dependencies: Use npm to install the required packages.


// #### Step 2: Start the Server

// 1. Run the Project: Start the Node.js server to ensure it’s working correctly.
// 2. Verify the Server: Check if the server is running by accessing the base URL in your browser or using a tool like Postman.

// #### Step 3: Populate the Database with Mock Data

// 1. Use the Populate Endpoint: Send a POST request to the `/api/items/populate` endpoint to automatically add 50 items to the database.
// 2. Verify Data Addition: Use a GET request to check that the items have been successfully added to the database.

// #### Step 4: Begin Working on the Assigned Tasks

// Once the server is running and the database is populated with data, you can start implementing the tasks, such as adding pagination and creating an API to delete multiple items.


// Implementation Guide 

// Here's a overview of how the you might implement the tasks:

// 1. Pagination Implementation:
//    - Modify the `getItems` function in the `itemController.js` to accept `page` and `limit` query parameters.
//    - Calculate the skip value based on the page number and limit.
//    - Modify the database query to apply `limit` and `skip`.

// 2. Multiple Delete API Implementation:
//    - Add a new route in `itemRoutes.js` for deleting multiple items.
//    - Implement the controller function to accept an array of IDs and use the `$in` operator to delete all items matching those IDs.





