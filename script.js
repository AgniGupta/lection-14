let salaries = {
    "John": 100,
    "Pete": 4200,
    "Mark": 250,
    "Мisha": 999,
    };
    
    let topSalary = (obj1) => {
    let arr = Object.entries(obj1).sort(([a, b], [c,d]) => b - d);
    return arr[ arr.length - 1 ]
    }
    
    console.log(topSalary(salaries))