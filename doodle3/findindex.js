const user = [
    { id: 1, name: 'Sharon', dept: "MCA", roll: 44 },
    { id: 2, name: 'abc', dept: "CSE", roll: 27 },
    { id: 3, name: 'xyz', dept: "CSE", roll:12 },
    {id: 4, name:"sowmiya", dept:"MCA", roll: 46},
    { id: 5, name: 'lathika', dept: "MBA", roll: 13 },
    { id: 6, name: 'maha', dept: "IT", roll: 23 },
    { id: 7, name: 'varshini', dept: "IT", roll: 55},
    { id: 8, name: 'Esther', dept: "MCA", roll: 13 },
    { id: 9, name: 'Joanna', dept: "CSE", roll: 23 },
    { id: 10, name: 'gokulapriya', dept: "AI", roll: 32},
    { id: 11, name: 'melody', dept: "AI", roll: 35},
]; 
const a = user.find(i => i.id === 7);
console.log(a.name); 
const b = user.findIndex(j => j.id === 11);
console.log(b);
const d = user.findIndex(l => l.id === 12);
console.log(d); 