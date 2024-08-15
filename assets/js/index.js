function sendMail() {
	var params = {
		name: document.getElementById("name").value,
		email: document.getElementById("email").value,
		subject: document.getElementById("subject").value,
		message: document.getElementById("message").value,
	};

	const serviceID = "service_q84spmt";
	const templateID = "template_5wa370n";

	emailjs
		.send(serviceID, templateID, params)
		.then((res) => {
			document.getElementById("name").value;
			document.getElementById("email").value;
			document.getElementById("subject").value;
			document.getElementById("message").value;
			console.log(res);
			alert("Your message has been sent");
		})
		.catch((err) => console.log(err));
}
