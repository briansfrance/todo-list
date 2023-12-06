function editTodo(index) {
    console.log(index)
    document.getElementById(`todoItemShown-${index}`).style.display = 'none'
    document.getElementById(`formItemUpdate-${index}`).style.display = 'flex'
    document.getElementById(`buttonsContainer-${index}`).style.display = 'none'

}