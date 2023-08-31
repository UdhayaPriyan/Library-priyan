let book=[];
function addBook(book){
    let table=$("#booktable tbody");
    table.append(`
    <tr id="${book.id}">
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.yearpublish}</td>
        <td>${book.readstatus}</td>
     
        <td>
        <button> class="btn btn-sm btn-warning editBtn" data-id="${book.id}">
        EDIT
        </button>
        </td>
        <td>
        <button> class="btn btn-sm btn-danger deleteBtn" data-id="${book.id}">
        DELETE
        </button>
        </td>
    `);
}
function clearForm(){
    $("#bookTitle").val("");
    $("#author").val("");
    $("#yearpublish").val("");
    $("#readstatus").val("");

}

function generateId(){
    return Math.floor(Math.random()*1000000);
}

$(document).on("click", "clearBtn", function(){
    clearForm();
});

$("#bookForm").submit(function(e){
    e.preventDefault();

    let book={
        id:generateId(),
        title:$("#booktitle").val(),
        author:$("#author").val(),
        genre:$("#yearpublish").val(),
        year:$("#readstatus").val(),
    
    };

    book.push(book);
    addBook(book);

    clearForm();
});


$("#editForm").submit(function(e){
    e.preventDefault();

    let Bookid=$("#editBookId").val();
    let bookIndex=books.findIndex( (book)=>book.id==bookId);

    let book=books[bookIndex];

    book.title=$("#editbookTitle").val();
    book.author=$("#editauthor").val();
    book.yearpublish=$("#edityearpublish").val();
    book.readstatus=$("#editreadstatus").val();

   
    let row=$(`#${book.id}`);
    row.find("td.eq(0)").text(book.title);
    row.find("td.eq(1)").text(book.author);
    row.find("td.eq(2)").text(book.yearpublish);
    row.find("td.eq(3)").text(book.readstatus);
    

    $("#editModel").model("hide");
});

$(document).on("click",".editBtn",function(){
    let bookId=$(this).data ("id");

    let bookIndex=books.findIndex((book)=>book.id==bookid);

    let book = books[bookIndex];

    $("#editbookTitle").val(book.title);
    $("#editauthor").val(book.author);
    $("#edityearpublish").val(book.yearpublish);
    $("#editreadstatus").val(book.readstatus);
    $("#editBookId").val(book.id);

    $("#editModel").model("show");
});

$(document).on("click",".clsBtn",function(){
    $("#editModel").model("hide");
});
$(document).on("click",".deleteBtn",function(){
    let bookId=$(this).data ("id");

    let bookIndex=books.findIndex((book)=>book.id==bookid);

    let book=books[bookIndex];

    if(confirm(`Are you sure you want to delete ${book.title}`)){
        books.splice(bookIndex,1);
        $(`#${book.id}`).remove();
    }

});

