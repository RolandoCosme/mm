// public static ClientResponse SendSimpleMessage() {
//     Client client = Client.create();
//     client.addFilter(new HTTPBasicAuthFilter("api",
//                 "key-8f469d15520273679a514faa0b840318"));
//     WebResource webResource =
//         client.resource("https://api.mailgun.net/v3/sandboxf5d7696de7654e6fa359ad195a1b3948.mailgun.org/messages");
//     MultivaluedMapImpl formData = new MultivaluedMapImpl();
//     formData.add("from", "Mailgun Sandbox <postmaster@sandboxf5d7696de7654e6fa359ad195a1b3948.mailgun.org>");
//     formData.add("to", "Rolando Cosme <rolando.cosme@gmail.com>");
//     formData.add("subject", "Hello Rolando Cosme");
//     formData.add("text", "Congratulations Rolando Cosme, you just sent an email with Mailgun!  You are truly awesome!  You can see a record of this email in your logs: https://mailgun.com/cp/log .  You can send up to 300 emails/day from this sandbox server.  Next, you should add your own domain so you can send 10,000 emails/month for free.");
//     return webResource.type(MediaType.APPLICATION_FORM_URLENCODED).
//                                                 post(ClientResponse.class, formData);
// }


// curl -s --user 'api:pubkey-8a9acd5eddb7f5ef3a86df80da84f785' \
//     https://api.mailgun.net/v3/Rolando_Cosme/messages \
//     -F from='Excited User <mailgun@Ladybug>' \
//     -F to=YOU@Ladybug \
//     -F to=bar@Ladybug.com \
//     -F subject='Hello' \
//     -F text='Testing some Mailgun awesomness!'


var Mailgun = require('mailgun').Mailgun;

var mg = new Mailgun('pubkey-8a9acd5eddb7f5ef3a86df80da84f785');

mg.sendText('Ladybug@Ladybug.com', ['Recipient 1 <rolando.cosme@gmail.com>', 'rcosmedeveloper@gmail.com'],
  'This is the subject - mailgun',
  'This is the text - mailgun',
  'noreply@example.com', {},
  function(err) {
    if (err) console.log('Oh noes: ' + err);
    else     console.log('Success');
});