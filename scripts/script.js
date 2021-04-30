'use strict';

const todoControl = document.querySelector('.todo-control'),
      headerInput = document.querySelector('.header-input'),
      todoList = document.querySelector('.todo-list'),
      todoCompleted = document.querySelector('.todo-completed');

const todoData = [
    {
        value: 'Сварить кофе',
        completed: false
    },
    {
        value: 'Помыть посуду',
        completed: true
    }
];

const render = function(){
    todoList.textContent = ''; //обнуляем старые записи
    todoCompleted.textContent = ''; //обнуляем значения чек-боксов
    
    todoData.forEach(function(item){
        const li = document.createElement('li'); //создаем элемент ли
        li.classList.add('todo-item'); //добавляем ему класс

        li.innerHTML = '<span class="text-todo">' + item.value + '</span>' + 
            '<div class="todo-buttons">' + 
                '<button class="todo-remove"></button>' + 
                '<button class="todo-complete"></button>' + 
            '</div>';
        
        if (item.completed){    //если дело выполнено, то
            todoCompleted.append(li); //добавляем в выполненные
        } else {todoList.append(li); //иначе - в список ел
        }

        const btnTodoComplete = li.querySelector('.todo-complete');

        btnTodoComplete.addEventListener('click', function(){ //меняем значение чек-бокса при нажатии на противоположное значение
            item.completed = !item.completed;
            render();
        })

    });
};

todoControl.addEventListener('submit', function(event){
    event.preventDefault(); //сбрасываем настройки браузера

    const newTodo = {   //новое дело в список дел
        value: headerInput.value,
        completed: false
    };

    todoData.push(newTodo); //заливаем новое дело в список дел

    render();
});

render();

//16.34