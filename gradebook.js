<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name's Gradebook</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f4f9;
        }
        table {
            width: 80%;
            margin: 20px auto;
            border-collapse: collapse;
        }
        th, td {
            padding: 10px;
            text-align: center;
            border: 1px solid #ccc;
        }
        th {
            background-color: #4CAF50;
            color: white;
        }
        td {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h1>Gradebook</h1>
    <table id="gradebookTable">
        <thead>
            <tr>
                <th>Student Name</th>
                <th>Assignment 1</th>
                <th>Assignment 2</th>
                <th>Assignment 3</th>
                <th>Assignment 4</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    <script src="gradebook.js"></script>
</body>
</html>
console.log("Gradebook script loaded");

function addStudentRow(studentName, assignment1, assignment2, assignment3, assignment4) {
    console.log(`Adding student: ${studentName}`);
}

addStudentRow("John Doe", 90, 85, 88, 92);
