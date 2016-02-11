var socket = io();

$('form').submit(function(){
	var from = $('#user').val();
	var msg = $('#input').val();
	socket.emit('chat message', from, msg);
	$('#input').val('');

	return false;
});

socket.on('chat message', function(from, msg){
	var me = $('#user').val();
	var from = (from == me) ? 'You' : 'Someone';
	send_msg(from, msg);
});


function send_msg(from, msg){
	var html = '<div class="msg_box"><img class="profile-pic" src="http://i.imgur.com/bNo8EHH.png"><div class="user_name_chat">{NAME}</div><div class="text">{MESSAGE}</div><div class="clear"></div>';
	var append = html.replace('{NAME}', from);
	html = append.replace('{MESSAGE}', msg);
	console.log(html);
	$('#messages').append(html);
}

$(document).ready(function(){
  var name = makeid();
  $('#user').val(name);
  });
  
function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
  for( var i=0; i < 5; i++ ) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}