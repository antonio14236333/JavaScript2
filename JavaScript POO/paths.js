class Paths{
    constructor({
        name,
        learningPaths
    }){
        this.name = name;
        this.learningPaths = learningPaths;
    }
    show(){
        console.log(this.name);
        console.log(this.learningPaths + '\n');
    }
    addCourse(course){
        this.learningPaths.push(course);
        console.log('Los cursos actualizados despues de añadir curso, son ');
        console.log(this.learningPaths + '\n');
    }
    deleteCourse(){
        this.learningPaths.pop();
    }
}
const IDAW = new Paths({
    name: 'Introducción al Desarrollo Web',
    learningPaths: ['HTML',
    'CSS',
    'JavaScript']
});
IDAW.show();
IDAW.deleteCourse();
IDAW.addCourse('JavaScript actualizado');





const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1);
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]