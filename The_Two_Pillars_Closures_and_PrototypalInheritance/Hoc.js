//Higher Order Components
//use case - we can use HOC for user auth. 

const multiply = num1 => num2 => console.log(num1 * num2);

//method-1
multiply(2)(4);     //8

//method-1
//multiply fun returns an other function. Here, we are storing the returned fun in calc. Now, calc holds the retured fun from mutiply. Then, we are invoking the calc fun
const calc = multiply(5)
calc(5);                //25


/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

const state = {
    userAuth : true
};

const Home = () => console.log(`Hello there! you beautiful people.`);

const HOC = ChildComponent => {

    const isAuthenticated = () => {

        if(state.userAuth){
            return ChildComponent;
        } 
    };
    return isAuthenticated;
};

HOC(Home)()();                //Hello there! you beautiful people.