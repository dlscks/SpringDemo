$(document).ready(function(){
 $('#btn').click(process1);
});

/*
function process(){
 $.ajax({
    type:'GET',
    dataType:'json',
    url:'searchOpen.do?query='+$('#search').val(),
    success:viewMessage,
    error:function(xhr, textStatus, error) {
    alert(xhr.status);
    }
 });
}
*/



function process1() {
alert('test');
  $.ajax({
     	type:'GET',
     	url:'https://dapi.kakao.com/v3/search/book?target=title',
     	headers:{"Authorization": "KakaoAK 5f91b99284e09937b79fa17611f0717e"},
     	dataType:'json',
     	data:{"query": $('#search').val()},
     	success:viewMessage
     	
  });
  
}


function viewMessage(res) {
 //console.log(res);
 //alert(res.documents[0].title);
 
 $.each(res.documents, function(index, element){
   $('#wrap table').append(`<tr><td>${element.title}</td><td><a href="${element.url}"><img src="${element.thumbnail}" /></a></td><td>${element.price}</td></tr>`);
  });

}