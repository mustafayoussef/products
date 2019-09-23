var proudctsContainer;
$("#btnAdd").click(function(){
    addProudct();
});
addProudct = () => {
  if(!$("#productName").val() || !$("#productPrice").val() ||  !$("#productCompany").val() || !$("#productDescription").val() ){
    alert("complete your data ,please")
  } else{
    var product = {
        name:$("#productName").val(),
        price:$("#productPrice").val(),
        company:$("#productCompany").val(),
        description:$("#productDescription").val(),
      };
      proudctsContainer.push(product);
        displayData();
        // clearData
        $(".form-control").val('');
        localStorage.setItem("proudctsContainer", JSON.stringify( proudctsContainer ));
      console.log(proudctsContainer);
}
}
displayData = () => {
    cols='';
    for(let i =0; i < proudctsContainer.length; i++){
        cols += `<div class="col-md-3 text-center">
        <div class="card border-info mb-3" style="max-width: 20rem;">
            <div class="card-header">${proudctsContainer[i].company}</div>
            <div class="card-body text-info">
              <h4 class="card-title">${proudctsContainer[i].name}</h4>
              <p class="card-text">${proudctsContainer[i].description}</p>
              <p class="card-text "> Price: ${proudctsContainer[i].price}</p>
              <button id="edit${i}" class="btn btn-info" onclick="editProduct(${i})" >Edit</button>
              <button id="update${i}" class="btn btn-info btnUpdate" onclick="updateProudct(${i})">update</button>
              <button class="btn btn-danger" onclick="deleteProduct(${i})">Delete</button>
            </div>
          </div>
    </div>`
    }
    $("#rowData").html(cols);
}
deleteProduct = (id) => {
  // alert(id)
  proudctsContainer.splice(id,1);
  localStorage.setItem("proudctsContainer", JSON.stringify( proudctsContainer ));
  displayData();
}
if(localStorage.getItem("proudctsContainer")==null){
  proudctsContainer = [];
}else{
  proudctsContainer = JSON.parse( localStorage.getItem("proudctsContainer") );
  displayData();
}
editProduct = (id) => {
  console.log(id);
  $("#edit"+id).hide(1000);
  $("#update"+id).show(1000);
  $("#productName").val(proudctsContainer[id].name);
  $("#productPrice").val(proudctsContainer[id].price);
  $("#productCompany").val(proudctsContainer[id].company);
  $("#productDescription").val(proudctsContainer[id].description);

}
updateProudct = (id) => {
proudctsContainer.splice(id,1) + addProudct(id)
}