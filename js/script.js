let book_no=1

class Book{
  constructor(bookName,authorName,type){
    this.book=bookName
    this.author=authorName
    this.type=type
  }
  
  add(){
    let table=document.querySelector(".table>tbody");
    let tr=document.createElement("tr");
    tr.innerHTML=`
    <th scope="row">${book_no}</th>
      <td>${this.book}</td>
      <td>${this.author}</td>
      <td>${this.type}</td>`;
    book_no+=1
    table.appendChild(tr);
  }
  
}


let submit=document.getElementById("action-on-press");

submit.addEventListener("click",function (e){
e.preventDefault()

 let book_name=document.getElementById("inputBookName").value;
 let author_name=document.getElementById("inputAuthorName").value;
 let message=document.getElementById("message");
 
 if(book_name.length == 0 || author.name==0){
  
 message.innerHTML=`
  <div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>Warning</strong> You book name or author name is not valid.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
 `;
 
 return 0;
 }
 
 let type;
 
let book_coding=document.getElementById("coding") ;   let book_web=document.getElementById("web");
let book_hacking=document.getElementById("hacking");

if(book_coding.checked){
      type=book_coding.value;
  }


else if(book_web.checked){
    type=book_web.value;
  }


else if(book_hacking.checked){
    type=book_hacking.value;
  }

 let obj=new Book(book_name,author_name,type);
 obj.add();
 message.innerHTML=`
  <div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Book added</strong> You book is added successfully.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
 `;
 

});