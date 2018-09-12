const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');


const port = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static('client/build'));


//catch-all that sends back the react app's index.html
// app.get('*', (req, res) => {
// 	console.log(__dirname + '/client/build/index.html');
// 	res.sendFile(path.join(__dirname, '/client/build/index.html'));
// });

app.post('/api/send-emails/', (req, res) => {

	req.body.forEach(element => {
		let transporter = nodemailer.createTransport({
		    host: 'smtp.gmail.com',
		    port: 465,
		    secure: true,
		    auth: {
		        type: 'OAuth2',
		        user: 'events.form@csesoc.org.au',
		        clientId: element.clientId,
		        clientSecret: element.clientSecret,
		        refreshToken: element.refreshToken,
		        accessToken: element.accessToken,
		        expires: 1484314697598
		    }
		});
		
		let mailOptions = {
			from: 'CSESoc Events <events.form@csesoc.org.au>',
			to: element.recipient,
			subject: element.subject,
			html: element.html
		};

		transporter.sendMail(mailOptions, (err, info) => {
			if (err) {
				console.log(err);
			} else {
				console.log(info);
			}
		});
	})
	res.send("emails sent successfully");
});

app.listen(port, () => console.log(`server started on port ${port}`));
