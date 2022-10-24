Q1. 3 because 3 is the length of the array

Q2. 150, because we want to ouput the last value of the discountedPrice, which is 150

Q3. 150, because we want to output the last value of the finalprice, which is 150

Q4. [ 50, 100, 150 ]. Because an empty array has been created and then each element in prices has been pushed to this new array.

Q5. Error, i is local so undefined outside blaock scope (outside the loop)

Q6. Error, discountedPrice is local so undefined outside blaock scope (the loop)

Q7. 150 Because we want to print the last value of finalPrice that's 150

Q8. [50, 100, 150] Because an empty array has been created and then each element in prices has been pushed to this new array.

Q9. Error, i is local so undefined outside blaock scope

Q10. 3 Because it's the length of the array, which is 3

Q11. [50, 100, 150] Because an empty array has been created and then each element in prices has been pushed to this new array. There isn't an error though discount is declared as const is because discount only stores reference to an array, thus value of discount was never changed.

Q12.

    a. student.name

    b. student['Grad Year']

    c. student.greeting()

    d. student['Favorite Teacher'].name

    e. student.courseLoad[0]

Q13.

    a. 32; 2 is mapped to string '2';

    b. 1; '3' is mapped to number 3, because string '3' - '2' is not valid

    c. 3; null is mapped to number 0;

    d. 3null; null is converted to string 'null'

    e. 4; true is mapped to number 1;

    f. 0; false and null are both mapped to number 0.

    g. 3undefined; undefined is converted to string 'undefined'

    H. NaN; 3 is mapped to number 3 and undefined mapped to NaN, and operation with NaN only lead to NaN.
   
Q14.

    a. true; '2' mapped to number 2, 2 > 1 is true;

    b. false; because for string it will evaluate the first char in string, so '2' > '1' and thus false;

    c. true; the '==' is used so '2' is mapped to number 2, which is the same as 2, so true;

    d. false; since '===' are used, so type difference will lead to a change in the comparsion.

    e. false; true is mapped to number 1 which is not equals to 2

    f. true; because boolean constructor treat nonzero integer as true, so true is equals to true;

Q15. The == operator convert operands' type before comparison, but the === operator compares the values and the operands' data types as well.

Q17. 

    [2,4,6]

    1. called modifyArray with input [1,2,3]
   
    2. go through all the values in the array
   
    3. multiply each value by 2 from calling doSomething
   
Q19. 

1

4

3

2

1 is printed immediately, then timesout are set to print 1000ms after and 3 print 0ms after. Because 4 is printed next after 1 since it's not part of setTimeout, then after 4, 3 and 2 will be printed based on the time.

