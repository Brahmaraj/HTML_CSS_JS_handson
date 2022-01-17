function factorial(n){
            if(n>1)
            return n*factorial(n-1);
            else if(n==1)
            return 1;
        }
        console.log(factorial(5));