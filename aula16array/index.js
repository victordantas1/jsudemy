let a = ['Luiz', 'Victor', 'Joao' ]

a[0] = 'Jander'
a[2] = 'Louis'
delete a[1]


const removido = a.pop()
const remove = a.shift()
console.log(removido)
console.log(remove)


a[3] = 'Lon'
a[a.length] = 'Fabio'
a[a.length] = 'Carlos'
a.push('Otavio', 'Jonatan')
a.unshift('Paulo')


console.log(a)
console.log(a[0])
console.log(a[1])
console.log(a[2])
