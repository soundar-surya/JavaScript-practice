//Module pattern

var deepJS = new defineWorkshop();

deepJS.addStudent(313, "Frank", true);
deepJS.addStudent(410, "Suzy", true);
deepJS.addStudent(709, "Brian", false);
deepJS.addStudent(105, "Henry", false);
deepJS.addStudent(502, "Mary", true);
deepJS.addStudent(664, "Bob", false);
deepJS.addStudent(250, "Peter", true);
deepJS.addStudent(375, "Sarah", true);
deepJS.addStudent(867, "Greg", false);

deepJS.enrollStudent(410);
deepJS.enrollStudent(105);
deepJS.enrollStudent(664);
deepJS.enrollStudent(375);

deepJS.printCurrentEnrollment();
deepJS.enrollPaidStudents();
deepJS.remindUnpaidStudents();

//********************************** 

function defineWorkshop(){

    var currentEnrollment = [];
    var studentRecords = [];

    return {
        addStudent,
        enrollStudent,
        printCurrentEnrollment,
        enrollPaidStudents,
        remindUnpaidStudents
    };

    //*************************
   
    function addStudent(id, name, paid){
        studentRecords.push({id, name, paid});
    }

    function enrollStudent(id){
        currentEnrollment.push(id);
    }

    function printCurrentEnrollment(){
        printRecords(currentEnrollment);
        console.log("----");
    }

    function enrollPaidStudents(){
        currentEnrollment = paidStudentsToEnroll();
        printRecords(currentEnrollment);
        console.log("----");
    }

    function remindUnpaidStudents(){
        remindUnpaid(currentEnrollment);
    }

    function getStudentFromId(studentId) {
        return studentRecords.find(matchId);
    
        function matchId(record) {
            return (record.id == studentId);
        }
    }
    
    function printRecords(recordIds) {
        var records = recordIds.map(getStudentFromId);
    
        records.sort(sortByNameAsc);
    
        records.forEach(printRecord);
    }
    
    function sortByNameAsc(record1,record2){
        if (record1.name < record2.name) return -1;
        else if (record1.name > record2.name) return 1;
        else return 0;
    }
    
    function printRecord(record) {
        console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
    }
    
    function paidStudentsToEnroll() {
        var recordsToEnroll = studentRecords.filter(needToEnroll);
    
        var idsToEnroll = recordsToEnroll.map(getStudentId);
    
        return [ ...currentEnrollment, ...idsToEnroll ];
    }
    
    function needToEnroll(record) {
        return (record.paid && !currentEnrollment.includes(record.id));
    }
    
    function getStudentId(record) {
        return record.id;
    }
    
    function remindUnpaid(recordIds) {
        var unpaidIds = recordIds.filter(notYetPaid);
    
        printRecords(unpaidIds);
    }
    
    function notYetPaid(studentId) {
        var record = getStudentFromId(studentId);
        return !record.paid;
    }

}





// # Modules

// In this exercise, you will refactor some code that manages student enrollment records for a workshop, to use the module pattern.

// ## Instructions

// 1. Wrap all of the functions in a module factory (ie, function named `defineWorkshop()`). This function should make a return a public API object.

// 2. The returned public API object should include the following methods:

// 	- `addStudent(id,name,paid)`
// 	- `enrollStudent(id)`
// 	- `printCurrentEnrollment()`
// 	- `enrollPaidStudents()`
// 	- `remindUnpaidStudents()`,

// 3. Move the `currentEnrollment` and `studentRecords` arrays inside the module definition, but as empty arrays.

// 4. Create an instance of this module by calling `defineWorkshop()`, and name it `deepJS`.

// 5. Define all the student records by calling `deepJS.addStudent(..)` for each.

// 6. Define the student enrollments by calling `deepJS.enrollStudent(..)` for each.

// 7. Change the execution code (the console output steps) to references to `deepJS.*` public API methods.