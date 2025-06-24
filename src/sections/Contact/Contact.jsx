import styles from './ContactStyles.module.css';

// Contact section component
function Contact() {
  return (
    // Section for the contact form, styled with CSS module
    <section id="contact" className={styles.container}>
      {/* Section title */}
      <h1 className="sectionTitle">Contact</h1>
      {/* Contact form using Formspree for submissions */}
      <form action="https://formspree.io/f/xnnajjde" method="POST">
        {/* Name input field */}
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        {/* Email input field */}
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        {/* Message textarea field */}
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        {/* Submit button */}
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
