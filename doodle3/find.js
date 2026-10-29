const user = [
    { id: 1, name: 'Sharon', dept: "MCA", roll: 44 },
    { id: 2, name: 'abc', dept: "MCA", roll: 27 },
    { id: 3, name: 'xyz', dept: "MCA", roll: 46 },
];

const a = user.find(j => j.id === 1);
console.log(a.name); 

const b = user.find(i => i.id === 2);
console.log(b.dept);

const c = user.find(l => l.id === 3);
console.log(c.roll); 