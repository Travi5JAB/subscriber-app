import React from "react";

class MailList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subscribers: [
        {
          email:"travis841235@yahoo.com",
          name: "Travis"
        },
        {
          email:"Info@jvipe.com",
          name: "Joe"
        },
        {
          email:"travis841235@gmail.com",
          name: "trav"
        }
      ],
      emails:["travis841235@gmail.com","Info@jvipe.com","travis841235@yahoo.com"],
      names:["trav","Joe","Travis"],
      message:""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    const { message, emails, names } = this.state
    const templateId = 'template_Bad3uXYE';
    // for (let i = 0; i < emails.length; i++){

      this.sendFeedback(
        templateId,
        {
          message_html: this.state.message,
          from_name: "Travis",
          reply_to: emails[0]
        }
      )
    // }
  }
  sendFeedback (templateId, variables) {
	window.emailjs.send(
  	'gmail', templateId,
  	variables
  	).then(res => {
    	console.log('Email successfully sent!')
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }

  render () {
    const {subscribers} = this.state
    const subscriberList = subscribers.map((subscriber,index) =>{
      return(
        <div>
          {subscriber.name}
          <br/>
          {subscriber.email}
          <hr/>
        </div>
      )
    })
    return (
      <div className="MailList">
        <h1>Mail List</h1>
        <button onClick = {this.handleSubmit}>Send Emails</button>
        {subscriberList}
      </div>
    );
  }
}

export default MailList;
