var socket = io();

$('form').submit(function(){
	socket.emit('chat message', $('#input').val());
	$('#input').val('');
	return false;
});

socket.on('chat message', function(msg){
		send_msg('You', msg);
});


function send_msg(user, msg){
	var html = '<div class="msg_box">
	<p class="text">{MESSAGE}</p>
	</div>';

	var append = '';
	if(user === 'You'){
		append += user + ': ';
	}
	html = html.replace('{MESSAGE}', append+msg);
	console.log(html);
	$('#messages').append(html);
}