//Задача 1
class News{
    constructor(title, text, tegArray, date){
        this.title = title;
        this.text = text;
        this.tegArray = tegArray;
        this.date = date;
    }
    title;
    text;
    tegArray = [];
    date = new Date();
    #_for(){
        let result = '';
        for(let el of this.tegArray){
            result += `<a style="font-size: 20px" href="#">${el}</a>\n`;
        }
        return result;
    }
    print(){
        let _date = new Date();
        if(this.date.getDate() == _date.getDate() &&
           this.date.getMonth() == _date.getMonth() &&
           this.date.getFullYear() == _date.getFullYear()){
            document.write(`
                <h2>${this.title}</h2>

                <p style="font-size: 18px">today</p>
                <p style="font-size: 20px">${this.text}</p>

                ${this.#_for()}
            `);
        }
        else if(this.date.getDate() + 7 >= _date.getDate()){
            let count = 0;
            for(var i = this.date.getDate(); i < _date.getDate(); i++){
                count++;
            }
            document.write(`
                <h2>${this.title}</h2>

                <p style="font-size: 18px">${count} days ago</p>
                <p style="font-size: 20px">${this.text}</p>

                ${this.#_for()}
            `);
        }
        else{
            document.write(`
                <h2>${this.title}</h2>

                <p style="font-size: 18px">${this.date.getDate() + '/' + (this.date.getMonth() + 1) + '/' + this.date.getFullYear()}</p>
                <p style="font-size: 20px">${this.text}</p>

                ${this.#_for()}
            `);
        }
    }
}
var date1 = new Date('06/28/2023');
var date2 = new Date('06/25/2023');
var date3 = new Date('01/15/2000');

var news1 = new News('What is Lorem Ipsum?', 
'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, at! Repellat deleniti<br>'+
'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, at! Repellat deleniti',
['#lorem', '#ipsum', '#dolor'], date1);
var news2 = new News('Dolor Sit amet', 
'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, at! Repellat deleniti<br>'+
'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, at! Repellat deleniti',
['#lorem', '#ipsum', '#dolor'], date2);
var news3 = new News('Laudantium, at!',
'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, at! Repellat deleniti<br>'+
'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, at! Repellat deleniti',
['#lorem', '#ipsum', '#dolor'], date3);

document.write('<h1>Задача 1.</h1>')
news1.print();

//Задача 2
var newsPaper = {
    'News': [news1, news2, news3],
    fullPrint(){
        for(let el of newsPaper['News']){
            if(typeof el == 'undefined'){
                continue;
            }
            el.print();
        }
    },
    delete(number){
        delete newsPaper['News'][number];
    },
    search(title){
        let titleExist = true;
        for(let i in newsPaper['News']){
            if(newsPaper['News'][i].title == title){
                titleExist = true;
                document.write(`<p style="font-size: 20px">Порядковый номер новости с заголовком '${title}' = ${i}</p>`);
                break;
            }
            else
                titleExist = false;
        }
        if(titleExist == false)
            document.write(`<p style="font-size: 20px">Новости с заголовком '${title}' нет</p>`);
    }
}

document.write('<h1>Задача 2.</h1> <h2 style="font-family: Arial">Функция fullPrint:</h3>')
newsPaper.fullPrint();
document.write('<h2 style="font-family: Arial">Функция delete</h2>')
newsPaper.delete(0);
newsPaper.fullPrint();
document.write('<h2 style="font-family: Arial">Функция search</h2>')
newsPaper.search('Laudantium, at!');