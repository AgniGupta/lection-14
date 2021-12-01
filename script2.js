let topSalary = (obj1) => {
    let ar = Object.entries(obj1).sort(([a, b], [c,d]) => b - d);
    return ar[ ar.length - 1 ]
    }
    
    console.log(topSalary(salaries))